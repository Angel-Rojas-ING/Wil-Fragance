# 4 · Fotos

## Cómo se procesan

Cada archivo de `fotos/` se convierte al compilar en:

- `public/img/perfumes/<nombre>-400.webp`, `-800.webp` y `-1200.webp`: cuadradas, con el frasco centrado y el fondo llevado a blanco puro (si el original era blanco o gris claro) y el margen sobrante recortado. El navegador elige el tamaño según la pantalla.
- `public/img/og/<nombre>.jpg` (1200 × 630): la imagen que se ve al compartir la ficha por WhatsApp o Instagram.

Estas carpetas no se guardan en el repositorio: se regeneran en cada compilación (unos 35 segundos para 114 fotos). En tu computadora, `npm run fotos` solo procesa las nuevas o cambiadas; `node scripts/preparar-fotos.mjs --forzar` las rehace todas.

## Requisitos para una foto nueva

- Fondo blanco o muy claro y uniforme. Un fondo oscuro o de color se conserva tal cual y desentona en la vitrina.
- Frasco (y caja si quieres) centrado y completo, sin recortes.
- Mínimo 800 × 800 px; ideal 1200 × 1200 o más. Las de 447 px se ven borrosas en un móvil moderno.
- Sin marcas de agua, logos de otras tiendas ni texto superpuesto.
- Nombre de archivo sin espacios ni tildes: `marca-nombre.jpg`. Ese nombre va en la columna `imagen` de la hoja.

## Fotos actuales que conviene reemplazar

Revisadas una a una. Las 97 restantes están bien.

| Perfume | Archivo en `fotos/` | Problema |
|---|---|---|
| Carolina Herrera 212 VIP Rosé | carolina-herrera-212-vip-rose.webp | Marca de agua de otra tienda (logo rojo con un colibrí) |
| Yves Saint Laurent Libre EDP | yves-saint-laurent-libre-edp.jpg | "ysbeauty.com" impreso en la caja y solo 447 px |
| Jean Paul Gaultier Scandal Pour Homme EDT | jean-paul-gaultier-scandal-pour-homme-edt.jpg | Fondo negro; no se puede llevar a blanco |
| Afnan 9PM Elixir EDP | afnan-9pm-elixir-edp.jpg | Fondo marrón; se conserva tal cual |
| Azzaro The Most Wanted EDP Intense | azzaro-the-most-wanted-edp-intense.jpg | 375 × 500 px |
| Versace Bright Crystal EDT | versace-bright-crystal-edt.jpg | 375 × 500 px |
| Afnan 9PM Rebel EDP | afnan-9pm-rebel-edp.jpg | 544 × 367 px, apaisada |
| Jo Milano Game of Spades Wildcard Parfum | jo-milano-game-of-spades-wildcard-parfum.jpg | 399 × 501 px |
| Jo Milano Game of Spades Royale Parfum | jo-milano-game-of-spades-royale-parfum.jpg | 449 × 450 px |
| Versace Eros EDP | versace-eros-edp.jpg | 447 px |
| Paco Rabanne Fame EDP | paco-rabanne-fame-edp.jpg | 447 px |
| Lattafa Asad Elixir EDP | lattafa-asad-elixir-edp.jpg | 447 px |
| Rasasi Hawas for Him EDP | rasasi-hawas-for-him-edp.jpg | 447 px |
| Armaf Odyssey Homme White Edition EDP | armaf-odyssey-homme-white-edition-edp.jpg | 447 px y la caja sale recortada |
| Jean Paul Gaultier Le Beau Paradise Garden EDP | jean-paul-gaultier-le-beau-paradise-garden-edp.jpg | 510 px |
| Prada Paradoxe EDP | prada-paradoxe-edp.jpg | 560 px |
| Emporio Armani Stronger With You Absolutely | emporio-armani-stronger-with-you-absolutely.webp | El frasco ocupa un cuarto del encuadre (unos 300 px útiles) |
| Versace Eros EDT | versace-eros-edt.jpg | Frasco y caja pequeños en el encuadre (unos 350 px útiles) |

Aceptable pero mejorable: French Avenue Vulcan Feu (679 px).

Para reemplazar una foto: sube el archivo nuevo a `fotos/` **con el mismo nombre** (sobrescribe) y la web la regenerará en la siguiente publicación. Si cambias el nombre, actualiza también la columna `imagen` en la hoja.
