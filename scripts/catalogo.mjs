#!/usr/bin/env node
/**
 * Catálogo de WIL Fragance.
 *
 * Lee los productos desde la hoja de Google publicada como CSV (variable SHEET_CSV_URL)
 * o, si no está configurada o falla, desde productos.csv del repositorio.
 * Valida cada fila (precio numérico, stock válido, imagen existente...) y escribe
 * src/datos/catalogo.json, que es lo que lee la web al compilarse.
 *
 * Regla de oro: nunca rompe la web. Una fila con errores se omite y se avisa;
 * una hoja caída se sustituye por el último productos.csv.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Papa from 'papaparse';

export const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const RUTA_CSV = path.join(RAIZ, 'productos.csv');
export const DIR_FOTOS = path.join(RAIZ, 'fotos');
export const SALIDA = path.join(RAIZ, 'src', 'datos', 'catalogo.json');

const GENEROS = {
  hombre: 'hombre', hombres: 'hombre', masculino: 'hombre', caballero: 'hombre', el: 'hombre',
  mujer: 'mujer', mujeres: 'mujer', femenino: 'mujer', dama: 'mujer', ella: 'mujer',
  unisex: 'unisex', mixto: 'unisex', ambos: 'unisex',
};
const TIPOS = {
  arabe: 'árabe', arabes: 'árabe', 'perfume arabe': 'árabe',
  disenador: 'diseñador', disenadores: 'diseñador', diseno: 'diseñador', designer: 'diseñador',
};
const STOCK_DISPONIBLE = new Set(['', 'disponible', 'si', 's', 'hay', 'en stock', 'stock', '1', 'true', 'x', 'ok']);
const STOCK_AGOTADO = new Set(['agotado', 'no', 'n', 'sin stock', '0', 'false', 'agotados']);
const VERDADERO = new Set(['si', 's', '1', 'x', 'true', 'verdadero', 'yes', 'destacado', 'nuevo', 'novedad']);
const EXTENSIONES = ['.webp', '.jpg', '.jpeg', '.png', '.avif'];
const COLUMNAS_OBLIGATORIAS = ['id', 'nombre', 'marca', 'genero', 'tipo', 'precio', 'imagen'];

export const normalizar = (s) =>
  String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

export const slugify = (s) => normalizar(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

/** "10,800", "RD$10,800", "10.800" y "10800" → 10800 */
export function parsearPrecio(valor) {
  let t = String(valor ?? '').replace(/rd\$|\$|\s/gi, '');
  if (/^\d{1,3}(\.\d{3})+$/.test(t)) t = t.replace(/\./g, '');
  t = t.replace(/,/g, '');
  if (!/^\d+(\.\d{1,2})?$/.test(t)) return NaN;
  return Math.round(Number(t));
}

const texto = (v) => String(v ?? '').trim();
const lista = (v) => texto(v).split(/\s*[;|]\s*|\s*,\s*/).map((s) => s.trim()).filter(Boolean);
const normalizarCabecera = (h) => normalizar(h).replace(/\s+/g, '_');

/** Mapa nombre-en-minúsculas (con y sin extensión) → archivo real dentro de fotos/ */
export function listarFotos(dir = DIR_FOTOS) {
  const mapa = new Map();
  if (!fs.existsSync(dir)) return mapa;
  for (const f of fs.readdirSync(dir)) {
    const ext = path.extname(f).toLowerCase();
    if (!EXTENSIONES.includes(ext)) continue;
    mapa.set(f.toLowerCase(), f);
    const base = path.basename(f, ext).toLowerCase();
    if (!mapa.has(base)) mapa.set(base, f);
  }
  return mapa;
}

export function parsearCSV(textoCSV) {
  const r = Papa.parse(textoCSV.replace(/^﻿/, ''), {
    header: true,
    skipEmptyLines: 'greedy',
    transformHeader: normalizarCabecera,
  });
  return r.data;
}

/**
 * Valida las filas y devuelve { productos, omitidos, avisos }.
 * `fotos` es el mapa que devuelve listarFotos().
 */
