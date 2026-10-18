#!/usr/bin/env node
/**
 * Valida un CSV del catálogo sin compilar nada. Lo usa la GitHub Action antes de
 * aceptar una hoja nueva, y sirve para comprobar productos.csv en local:
 *   node scripts/validar.mjs productos.csv
 * Sale con código 2 si el CSV no tiene ningún producto válido.
 */
import fs from 'node:fs';
import { listarFotos, parsearCSV, validar } from './catalogo.mjs';

const ruta = process.argv[2];
if (!ruta || !fs.existsSync(ruta)) {
  console.error('Uso: node scripts/validar.mjs <archivo.csv>');
  process.exit(1);
}

const r = validar(parsearCSV(fs.readFileSync(ruta, 'utf8')), listarFotos());
const lineas = [`Productos válidos: ${r.productos.length}`, `Filas omitidas: ${r.omitidos.length}`];
const enActions = Boolean(process.env.GITHUB_ACTIONS);

for (const o of r.omitidos) {
  const detalle = `${o.nombre || o.id || 'sin nombre'}: ${o.errores.join('; ')}`;
  if (enActions) console.log(`::warning title=Fila ${o.fila} omitida::${detalle}`);
  lineas.push(`- Fila ${o.fila} omitida. ${detalle}`);
}
for (const a of r.avisos) {
  if (enActions) console.log(`::warning::${a}`);
  lineas.push(`- ${a}`);
}

const resumen = lineas.join('\n');
console.log(resumen);
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Validación del catálogo\n\n${resumen}\n`);
}
if (r.cabecerasInvalidas || r.productos.length === 0) {
  if (enActions) console.log('::error::El CSV no tiene ningún producto válido; no se publica.');
  process.exit(2);
}
