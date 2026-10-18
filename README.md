# WIL Fragance · catálogo web

Catálogo de perfumes de diseñador y árabes con carrito y pedido por WhatsApp. Sitio estático hecho con [Astro](https://astro.build) y Tailwind CSS, publicado en Cloudflare Pages y administrado desde Google Sheets.

## Guías

1. [Instalación en Windows y comandos](docs/01-instalacion-windows.md)
2. [Administrar el catálogo con Google Sheets](docs/02-google-sheets.md): crear y publicar la hoja, añadir un perfume con su foto, marcar uno como agotado
3. [Publicar la web: GitHub, Cloudflare Pages y dominio](docs/03-despliegue.md)
4. [Fotos: requisitos y lista de fotos para reemplazar](docs/04-fotos.md)

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala las dependencias (una vez por computadora) |
| `npm run dev` | Lee el catálogo, prepara las fotos y abre la web en `http://localhost:4321` |
| `npm run build` | Compila la web lista para publicar en `dist/` |
| `npm run preview` | Sirve la carpeta `dist/` para revisarla |
| `npm run catalogo` | Solo lee la hoja o `productos.csv` y escribe `src/datos/catalogo.json` |
| `npm run fotos` | Solo prepara las fotos (`node scripts/preparar-fotos.mjs --forzar` las regenera todas) |
| `npm run validar` | Valida `productos.csv` sin compilar |

## Cómo fluye el catálogo

```
Google Sheets (publicada como CSV)
        │  SHEET_CSV_URL
        ▼
scripts/catalogo.mjs ──(si falla)──▶ productos.csv del repositorio
        │  valida cada fila; las que tienen errores se omiten y se avisan
        ▼
src/datos/catalogo.json ──▶ Astro genera portada, catálogo y una página por perfume
```

- Cada hora, la GitHub Action `sincronizar-catalogo` compara la hoja con `productos.csv`. Si cambió, guarda el nuevo CSV en el repositorio y Cloudflare Pages vuelve a publicar la web. Si no cambió, no hace nada.
- El botón manual de la Action publica al momento.
- La página `/estado/` (no indexada) muestra de dónde salió el catálogo, qué filas se omitieron y qué datos faltan por configurar.

## Estructura

```
productos.csv            Respaldo del catálogo (y fuente cuando no hay hoja)
fotos/                   Fotos originales, una por perfume (nombre = columna "imagen")
scripts/
  catalogo.mjs           Lee hoja/CSV, valida y escribe src/datos/catalogo.json
  preparar-fotos.mjs     Fotos cuadradas en WebP (400/800/1200) e imagen para compartir
  validar.mjs            Validación del CSV (la usa la GitHub Action)
src/
  datos/tienda.ts        Datos de la tienda: WhatsApp, Instagram, zona, pagos, horario
  pages/                 Portada, catálogo, perfume/[slug], carrito, sobre-nosotros, FAQ, contacto, estado
  components/            Cabecera, pie, tarjeta de producto, iconos, chevrón, botón de WhatsApp
  scripts/               Carrito (localStorage) y filtros del catálogo
  styles/global.css      Tokens de diseño (colores, tipografía) y componentes
public/
  logo/                  Logo en SVG y PNG, favicon, icono móvil
  _headers               Cabeceras de caché y seguridad para Cloudflare Pages
.github/workflows/       Action de sincronización horaria + botón manual
docs/                    Guías paso a paso
DESIGN.md, PRODUCT.md    Sistema visual y contexto del producto
```

## Tema claro y oscuro

La web sigue la preferencia del sistema del visitante y tiene un botón (luna/sol) en la cabecera para cambiarla; la elección se guarda en el navegador. Los colores de cada tema viven en `src/styles/global.css` (`--t-*`); la cabecera, el banner, el pie y los arcos blancos de las fotos son iguales en los dos.

## Datos de la tienda

Edita `src/datos/tienda.ts`: número de WhatsApp (con código de país, solo dígitos), Instagram, ciudad o zona, métodos de pago y horario. Hasta que los cambies, la web muestra marcadores entre corchetes y `/estado/` lo recuerda.