export function validar(filas, fotos) {
  const productos = [];
  const omitidos = [];
  const avisos = [];
  if (!filas.length) return { productos, omitidos, avisos: ['El CSV no tiene filas de datos.'], cabecerasInvalidas: true };

  const cabeceras = Object.keys(filas[0]);
  const faltan = COLUMNAS_OBLIGATORIAS.filter((c) => !cabeceras.includes(c));
  if (faltan.length) {
    return { productos, omitidos, avisos: [`Faltan columnas obligatorias: ${faltan.join(', ')}.`], cabecerasInvalidas: true };
  }

  const ids = new Set();
  const slugs = new Map();
  filas.forEach((f, i) => {
    const fila = i + 2; // la fila 1 es la cabecera
    const errores = [];
    const id = texto(f.id);
    const nombre = texto(f.nombre);
    const marca = texto(f.marca);
    if (!id) errores.push('falta el id');
    else if (ids.has(id)) errores.push(`id repetido (${id})`);
    if (!nombre) errores.push('falta el nombre');
    if (!marca) errores.push('falta la marca');

    const genero = GENEROS[normalizar(f.genero)];
    if (!genero) errores.push(`género no válido ("${texto(f.genero)}"; usa hombre, mujer o unisex)`);
    const tipo = TIPOS[normalizar(f.tipo)];
    if (!tipo) errores.push(`tipo no válido ("${texto(f.tipo)}"; usa diseñador o árabe)`);

    const precio = parsearPrecio(f.precio);
    if (!Number.isFinite(precio) || precio <= 0) errores.push(`precio no válido ("${texto(f.precio)}")`);

    const st = normalizar(f.stock);
    let stock;
    if (STOCK_DISPONIBLE.has(st)) stock = 'disponible';
    else if (STOCK_AGOTADO.has(st)) stock = 'agotado';
    else errores.push(`stock no válido ("${texto(f.stock)}"; usa disponible o agotado)`);

    const img = texto(f.imagen);
    let imagen;
    if (!img) errores.push('falta la imagen');
    else {
      const archivo = fotos.get(img.toLowerCase()) ?? fotos.get(path.basename(img, path.extname(img)).toLowerCase());
      if (!archivo) errores.push(`la imagen "${img}" no está en la carpeta fotos/`);
      else imagen = path.basename(archivo, path.extname(archivo));
    }

    if (errores.length) {
      omitidos.push({ fila, id, nombre: [marca, nombre].filter(Boolean).join(' '), errores });
      return;
    }
    ids.add(id);

    let slug = slugify(`${marca} ${nombre}`) || `perfume-${slugify(id)}`;
    if (slugs.has(slug)) {
      avisos.push(`Fila ${fila}: "${marca} ${nombre}" está repetido; su URL lleva el id para distinguirlo.`);
      slug = `${slug}-${slugify(id)}`;
    }
    slugs.set(slug, id);

    const ml = texto(f.ml).replace(/[^\d]/g, '');
    productos.push({
      id,
      slug,
      nombre,
      marca,
      genero,
      tipo,
      precio,
      stock,
      imagen,
      concentracion: texto(f.concentracion),
      ml: ml ? Number(ml) : null,
      notas: texto(f.notas),
      descripcion: texto(f.descripcion),
      ocasion: texto(f.ocasion),
      temporada: texto(f.temporada),
      similarA: lista(f.similar_a),
      destacado: VERDADERO.has(normalizar(f.destacado)),
      novedad: VERDADERO.has(normalizar(f.novedad)),
    });
  });
  return { productos, omitidos, avisos };
}

export async function descargarHoja(url) {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(20000),
    redirect: 'follow',
    headers: { 'cache-control': 'no-cache', 'user-agent': 'wil-fragance-build' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const cuerpo = await res.text();
  const tipo = res.headers.get('content-type') || '';
  if (/text\/html/i.test(tipo) || /^\s*<(!doctype|html)/i.test(cuerpo)) {
    throw new Error('la URL devolvió una página HTML en vez de CSV (¿está publicada como CSV?)');
  }
  return cuerpo;
}

/** Carga el catálogo completo con la lógica de respaldo. */
export async function cargarCatalogo({ urlHoja = process.env.SHEET_CSV_URL } = {}) {
  const fotos = listarFotos();
  const avisos = [];
  const url = texto(urlHoja);
  let fuente = 'csv';
  let contenido = null;

  if (url) {
    try {
      contenido = await descargarHoja(url);
      fuente = 'hoja';
    } catch (e) {
      avisos.push(`No se pudo leer la hoja de Google (${e.message}). Se usa productos.csv del repositorio.`);
    }
  } else {
    avisos.push('SHEET_CSV_URL no está configurada: se usa productos.csv del repositorio.');
  }

  let resultado = null;
  if (contenido !== null) {
    resultado = validar(parsearCSV(contenido), fotos);
    if (resultado.cabecerasInvalidas || resultado.productos.length === 0) {
      avisos.push(`La hoja no tiene productos válidos (${resultado.avisos.join(' ') || 'todas las filas con errores'}). Se usa productos.csv del repositorio.`);
      resultado = null;
      fuente = 'csv';
    }
  }
  if (resultado === null) {
    resultado = validar(parsearCSV(fs.readFileSync(RUTA_CSV, 'utf8')), fotos);
  }

  return {
    generado: new Date().toISOString(),
    fuente,
    hojaConfigurada: Boolean(url),
    productos: resultado.productos,
    omitidos: resultado.omitidos,
    avisos: [...avisos, ...resultado.avisos],
  };
}

const esPrincipal = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (esPrincipal) {
  const catalogo = await cargarCatalogo();
  fs.mkdirSync(path.dirname(SALIDA), { recursive: true });
  fs.writeFileSync(SALIDA, JSON.stringify(catalogo, null, 2));
  console.log(
    `Catálogo: ${catalogo.productos.length} productos desde ${catalogo.fuente === 'hoja' ? 'la hoja de Google' : 'productos.csv'}; ` +
      `${catalogo.omitidos.length} fila(s) omitida(s).`,
  );
  for (const a of catalogo.avisos) console.warn(`AVISO: ${a}`);
  for (const o of catalogo.omitidos) console.warn(`FILA ${o.fila} omitida (${o.nombre || o.id || 'sin nombre'}): ${o.errores.join('; ')}`);
}
