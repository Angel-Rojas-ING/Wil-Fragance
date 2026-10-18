import datos from '../datos/catalogo.json';

export type Genero = 'hombre' | 'mujer' | 'unisex';
export type Tipo = 'diseñador' | 'árabe';
export type Stock = 'disponible' | 'agotado';

export interface Producto {
  id: string;
  slug: string;
  nombre: string;
  marca: string;
  genero: Genero;
  tipo: Tipo;
  precio: number;
  stock: Stock;
  imagen: string;
  concentracion: string;
  ml: number | null;
  notas: string;
  descripcion: string;
  ocasion: string;
  temporada: string;
  similarA: string[];
  destacado: boolean;
  novedad: boolean;
}

export interface FilaOmitida {
  fila: number;
  id: string;
  nombre: string;
  errores: string[];
}

export interface Catalogo {
  generado: string;
  fuente: 'hoja' | 'csv';
  hojaConfigurada: boolean;
  productos: Producto[];
  omitidos: FilaOmitida[];
  avisos: string[];
}

export const catalogo = datos as unknown as Catalogo;
export const productos: Producto[] = catalogo.productos;
export const porSlug = new Map(productos.map((p) => [p.slug, p]));

export const marcas: string[] = [...new Set(productos.map((p) => p.marca))].sort((a, b) => a.localeCompare(b, 'es'));

export const hayUnisex = productos.some((p) => p.genero === 'unisex');

export function destacados(n = 8): Producto[] {
  const marcados = productos.filter((p) => p.destacado);
  return (marcados.length ? marcados : productos).slice(0, n);
}

export function novedades(n = 8): Producto[] {
  const marcados = productos.filter((p) => p.novedad);
  if (marcados.length) return marcados.slice(0, n);
  const numericos = productos.every((p) => /^\d+$/.test(p.id));
  const orden = numericos ? [...productos].sort((a, b) => Number(b.id) - Number(a.id)) : [...productos].reverse();
  return orden.slice(0, n);
}

/** Perfumes relacionados: misma marca primero, luego mismo tipo y género. */
export function relacionados(p: Producto, n = 4): Producto[] {
  const otros = productos.filter((o) => o.slug !== p.slug);
  const puntuar = (o: Producto) =>
    (o.marca === p.marca ? 4 : 0) + (o.tipo === p.tipo ? 2 : 0) + (o.genero === p.genero ? 1 : 0) + (o.stock === 'disponible' ? 0.5 : 0);
  return otros
    .map((o) => ({ o, s: puntuar(o) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.o);
}

export const TAMANOS = [400, 800, 1200] as const;

export function rutaImagen(imagen: string, tamano: (typeof TAMANOS)[number] = 800): string {
  return `/img/perfumes/${imagen}-${tamano}.webp`;
}

export function srcsetImagen(imagen: string): string {
  return TAMANOS.map((t) => `${rutaImagen(imagen, t)} ${t}w`).join(', ');
}

export function rutaOG(imagen: string): string {
  return `/img/og/${imagen}.jpg`;
}

export function rutaPerfume(p: Pick<Producto, 'slug'>): string {
  return `/perfume/${p.slug}/`;
}

export function nombreCompleto(p: Pick<Producto, 'nombre' | 'marca'>): string {
  return `${p.marca} ${p.nombre}`;
}

/** Texto de búsqueda: marca, nombre y "similar a", sin acentos. */
export function textoBusqueda(p: Producto): string {
  return [p.marca, p.nombre, ...p.similarA]
    .join(' ')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

/** Divide "Salida: a, b; Corazón: c; Fondo: d" en tres bloques; si no sigue ese patrón, devuelve null. */
export function piramideNotas(notas: string): { salida: string; corazon: string; fondo: string } | null {
  if (!notas) return null;
  const buscar = (clave: RegExp) => {
    const m = notas.match(clave);
    return m ? m[1].trim().replace(/[.;]+$/, '') : '';
  };
  const salida = buscar(/salida\s*:\s*([^;|\n]+)/i);
  const corazon = buscar(/coraz[oó]n\s*:\s*([^;|\n]+)/i);
  const fondo = buscar(/fondo\s*:\s*([^;|\n]+)/i);
  if (!salida && !corazon && !fondo) return null;
  return { salida, corazon, fondo };
}
