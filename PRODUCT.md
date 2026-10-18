# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Tailwind CSS, sitio 100 % estático (decisión del usuario). Código en GitHub, hosting en Cloudflare Pages conectado al repositorio. Catálogo administrado en Google Sheets publicada como CSV y leída en tiempo de compilación, con `productos.csv` del repo como respaldo.

## Users

- Compradores en República Dominicana, casi siempre desde el móvil y llegando por Instagram o WhatsApp. Buscan un perfume concreto o exploran por género, tipo (diseñador/árabe), marca y precio; comparan en RD$ y piden por WhatsApp. *(Inferido del brief; sin confirmar con datos de audiencia.)*
- Wil, dueño y administrador: mantiene el catálogo desde Google Sheets sin tocar código y atiende los pedidos por WhatsApp.

## Product Purpose

Catálogo-tienda de WIL Fragance: elegir perfumes, armar un carrito guardado en el navegador y enviar el pedido por WhatsApp con un mensaje ordenado. Éxito: pedidos completos y claros por WhatsApp, y una web que nunca se cae aunque la hoja de cálculo falle.

## Positioning

Perfumería en RD que junta originales de diseñador y perfumes árabes en un solo catálogo, con el campo "Similar a" que conecta un árabe con el diseñador que recuerda (buscar "Aventus" muestra el árabe parecido). Pedido directo por WhatsApp, sin pasarela de pago ni cuentas.

## Operating Context

- 114 perfumes en cuatro categorías de origen: Perfumes de hombre, Perfumes diseñador mujer, Perfumes árabes hombre y Perfumes árabes mujer. Fotos en `materiales/extraido/`.
- Flujo de administración: Google Sheets → CSV publicado → compilación (GitHub Action cada hora si la hoja cambió, más botón manual) → Cloudflare Pages.
- Precios en pesos dominicanos con formato `RD$10,800`.
- Pedido: mensaje de WhatsApp con productos, cantidades, precios, total y nombre del cliente.
- Agotados: etiqueta "Agotado", no se añaden al carrito y ofrecen "Avísame cuando llegue" (abre WhatsApp con el nombre del perfume).

## Capabilities and Constraints

- Portada (logo, banner, categorías Hombre/Mujer/Árabes/Diseñador, destacados, novedades), catálogo con buscador y filtros por género, tipo, marca y rango de precio, orden por precio y nombre; ficha por perfume con URL propia; carrito; botón flotante de WhatsApp; páginas Sobre nosotros, Preguntas frecuentes y Contacto.
- El buscador también encuentra por "Similar a".
- SEO: título y descripción por perfume, Open Graph por perfume, sitemap, robots.txt, datos estructurados Product con precio en DOP y disponibilidad.
- Validación de datos en compilación: precio numérico, stock válido, imagen existente; una fila con error se omite y se avisa, sin tumbar la web.
- Terminología fija: "perfume", "árabes", "diseñador", "Agotado", "Pedir por WhatsApp", "Avísame cuando llegue", "Similar a".
- Pendientes del usuario (no inventar): número de WhatsApp, cuenta de Instagram, ciudad/zona, métodos de pago, dominio.
- Entorno de desarrollo: Windows 11; Node.js ya está instalado en `C:\Program Files\nodejs`.

## Brand Commitments

- Nombre: WIL Fragance (se respeta la grafía "Fragance" del logo).
- Logo vectorial (`materiales/Logo WIL.pdf`, derivados en `materiales/logo/`): frasco negro entre dos columnas con remate en arco, doble chevrón "W" dorado debajo; "WIL" en Montserrat Bold y "FRAGANCE" en Montserrat Regular, mayúsculas con tracking amplio.
- Colores: dorado #E6C643, negro #000000 y blanco #FFFFFF. Solo tonos derivados de estos (un dorado más oscuro para texto sobre blanco, grises cálidos). Ningún color nuevo.
- Tipografía: Montserrat exclusivamente. Bold para títulos; Regular en mayúsculas con mucho espaciado entre letras para subtítulos y etiquetas.
- Motivo: los arcos y columnas del logo como recurso decorativo sutil.
- Tono: perfumería de lujo, elegante y limpia, fácil de comprar desde el móvil; nada de diseño de plantilla.

## Evidence on Hand

- `materiales/extraido/`: 123 fotos (114 únicas; 9 árabes repetidas en "Perfumes de hombre" son idénticas byte a byte). Resolución y fondos variables; auditoría en el chat del 17-10-2026.
- `materiales/Logo WIL.pdf`: vector exacto (#E6C643, negro, Montserrat Bold/Regular).
- No hay textos de "Sobre nosotros", FAQ, ni datos de contacto todavía: se usan marcadores visibles, nunca datos inventados.
- No hay notas olfativas, descripciones, ocasión, temporada ni "Similar a": se llenarán en Google Sheets en otro paso.

## Product Principles

1. Comprar desde el móvil en tres toques: ver, añadir, pedir por WhatsApp.
2. La web nunca se rompe por datos: una fila con error se omite y se avisa; el CSV del repo es el respaldo.
3. Lujo por precisión, no por ornamento: tipografía, espacio, fotos uniformes y el motivo del logo usado con mesura.
4. Una sola fuente de verdad editable sin código (Google Sheets); el código no contiene datos del catálogo.
5. Rápido y ligero: estático, imágenes optimizadas en varios tamaños, JavaScript mínimo (carrito y filtros).

## Accessibility & Inclusion

Contraste AA en todo el texto (dorado oscuro sobre blanco; dorado claro sobre negro), objetivos táctiles de 44 px o más, navegación completa por teclado, textos alternativos con marca y nombre del perfume, y respeto a `prefers-reduced-motion`.
