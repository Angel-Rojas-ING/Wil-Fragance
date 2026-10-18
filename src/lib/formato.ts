/** Formato de precio: 10800 → "RD$10,800" */
export function precio(n: number): string {
  return `RD$${separarMiles(n)}`;
}

export function separarMiles(n: number): string {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/** Quita acentos y pasa a minúsculas, para buscar y comparar. */
export function normalizar(s: string): string {
  return (s ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

export function capitalizar(s: string): string {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

export const etiquetaGenero: Record<string, string> = {
  hombre: 'Hombre',
  mujer: 'Mujer',
  unisex: 'Unisex',
};

export const etiquetaTipo: Record<string, string> = {
  'diseñador': 'Diseñador',
  'árabe': 'Árabe',
};
