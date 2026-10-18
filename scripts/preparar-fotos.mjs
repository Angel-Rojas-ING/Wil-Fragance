#!/usr/bin/env node
/**
 * Prepara las fotos del catálogo para la web.
 *
 * Toma cada archivo de fotos/ y genera en public/img/perfumes/:
 *   <nombre>-400.webp, <nombre>-800.webp y <nombre>-1200.webp  (cuadradas, fondo blanco uniforme)
 * y en public/img/og/:
 *   <nombre>.jpg  (1200×630, para la vista previa al compartir por WhatsApp o Instagram)
 *
 * Fondo coherente: si el fondo original es claro (blanco o gris claro) se lleva a blanco puro
 * y se recorta el margen sobrante para que todos los frascos ocupen el mismo espacio.
 * Si el fondo es oscuro, se deja tal cual y se avisa.
 *
 * Solo procesa fotos nuevas o cambiadas. Con --forzar las regenera todas.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ENTRADA = path.join(RAIZ, 'fotos');
const SALIDA = path.join(RAIZ, 'public', 'img', 'perfumes');
const SALIDA_OG = path.join(RAIZ, 'public', 'img', 'og');
const LOGO_OG = path.join(RAIZ, 'public', 'logo', 'isotipo-512.png');
const TAMANOS = [400, 800, 1200];
const OCUPACION = 0.82; // el frasco ocupa como máximo el 82 % del lado
const EXTENSIONES = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
const forzar = process.argv.includes('--forzar');
const mtimeScript = fs.statSync(fileURLToPath(import.meta.url)).mtimeMs;

const mediana = (arr) => {
  const s = Array.from(arr).sort((a, b) => a - b);
  return s[s.length >> 1] ?? 255;
};

/** Color mediano del marco exterior de la imagen (2 % del lado menor). */
async function colorDeFondo(buf) {
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: c } = info;
  const grosor = Math.max(4, Math.round(Math.min(w, h) * 0.02));
  const r = [], g = [], b = [];
  const tomar = (x, y) => {
    const i = (y * w + x) * c;
    r.push(data[i]); g.push(data[i + 1]); b.push(data[i + 2]);
  };
  for (let y = 0; y < h; y += 2) {
    const franja = y < grosor || y >= h - grosor;
    for (let x = 0; x < w; x += 2) {
      if (franja || x < grosor || x >= w - grosor) tomar(x, y);
    }
  }
  return [mediana(r), mediana(g), mediana(b)];
}

function alDia(src, salidas) {
  if (forzar) return false;
  const srcMs = Math.max(fs.statSync(src).mtimeMs, mtimeScript);
  return salidas.every((s) => fs.existsSync(s) && fs.statSync(s).mtimeMs >= srcMs);
}

async function procesar(src) {
  const base = path.basename(src, path.extname(src));
  const salidas = TAMANOS.map((t) => path.join(SALIDA, `${base}-${t}.webp`));
  const salidaOG = path.join(SALIDA_OG, `${base}.jpg`);
  if (alDia(src, [...salidas, salidaOG])) return { base, estado: 'al día' };

  // 1) Aplanar transparencias sobre blanco y pasar a sRGB.
  let buf = await sharp(src).rotate().flatten({ background: '#ffffff' }).removeAlpha().toColourspace('srgb').png().toBuffer();

  // 2) Fondo coherente: fondos claros → blanco puro; recorte de márgenes.
  const fondo = await colorDeFondo(buf);
  const claro = Math.min(...fondo) >= 165;
  let relleno = '#ffffff';
  let estado = 'normalizada';
  if (claro) {
    const factores = fondo.map((v) => Math.min(1.6, 255 / Math.max(v, 1)));
    buf = await sharp(buf).linear(factores, [0, 0, 0]).png().toBuffer();
    try {
      buf = await sharp(buf).trim({ background: '#ffffff', threshold: 28 }).png().toBuffer();
    } catch {
      estado = 'sin recorte';
    }
  } else {
    relleno = `rgb(${fondo.join(',')})`;
    estado = `fondo oscuro (${relleno}), sin normalizar: conviene reemplazarla`;
  }

  // 3) Cuadrado uniforme con el frasco centrado.
  const meta = await sharp(buf).metadata();
  const lado = Math.ceil(Math.max(meta.width, meta.height) / OCUPACION);
  const padX = lado - meta.width;
  const padY = lado - meta.height;
  const cuadrado = await sharp(buf)
    .extend({ top: Math.floor(padY / 2), bottom: Math.ceil(padY / 2), left: Math.floor(padX / 2), right: Math.ceil(padX / 2), background: relleno })
    .resize(1200, 1200, { fit: 'fill', kernel: 'lanczos3' })
    .png()
    .toBuffer();

  fs.mkdirSync(SALIDA, { recursive: true });
  fs.mkdirSync(SALIDA_OG, { recursive: true });
  await Promise.all(TAMANOS.map((t, i) => sharp(cuadrado).resize(t, t).webp({ quality: 82, effort: 4 }).toFile(salidas[i])));

  // 4) Imagen para compartir (1200×630): frasco centrado, isotipo discreto y filete dorado.
  const producto = await sharp(cuadrado).resize(560, 560).png().toBuffer();
  const capas = [{ input: producto, left: Math.round((1200 - 560) / 2), top: 32 }];
  if (fs.existsSync(LOGO_OG)) {
    const logo = await sharp(LOGO_OG).resize(104, 104, { fit: 'inside' }).png().toBuffer();
    capas.push({ input: logo, left: 1200 - 104 - 44, top: 630 - 104 - 44 });
  }
  capas.push({ input: { create: { width: 1200, height: 6, channels: 3, background: '#E6C643' } }, left: 0, top: 624 });
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: relleno } })
    .composite(capas)
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(salidaOG);

  return { base, estado, tamano: `${meta.width}×${meta.height}` };
}

async function principal() {
  if (!fs.existsSync(ENTRADA)) {
    console.warn('No existe la carpeta fotos/. No hay nada que preparar.');
    return;
  }
  const archivos = fs
    .readdirSync(ENTRADA)
    .filter((f) => EXTENSIONES.includes(path.extname(f).toLowerCase()))
    .map((f) => path.join(ENTRADA, f));
  const inicio = Date.now();
  let hechas = 0;
  const avisos = [];
  const cola = [...archivos];
  const obrero = async () => {
    while (cola.length) {
      const src = cola.shift();
      try {
        const r = await procesar(src);
        if (r.estado !== 'al día') {
          hechas++;
          if (r.estado !== 'normalizada') avisos.push(`${r.base}: ${r.estado}`);
        }
      } catch (e) {
        avisos.push(`${path.basename(src)}: ERROR ${e.message}`);
      }
    }
  };
  await Promise.all(Array.from({ length: 4 }, obrero));
  console.log(`Fotos: ${archivos.length} en total, ${hechas} procesadas en ${((Date.now() - inicio) / 1000).toFixed(1)} s.`);
  for (const a of avisos) console.warn(`AVISO foto ${a}`);
}

await principal();
