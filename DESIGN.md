---
name: WIL Fragance
description: Fachada negra, vitrinas en arco siempre blancas y oro solo donde se lee y se toca; perfumería en República Dominicana con pedido por WhatsApp, en tema claro y oscuro.
colors:
  negro: "#000000"
  blanco: "#ffffff"
  oro: "#e6c643"
  oro-oscuro: "#7e6911"
  marfil: "#f9f8f0"
  hueso: "#f3f1e7"
  arena: "#e3e0d3"
  piedra: "#a6a396"
  humo: "#747063"
  carbon: "#21201c"
  grafito: "#2a2820"
  fondo-oscuro: "#0f0e0c" # --t-fondo en tema oscuro
  fondo-oscuro-suave: "#161512" # --t-fondo-suave en tema oscuro
  fondo-oscuro-tarjeta: "#1b1a16" # --t-fondo-tarjeta en tema oscuro (definido, sin uso)
typography:
  display:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "34px" # 36px desde 640px, 56px desde 1024px (titular del banner)
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "30px" # 36px desde 768px (h1 de página y de ficha)
    fontWeight: 700
    lineHeight: 1.2 # 1.11 a 36px (interlineado del paso de tamaño)
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "24px" # 30px desde 768px (h2 de sección)
    fontWeight: 700
    lineHeight: 1.33 # 1.2 a 30px
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "18px" # h3 de pasos, h2 de bloques de ficha y de paneles
    fontWeight: 700
    lineHeight: 1.56
    letterSpacing: "-0.02em"
  product-name:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px" # h3 de la tarjeta de producto y nombre en línea de carrito
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px" # 16px en párrafos de banner y prosa desde 768px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  small:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px" # texto secundario, enlaces del pie, selects del catálogo
    fontWeight: 400
    lineHeight: 1.43
  caption:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "12px" # migas de pan, legal del pie, notas del carrito
    fontWeight: 400
    lineHeight: 1.33
  label:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "11px" # .etiqueta, siempre en mayúsculas (10px solo en /estado/)
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.3em"
  button:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "12px" # 11px dentro de la tarjeta de producto; mayúsculas
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.16em"
  badge:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "10px" # .insignia "Agotado"; mayúsculas
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.26em"
  chip:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  price:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px" # tarjeta; 30px/36px en ficha; 24px total del carrito; 16px/18px subtotal de línea
    fontWeight: 700
    letterSpacing: "-0.01em"
  price-prefix:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.62em" # el "RD$" pequeño dentro de .precio
    fontWeight: 400
    letterSpacing: "0.08em"
  lockup-wil:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px" # "WIL" en la cabecera
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
  lockup-fragance:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "8px" # "FRAGANCE" en la cabecera, 3px bajo "WIL"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.42em"
  menu-mobile:
    fontFamily: "Montserrat Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "24px" # enlaces principales del menú móvil
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "-0.025em"
rounded:
  none: "0"
  arco: "999px 999px 0 0"
  pildora: "999px"
  circulo: "9999px"
spacing:
  margen-movil: "16px" # px-4
  margen-escritorio: "24px" # md:px-6
  contenedor: "1280px" # max-w-7xl
  contenedor-carrito: "1152px" # max-w-6xl
  contenedor-lectura: "768px" # max-w-3xl (404, estado)
  contenedor-faq: "672px" # max-w-2xl
  seccion-movil: "48px" # py-12
  seccion-escritorio: "64px" # md:py-16
  banda-oscura-movil: "56px" # py-14 (pie, cierre, portada de "Sobre nosotros")
  banda-oscura-escritorio: "80px" # md:py-20
  rejilla-movil: "12px" # gap-3
  rejilla-escritorio: "20px" # md:gap-5
  titulo-a-etiqueta: "8px" # mt-2
  titulo-a-rejilla: "28px" # mt-7
  bloque: "32px" # mt-8 entre bloques de ficha y de página
  tarjeta: "12px" # p-3, 14px abajo
  panel: "20px" # p-5; 24px con md:p-6
  cabecera: "60px"
  objetivo-tactil: "44px" # h-11 w-11
  control: "48px" # altura mínima de botón y campo
  chip: "40px"
  fab: "56px"
  reserva-fab: "96px" # pb-24 al final del catálogo para que el FAB no tape la última fila
components:
  button-negro:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.4rem"
    height: "48px"
  button-negro-hover:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.oro}"
  button-negro-oscuro:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.negro}"
  button-negro-oscuro-hover:
    backgroundColor: "{colors.oro}"
    textColor: "{colors.negro}"
  button-oro:
    backgroundColor: "{colors.oro}"
    textColor: "{colors.negro}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.4rem"
    height: "48px"
  button-oro-hover:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.oro}"
  button-borde:
    backgroundColor: "transparent"
    textColor: "{colors.negro}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.4rem"
    height: "48px"
  button-borde-hover:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
  button-borde-oro:
    backgroundColor: "transparent"
    textColor: "{colors.oro}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.4rem"
    height: "48px"
  button-borde-oro-hover:
    backgroundColor: "{colors.oro}"
    textColor: "{colors.negro}"
  chip:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.carbon}"
    typography: "{typography.chip}"
    rounded: "{rounded.pildora}"
    padding: "0.5rem 0.95rem"
    height: "40px"
  chip-pressed:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
  campo:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.carbon}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1rem"
    height: "48px"
  tarjeta-producto:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.none}"
    padding: "12px 12px 14px"
  arco:
    backgroundColor: "{colors.blanco}"
    rounded: "{rounded.arco}"
  columna:
    backgroundColor: "transparent"
    rounded: "{rounded.arco}"
    width: "44px"
    height: "140px"
  punto-carrusel:
    backgroundColor: "{colors.oro}"
    rounded: "{rounded.pildora}"
    size: "8px"
  insignia:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.oro}"
    typography: "{typography.badge}"
    rounded: "{rounded.none}"
    padding: "7px 10px 6px"
  panel-suave:
    backgroundColor: "{colors.marfil}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.none}"
    padding: "20px"
  cabecera:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
    height: "60px"
  menu-movil:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
    padding: "0 24px 32px"
  pie:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
    padding: "56px 16px"
  aviso:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  fab-whatsapp:
    backgroundColor: "{colors.oro}"
    textColor: "{colors.negro}"
    rounded: "{rounded.circulo}"
    size: "56px"
  globo-carrito:
    backgroundColor: "{colors.oro}"
    textColor: "{colors.negro}"
    rounded: "{rounded.circulo}"
    padding: "0 4px"
    height: "18px"
  selector-cantidad:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.none}"
    height: "48px"
    width: "152px"
  selector-cantidad-compacto:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.none}"
    height: "44px"
    width: "136px"
---

# Design System: WIL Fragance

Sistema visual del sitio estático de WIL Fragance (Astro 7 + Tailwind 4, interfaz en español). Documenta lo que está construido en `src/styles/global.css`, `src/layouts/Base.astro`, `src/components/*.astro`, `src/pages/*.astro` y `src/scripts/{tema,carrusel,carrito}.ts`; los tokens del bloque YAML de arriba son normativos y la prosa explica cómo aplicarlos. Los valores de los componentes del YAML son los del tema claro; la tabla de tokens semánticos de **Colors** dice cómo giran en el oscuro. Si un dato está en el YAML, aquí se nombra y se contextualiza, no se redefine.

## Overview

**Creative North Star: "La vitrina"**

La web es la vitrina de una perfumería: una fachada negra (cabecera, banner, pie y cierre) con ventanas en arco iluminadas en blanco donde vive cada frasco, y oro solo en lo que se lee y se toca. Esa frase viene del contrato de dirección de la portada y el código la cumple: el negro es arquitectura, el blanco es vitrina, el oro es señal. No hay tercer acento, no hay degradados ni brillos y nada proyecta sombra en reposo; la profundidad sale de alternar fondos y de filetes de 1 px. Rechaza explícitamente la tienda-plantilla de tarjetas iguales sobre gris y el "negro con neón".

El sitio tiene dos temas. De día (por defecto) el contenido se apoya sobre blanco y marfil; de noche, con el conmutador de la cabecera o la preferencia del sistema, sobre negros cálidos (#0F0E0C y #161512) con texto hueso. La fachada negra no cambia en ningún caso y el arco sigue siendo blanco en los dos temas: la vitrina queda encendida también de noche. Todo lo que vive dentro del contenido se escribe con tokens semánticos (`fondo`, `fondo-suave`, `linea`, `tinta`, `texto`, `texto-suave`, `acento`) que giran enteros; la fachada usa los tokens fijos del logo.

La densidad cambia con el modo de cada página. La portada persuade: aire generoso (secciones de 48/64 px), un titular de 56 px en escritorio, el portal de dos columnas doradas enmarcando un carrusel de destacados y cuatro vitrinas de categoría. Catálogo, ficha y carrito operan: dos columnas en móvil y cuatro en escritorio, controles de 48 px, chips de 40 px, todo alcanzable con el pulgar y con una sola acción por tarjeta ("Añadir"). Montserrat es la única familia y habla en dos voces heredadas del logo: "WIL" (Bold, apretada) para títulos, nombres y precios, y "FRAGANCE" (Regular, mayúsculas, 0.3em) para marcas, etiquetas y navegación. Los arcos y las columnas del logo son el motivo decorativo, usado con mesura: el arco enmarca toda foto, el portal aparece una sola vez y el chevrón doble sirve de separador y de viñeta.

**Key Characteristics:**
- Fachada negra (#000000) fija en cabecera, banner, pie y cierre; contenido sobre tokens semánticos que giran con el tema: blanco (#FFFFFF) y marfil (#F9F8F0) de día, negros cálidos (#0F0E0C y #161512) de noche.
- Oro #E6C643 solo como texto sobre fondos negros y como relleno con texto negro; sobre blanco o marfil la voz dorada es #7E6911 (`text-acento`).
- Montserrat única en dos voces: Bold apretada (700, −0.02em) y Regular en mayúsculas con 0.3em; pesos 400, 600 y 700 nada más.
- Toda foto de producto vive dentro de un arco blanco (999px 999px 0 0, proporción 1/1.18) en los dos temas.
- Plano: filetes de 1 px, sin sombras en reposo, sin degradados, sin esquinas redondeadas fuera del arco, la píldora y el círculo.
- Movimiento contenido: una sola curva (`ease-salida`), 200–600 ms, un carrusel que descansa a los 5 s y la foto que viaja de la tarjeta a la ficha.

## Colors

Tres colores del logo (negro, oro #E6C643, blanco) y solo tonos derivados: un oro oscuro para leer sobre blanco, una escala de grises cálidos con el mismo matiz amarillento y, para el tema oscuro, tres negros cálidos de fondo. Ningún color semántico (los errores se dicen con palabras en tinta, no en rojo; "Agotado" es negro y oro).

### Primary
- **Oro** (`oro`, #E6C643): la señal. Texto, etiquetas y enlaces sobre la fachada negra (navegación al pasar el ratón, etiqueta del banner, títulos de columna del pie, "Ver carrito" en el aviso) y, en el tema oscuro, el `acento` de todo el contenido; relleno del botón `btn-oro`, del botón flotante de WhatsApp, del globo del carrito y del punto activo del carrusel, siempre con texto o icono negro; trazo de 2 px de las columnas del portal; filete de acento de 1 px (`border-t border-oro` en los pasos de "Así de fácil" y en las notas olfativas); color de selección de texto; anillo de foco sobre la fachada y en el tema oscuro.
- **Oro oscuro** (`oro-oscuro`, #7E6911): la voz dorada sobre fondo claro, expuesta como `text-acento` en el tema claro. Etiquetas bajo los títulos, marca en la tarjeta y en la línea del carrito, `dt` de especificaciones, numeral de los pasos, enlaces en texto corrido (subrayados), icono de Instagram en contacto. Nunca sobre negro ni en el tema oscuro (ahí el acento es `oro`).

### Neutral
- **Negro** (`negro`, #000000): la fachada, fija en los dos temas. Fondo de cabecera, menú móvil, banner, pie, banda de cierre y tarjeta de WhatsApp en contacto; botón primario y chip activo en el tema claro (`tinta`); insignia "Agotado"; `theme-color` del navegador.
- **Blanco** (`blanco`, #FFFFFF): la vitrina. Fondo del arco en los dos temas; `fondo` del tema claro (página, tarjetas, campos, chips); `tinta` del tema oscuro (títulos, precios, botón primario, chip activo); texto sobre la fachada, con opacidades 90/85/80/75/70/55/50 % para jerarquía secundaria.
- **Marfil** (`marfil`, #F9F8F0): `fondo-suave` del tema claro: bandas alternas de la portada (Destacados, Novedades, "También te puede gustar"), paneles, aside del carrito, estados vacíos; pista de la barra de scroll.
- **Hueso** (`hueso`, #F3F1E7): `texto` del tema oscuro (cuerpo y respuestas sobre los negros cálidos) y flecha del `select` en oscuro. Como `fondo-tarjeta` claro está definido pero ninguna utilidad lo usa.
- **Arena** (`arena`, #E3E0D3): `linea` del tema claro: filete de 1 px de tarjeta, arco, chip, separadores, `divide-y`, `border-t` de bloques de ficha, raya vertical entre grupos de chips.
- **Piedra** (`piedra`, #A6A396): en el tema claro es solo decorativo (2.5:1 sobre blanco): borde de la tarjeta al pasar el ratón, puntos "·" entre marca · tipo · género en la ficha, pulgar de la barra de scroll. En el tema oscuro es `texto-suave` (7.6:1 sobre #0F0E0C) y borde de campo.
- **Humo** (`humo`, #747063): `texto-suave` del tema claro (4.9:1): texto secundario, `placeholder`, migas de pan, notas del carrito, prefijo "RD$", iconos del selector de cantidad en reposo, acciones terciarias ("Quitar", "Vaciar el carrito"); también el borde de 1 px de los campos (`.campo`), para que el contorno pase de 3:1.
- **Carbón** (`carbon`, #21201C): `texto` del tema claro (cuerpo, miga actual, respuestas de FAQ, flecha del `select`); hover de la tarjeta negra de contacto.
- **Grafito** (`grafito`, #2A2820): filete de 1 px sobre la fachada (borde inferior de la cabecera, borde superior del legal del pie, divisores del menú móvil, `.separador--oscuro`) y `linea` del tema oscuro.
- **Fondo oscuro** (`fondo-oscuro`, #0F0E0C), **Fondo oscuro suave** (`fondo-oscuro-suave`, #161512) y **Fondo oscuro de tarjeta** (`fondo-oscuro-tarjeta`, #1B1A16): los negros cálidos del tema oscuro, equivalentes de blanco, marfil y hueso como fondos. Solo existen como valores de `--t-fondo*`; nunca como texto, acento ni como fondo en el tema claro. El tercero está definido y sin uso.

### Tokens semánticos (giran con el tema)
Definidos en `:root` (claro), `:root[data-tema="oscuro"]` y, sin JavaScript, `@media (prefers-color-scheme: dark)`; expuestos a Tailwind con `@theme inline` como `bg-fondo`, `bg-fondo-suave`, `bg-fondo-tarjeta`, `border-linea` / `divide-linea` / `bg-linea`, `text-tinta` / `border-tinta`, `text-texto`, `text-texto-suave` y `text-acento`. Los de botón y flecha solo se usan dentro de las clases de `global.css`.

| Token | Claro | Oscuro | Papel |
| --- | --- | --- | --- |
| `--t-fondo` | blanco | #0F0E0C | fondo de página, tarjetas, campos, chips |
| `--t-fondo-suave` | marfil | #161512 | bandas alternas, paneles, aside, pista de scroll |
| `--t-fondo-tarjeta` | hueso | #1B1A16 | definido, sin uso |
| `--t-linea` | arena | grafito | filetes de 1 px dentro del contenido |
| `--t-tinta` | negro | blanco | títulos, precios, chip activo, foco, borde de botón de borde |
| `--t-texto` | carbón | hueso | cuerpo |
| `--t-texto-suave` | humo | piedra | secundario, placeholder, borde de campo |
| `--t-acento` | oro oscuro | oro | etiquetas, marcas, enlaces, numerales |
| `--t-boton` / `--t-boton-texto` | negro / blanco | blanco / negro | `btn-negro` |
| `--t-boton-hover` / `--t-boton-hover-texto` | negro / oro | oro / negro | `btn-negro:hover` |
| `--t-flecha` | carbón | hueso | flecha del `select` |

Mecánica: un script en línea en `<head>` lee `localStorage["wil.tema"]` (o la preferencia del sistema) y pone `data-tema` en `<html>` antes de pintar; `tema.ts` gestiona el botón de la cabecera, guarda la elección, sigue los cambios del sistema mientras no haya elección guardada y vuelve a aplicar el tema tras cada navegación del `ClientRouter`. `<meta name="color-scheme" content="light dark">`; `body` transiciona fondo y color en 300 ms.

### Contraste medido (WCAG 2.x, luminancia relativa)
| Par | Ratio | Dónde |
| --- | --- | --- |
| oro sobre negro | 12.5:1 | etiquetas, enlaces, títulos de columna del pie, insignia (10 px) |
| negro sobre oro | 12.5:1 | `btn-oro`, FAB de WhatsApp, globo del carrito, selección de texto |
| blanco sobre negro | 21:1 | titulares y botones sobre la fachada |
| blanco al 75 % / 70 % sobre negro | 11.4:1 / 10:1 | párrafos del banner, del pie y del cierre; flechas del carrusel |
| blanco al 55 % / 50 % sobre negro | 6.3:1 / 5.3:1 | legal del pie (12 px) y "114 perfumes · 27 marcas" (14 px) |
| blanco al 40 % / 28 % sobre negro | 3.7:1 / 2.3:1 | solo decorativo: punto "·" del pie de foto y puntos inactivos del carrusel |
| oro oscuro sobre blanco / marfil | 5.4:1 / 5.0:1 | `acento` claro: etiquetas, marcas y enlaces (AA a 11 px porque es mayúscula espaciada; no bajes de ahí) |
| humo sobre blanco / marfil | 4.9:1 / 4.65:1 | `texto-suave` claro; sobre marfil queda justo: mínimo 12 px |
| carbón sobre blanco / marfil | 16.3:1 / 15.3:1 | cuerpo claro |
| piedra sobre blanco | 2.5:1 | decorativo en claro, nunca texto |
| arena sobre blanco | 1.3:1 | filete; por eso el campo usa `humo` como borde |
| oro sobre blanco | 1.7:1 | prohibido como texto |
| blanco / hueso sobre #0F0E0C | 19.3:1 / 17:1 | `tinta` y `texto` del tema oscuro |
| hueso sobre #161512 | 16.1:1 | cuerpo sobre paneles oscuros |
| piedra sobre #0F0E0C / #161512 | 7.6:1 / 7.2:1 | `texto-suave` oscuro |
| oro sobre #0F0E0C / #161512 | 11.5:1 / 10.9:1 | `acento` oscuro |
| negro sobre blanco | 21:1 | `btn-negro` y chip activo en oscuro |

### Named Rules
**La regla del oro.** El oro #E6C643 es texto solo sobre negro o sobre los fondos del tema oscuro; dentro del contenido la voz dorada es `text-acento` (#7E6911 en claro, #E6C643 en oscuro). Cuando el oro es relleno (botón, FAB, globo, selección, punto activo) lo que va encima es siempre negro. Como filete de 1 px puede acentuar un bloque; como tinte de superficie, no.

**La regla de los tres colores.** No existe un cuarto matiz: ni verde de WhatsApp (el icono hereda `currentColor`), ni rojo de error, ni azul de enlace. Los estados se dicen con palabras y con negro/oro ("Agotado", "Añadido", "Escribe tu nombre para enviar el pedido" en tinta). Los tres negros cálidos del tema oscuro son fondos, nunca acentos.

**La regla de los dos temas.** La fachada (cabecera, menú, banner, pie, cierre y la tarjeta negra de contacto) es negra en los dos temas y usa tokens fijos; el contenido usa los tokens semánticos y gira entero; el arco es blanco siempre. En oscuro el botón primario se invierte a blanco con texto negro y su hover pasa a oro.

**La regla del filete.** Las separaciones son líneas de 1 px: `linea` (arena de día, grafito de noche) dentro del contenido y `grafito` sobre la fachada. Las únicas excepciones de grosor son el trazo de 2 px de las columnas del portal y los 2 px del anillo de foco.

## Typography

**Display Font:** Montserrat Variable (con ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Montserrat Variable (la misma)
**Label/Mono Font:** ninguna; no hay monoespaciada (solo `tabular-nums` en precios del carrito y en la tabla de /estado/)

Se carga con `@fontsource-variable/montserrat` (eje de peso completo; el sitio usa 400, 600 y 700) y el archivo latino se precarga en `<head>`. `body` a 15 px / 1.6 en `texto`, antialiasing activado; los encabezados llevan `text-wrap: balance` y heredan `tinta`.

**Character:** una sola familia que hace de dos. La voz "WIL": Bold (700) con tracking negativo (−0.02em), en caja normal, para titulares, títulos de sección, nombres de perfume y precios. La voz "FRAGANCE": Regular (400) en mayúsculas con 0.3em, pequeña (11 px), para marcas, etiquetas, navegación y títulos de columna. El botón es el único híbrido permitido: Bold (700), mayúsculas, 0.16em, 12 px. El Semibold (600) sobrevive en tres sitios menores: el número del selector de cantidad, "Agotado por ahora" y el título del carrito vacío.

### Hierarchy
- **Display** (700, 34 px → 36 px desde 640 px → 56 px desde 1024 px, interlineado 1.04, −0.02em): solo el titular del banner de portada ("Perfumes de diseñador y árabes"), en blanco sobre negro. La portada de "Sobre nosotros" usa 30 px → 48 px (`md:text-5xl`) con la misma voz.
- **Headline** (700, 30 px → 36 px desde 768 px, −0.02em): h1 de página (Catálogo, Tu carrito, Contacto, Preguntas frecuentes, 404) y nombre del perfume en la ficha.
- **Title** (700, 24 px → 30 px desde 768 px, −0.02em): h2 de sección en portada, ficha ("También te puede gustar") y cierre; con etiqueta debajo cuando hay subtítulo ("Destacados", "Novedades", "Marcas") y solo cuando no ("Explora", "Así de fácil").
- **Subtitle** (700, 18 px, −0.02em): h3 de los pasos (con el numeral "1." en `acento`), h2 de los bloques de ficha (Notas olfativas, Descripción, Similar a), "Resumen" del carrito, títulos de paneles ("¿Otra duda?") y mensajes de estado vacío.
- **Nombre de producto** (700, 15 px, interlineado 1.375, −0.01em): h3 de la tarjeta y nombre en la línea del carrito; en la ficha el nombre sube a Headline. En el pie de foto del banner, 14 px Bold en blanco.
- **Body** (400, 15 px, 1.6): texto corrido en `texto`; 16 px desde 768 px en el párrafo del banner y en `.prosa`. Las descripciones largas caben en `max-w-prose` / `max-w-md`.
- **Small** (400, 14 px): texto secundario en `texto-suave`, enlaces del pie, párrafos de los pasos, nota de precio unitario, `select` del catálogo.
- **Caption** (400, 12 px): migas de pan, legal del pie (blanco 55 %), notas de pago y de "Se abrirá WhatsApp" en el carrito, acciones terciarias.
- **Label / Etiqueta** (400, 11 px, 1.5, 0.3em, MAYÚSCULAS): clase `.etiqueta`. Bajo un título (mt-2) en `acento`; marca en tarjeta, carrito y pie de foto del banner; `dt` de especificaciones y notas; enlaces de navegación (blanco 90 %); títulos de columna del pie en `oro`; "Tu nombre"; "Menú". Solo /estado/ conserva una variante de 10 px.
- **Button** (700, 12 px, 1, 0.16em, MAYÚSCULAS): todos los `.btn`; 11 px dentro de la tarjeta de producto.
- **Badge / Insignia** (400, 10 px, 0.26em, MAYÚSCULAS): "Agotado" sobre negro en oro.
- **Chip** (400, 13 px): filtros y marcas, en caja normal.
- **Price / Precio** (700, −0.01em, `tinta`): 17 px en tarjeta, 30 → 36 px en ficha, 24 px en el total del carrito, 16 → 18 px en el subtotal de línea; el prefijo "RD$" va en `<small>` a 0.62em, Regular, 0.08em, en `texto-suave`, con 0.15em de margen. En el carrito, `tabular-nums`.
- **Lockup de cabecera**: "WIL" 17 px Bold 0.14em sobre "FRAGANCE" 8 px Regular 0.42em, separados 3 px, `leading-none`, ambos en blanco, junto al isotipo blanco de 36 × 37 px.
- **Menú móvil** (700, 24 px, −0.025em): enlaces principales del `<dialog>`; los secundarios van en Etiqueta al 85 %.

### Named Rules
**La regla de las dos voces.** Un texto es "WIL" (Bold, apretado, caja normal) o "FRAGANCE" (Regular, mayúsculas, 0.3em). Nunca Bold en mayúsculas espaciadas ni Regular apretada en un título; el botón (700, mayúsculas, 0.16em) es la única mezcla y ya existe.

**La etiqueta va debajo.** Cuando un título lleva subtítulo, es una etiqueta 8 px debajo ("Destacados" / "SELECCIÓN DE LA CASA"); nunca encima como kicker ni en lugar del título. Un título puede ir solo ("Explora", "Así de fácil").

**Precio en pesos, sin decimales.** Formato `RD$10,800` (`lib/formato.precio`): prefijo "RD$", separador de miles con coma, nunca céntimos. En componentes, el prefijo va en `<small>`; en texto corrido ("RD$3,000 a RD$6,000", pie de foto del banner, mensaje de WhatsApp) va entero.

## Layout

Contenedor de 1280 px (`max-w-7xl`) centrado con márgenes de 16 px en móvil y 24 px desde 768 px; el carrito usa 1152 px (`max-w-6xl`), las preguntas frecuentes 672 px (`max-w-2xl`) y 404 / estado 768 px (`max-w-3xl`). Puntos de corte: los de Tailwind 4 (640 / 768 / 1024 px); la navegación de escritorio aparece a 1024 px (`lg`), el resto de cambios ocurre a 768 px (`md`).

**Bandas.** Cada sección es una banda a lo ancho con padding vertical de 48 px (64 px desde 768 px). Las bandas negras (pie, cierre, portada de "Sobre nosotros") usan 56 / 80 px; catálogo y carrito, más operativos, 32 / 48 px; la ficha 24 / 40 px. En la portada el fondo alterna: banner negro → Explora `fondo` → Destacados `fondo-suave` → Así de fácil `fondo` → Novedades `fondo-suave` → Marcas `fondo` → Cierre negro → Pie negro. El fondo suave nunca lleva marco: es el fondo de la banda y las tarjetas se recortan sobre él. El catálogo termina con 96 px de reserva (`pb-24`) y el carrito lleno con 64 px bajo 1024 px, para que el botón flotante no tape la última fila ni el botón de pedir.

**Ritmo dentro de una sección.** Título → etiqueta opcional a 8 px (`mt-2`) → rejilla a 28 px (`mt-7`), lista de pasos a 32 px (`mt-8`), chips a 24 px (`mt-6`). En la cabecera de sección con enlace ("Ver todo el catálogo") el título y el enlace se alinean por la base (`items-end justify-between`); en móvil ese enlace se convierte en un `btn-borde` a lo ancho bajo la rejilla.

**Rejilla de productos.** 2 columnas en móvil, 4 desde 768 px en la portada; en el catálogo 2 → 3 (768 px) → 4 (1024 px). Hueco de 12 px en móvil y 20 px en escritorio. La imagen declara `sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"`.

**Banner de portada.** Dos columnas desde 768 px (`md:grid-cols-2`, centradas verticalmente, hueco 32 / 48 px, padding 28 → 56 px arriba y 48 → 80 px abajo). En móvil el portal va primero y el texto debajo (`order-1` / `order-2`). El portal es una rejilla `[auto_1fr_auto]` alineada por la base, ancho máximo 384 px (448 px desde 768 px), hueco 12 / 20 px: columna + arco + columna, con las columnas al 60 % de la altura del arco. Dentro del arco, la pista del carrusel con los destacados; debajo, el pie de foto centrado de 14 px (nombre Bold blanco, marca en etiqueta oro, "·" al 40 % y precio) y, si hay más de una diapositiva, flechas de 44 px con los puntos entre ellas (12 px debajo del pie de foto).

**Ficha.** Foto y texto en dos columnas desde 768 px (hueco 32 → 56 px); la columna de la foto se limita a 448 px en móvil. Los bloques de la columna de texto se apilan a 32 px con filete superior `linea` y 24 px de padding (`border-t pt-6`). Migas de pan de 12 px sobre el contenido (`pt-5`). "También te puede gustar" es una banda `fondo-suave` con la rejilla de 4.

**Catálogo.** Cabecera (h1 + etiqueta con conteo y resumen de filtros), buscador a lo ancho con icono a 16 px del borde (`pl-12`), chips de género y tipo que envuelven en varias filas con hueco de 8 px (raya vertical `linea` entre los dos grupos), rejilla de controles 2 → 4 columnas con hueco 12 px y texto de 14 px (marca, precio, orden, "Limpiar filtros"), rejilla de productos a 32 px.

**Carrito.** Lista de líneas (`divide-y` y `border-y` en `linea`, cada línea `[76px_1fr]` → `[92px_1fr_auto]` desde 640 px, padding vertical 16 px) y un aside de resumen de 380 px desde 1024 px (`lg:grid-cols-[1fr_380px]`, hueco 32 px), pegajoso a 80 px del borde superior (`lg:sticky lg:top-20`, justo bajo la cabecera de 60 px).

**Capas fijas.** Cabecera pegajosa de 60 px (`z-30`); botón flotante de WhatsApp a 16 px de la esquina inferior derecha (24 px desde 768 px, `z-40`); aviso del carrito centrado a 96 px del borde inferior en móvil (por encima del FAB) y a 32 px en escritorio (`z-50`); enlace "Saltar al contenido" en `z-50` al recibir foco. El menú móvil es un `<dialog>` a pantalla completa con telón `negro/70`.

**Tacto.** Objetivos de 44 px para los iconos de cabecera, las flechas del carrusel, el selector de cantidad del carrito y "Quitar"; 48 px de altura mínima para botones, campos y el selector de la ficha; chips de 40 px; FAB de 56 px.

**Imágenes.** Cada perfume existe en 400 / 800 / 1200 px WebP (`/img/perfumes/{slug}-{tamaño}.webp`) con `srcset`, más un JPG 1200 × 630 para Open Graph (`/img/og/{slug}.jpg`). Tarjetas a 400, carrusel y ficha a 800 con `fetchpriority="high"` en la primera; las cuatro primeras tarjetas del catálogo cargan `eager`.

### Named Rules
**La regla de las bandas.** El negro fijo es arquitectura (cabecera, banner, pie, cierre, contacto por WhatsApp); el contenido vive sobre `fondo` y `fondo-suave` alternados, que giran con el tema. Nada se apoya sobre gris.

**La regla de la cabecera de sección.** Título, etiqueta opcional debajo, 28 px y la rejilla. Un enlace "Ver todo" se alinea a la derecha por la base del título en escritorio y baja a botón de borde bajo la rejilla en móvil.

## Elevation & Depth

Sistema plano en los dos temas. Las superficies no tienen sombra en reposo ni al pasar el ratón: la profundidad se construye alternando la fachada negra con `fondo` y `fondo-suave`, con filetes de 1 px (`linea` dentro del contenido, `grafito` sobre negro) y con el marco del arco, que es la única superficie que permanece blanca de noche. La tarjeta solo oscurece su filete (`linea` → `piedra`) al pasar el ratón; el panel suave no cambia.

### Shadow Vocabulary
- **Flotante** (`--shadow-flotante`, `box-shadow: 0 14px 30px -12px rgb(0 0 0 / 0.45)`): únicamente para capas que flotan sobre la página: el botón de WhatsApp y el aviso "añadido al carrito". Es una sombra de despegue, no de tarjeta.
- **Anillo de foco de campo** (`.campo:focus`, `box-shadow: 0 0 0 2px #E6C643` con borde `tinta`): es un anillo, no elevación. El resto de elementos usan `outline: 2px solid` en `tinta` (negro de día, blanco de noche) con `outline-offset: 3px` en `:focus-visible`; dentro de `.bg-negro` y en el tema oscuro el contorno es oro.

### Named Rules
**La regla de lo plano.** Si está apoyado, no proyecta sombra. Solo lo que flota (FAB, aviso) usa `shadow-flotante`; una tarjeta, un panel, un menú o un campo jamás.

**Orden de capas.** `insignia` 2 < cabecera 30 < FAB 40 < aviso y "Saltar al contenido" 50. No añadas capas intermedias sin motivo.

## Shapes

Lenguaje de formas rectas con tres excepciones geométricas tomadas del logo y de los controles táctiles:

- **Rectángulo sin radio (0)** para todo lo que se apoya: botones, campos, tarjetas, paneles, insignia, aviso, selector de cantidad, cabecera. Los bordes son filetes de 1 px (`linea` / `grafito`), salvo el campo, cuyo filete es `texto-suave`.
- **Arco** (`999px 999px 0 0`): la ventana de vitrina de cada foto y la silueta de las columnas. El `.arco` es un marco blanco (en los dos temas) de proporción 1 / 1.18 con filete `linea`, alineación inferior y recorte (`overflow: hidden`); la foto mide el 78 % del ancho, `object-fit: contain`, y se posa a un 7 % del borde inferior. Tarjetas, ficha y vitrinas de categoría llevan el filete; `.arco--limpio` lo quita solo cuando el arco se apoya sobre la fachada negra (banner) o es una miniatura (líneas del carrito, 76 → 92 px). Un perfume agotado baja el arco al 60 % de opacidad.
- **Píldora** (`999px`): chips de filtro y de marca.
- **Círculo** (`rounded-full`): botón flotante de WhatsApp (56 px), globo de cantidad del carrito (18 px) y puntos del carrusel (8 px).
- **Columna** (`.columna`): 44 × 140 px (56 px de ancho desde 768 px), trazo de 2 px en oro con remate en arco y sin borde inferior; dentro, una barra dorada al 26 % del ancho que nace a 13 px del remate (`--hueco`, 18 px en escritorio) y llega al suelo. En la portada mide el 60 % de la altura del arco.
- **Chevrón doble** (`Chevron.astro`): el trazado exacto del vector del logo, en oro por defecto (también negro o blanco), proporción 1 : 0.595. Ancho 30 px como separador y en estados vacíos, 34 px en el 404, 26 px en "Sobre nosotros", 18 px como viñeta de lista, 16 px junto a un `dt`.

### Named Rules
**La regla del arco.** Toda foto de producto vive en un arco blanco con filete `linea`; nunca una foto suelta, recortada (`cover`) ni a sangre. `--limpio` solo sobre la fachada negra y en miniaturas. La única imagen fuera del arco es la marca gráfica.

**La regla del portal.** El par de columnas y el carrusel aparecen una sola vez en el sitio: en el banner de portada. No se repiten en fichas, tarjetas ni pies.

**Marca gráfica.** Los activos viven en `public/logo/`: `logo-wil.svg` (frasco y texto negros, columnas y chevrón en oro) y `logo-wil-blanco.svg` (texto y frasco en blanco) para el pie a 120 × 130 px; `isotipo.svg` / `isotipo-blanco.svg` (sin texto) para la cabecera a 36 × 37 px junto al lockup tipográfico; `chevron.svg` / `chevron-negro.svg` como adorno; `favicon.svg` (cuadrado negro con radio 18/100 y chevrón dorado) y derivados PNG (32, 180, 192, 512). El lockup de cabecera se compone con texto vivo, no con el wordmark del SVG.

## Components

Los componentes son clases de `@layer components` en `global.css` más seis piezas Astro (`Header`, `Footer`, `TarjetaProducto`, `WhatsAppFab`, `Icono`, `Chevron`) y tres scripts (`tema.ts`, `carrusel.ts`, `carrito.ts`). Carácter general: sobrios, cuadrados, de alto contraste; el estado se comunica invirtiendo negro y oro (blanco y oro de noche), nunca con color nuevo. Salvo que se diga lo contrario, los colores citados son los del tema claro y giran según la tabla de tokens semánticos.

### Botones (`.btn`)
- **Shape:** rectángulo sin radio, borde de 1 px del color del relleno (o del texto en los de borde), `inline-flex` centrado con hueco de 0.6rem para el icono (18 px), altura mínima 48 px, padding `0.9rem 1.4rem`. Texto 700 / 12 px / 0.16em / mayúsculas; 11 px y `px-2` dentro de la tarjeta.
- **Negro** (`btn-negro`, `boton` sobre `boton-texto`: negro con texto blanco de día, blanco con texto negro de noche): la acción por defecto dentro del contenido: "Añadir", "Añadir al carrito", "Ver catálogo" en estados vacíos, "Pregúntanos por WhatsApp", "Avísame cuando llegue", "Escríbenos por WhatsApp" en paneles claros. Hover: de día el texto pasa a oro sobre el mismo negro; de noche el fondo pasa a oro con texto negro.
- **Oro** (`btn-oro`, oro con texto negro, fijo en los dos temas): la acción que abre WhatsApp o cierra el pedido, y la primaria sobre la fachada: "Ver catálogo" en el banner, "Pedir por WhatsApp" en el carrito, "Escríbenos por WhatsApp" en cierre y menú, "Abrir WhatsApp" en contacto. Hover: se invierte a negro con texto oro. Es también el estado "Añadido" que el botón negro adopta 1400 ms tras añadir.
- **Borde** (`btn-borde`, transparente con borde y texto `tinta`): secundaria dentro del contenido: "Limpiar filtros", "Ver todo el catálogo" (móvil), "Ir al inicio", "Avísame" en tarjeta agotada, "Ver Instagram". Hover: se rellena de `tinta` con texto `fondo`.
- **Borde oro** (`btn-borde-oro`, transparente con borde y texto oro): secundaria sobre negro; definida y disponible, sin uso en las páginas actuales (el banner usa un enlace-etiqueta en su lugar). Hover: relleno oro con texto negro.
- **Estados:** `:active` baja 1 px (`translateY(1px)`, 250 ms `ease-salida`); `[disabled]` / `aria-disabled="true"` al 45 % de opacidad con `cursor: not-allowed` (el "Pedir por WhatsApp" hasta que hay líneas y nombre); color, fondo y borde transicionan en 200 ms. Foco: anillo global de 2 px.
- **A lo ancho:** `w-full` en tarjetas, en el carrito y bajo rejillas en móvil; `flex-1` junto al selector de cantidad en la ficha.

### Enlace-etiqueta
Acción secundaria sin caja: una `.etiqueta` con filete inferior de 1 px del mismo color y `pb-1` ("Pedir por WhatsApp" en el banner, oro sobre negro, hover a blanco). Dentro del contenido el equivalente es la etiqueta en `tinta` con hover a `acento` ("Ver todo el catálogo").

### Chips (`.chip`)
- **Style:** píldora de 40 px, fondo `fondo`, filete `linea`, texto `texto` de 13 px en caja normal, padding `0.5rem 0.95rem`, `white-space: nowrap`.
- **State:** hover oscurece el filete a `tinta`; `aria-pressed="true"` invierte a `tinta` con texto `fondo` (filtros de género y tipo, exclusivos por grupo; "Todos" es el valor vacío). Como enlace (marcas en portada, "Similar a" en ficha) no tiene estado pulsado. En el catálogo los chips envuelven en varias filas (`flex-wrap`, hueco 8 px) con una raya vertical `linea` entre los dos grupos; la clase `.fila-deslizable` sigue definida en `global.css` pero ya no se usa.

### Campos (`.campo`)
- **Style:** 48 px de alto, fondo `fondo`, filete de 1 px en `texto-suave` (humo de día, piedra de noche: el contorno pasa de 3:1), sin radio, padding `0.7rem 1rem`, 15 px (14 px en los `select` del catálogo), `placeholder` en `texto-suave`, `appearance: none`. El `select` añade a la derecha una flecha SVG inline (trazo `flecha` de 1.6 px, 12 × 8) a 1rem del borde y `padding-right: 2.4rem`. El buscador lleva `type="search"` con el icono "buscar" (20 px, `texto-suave`) absoluto a la izquierda y `pl-12`.
- **Focus:** borde `tinta` y anillo de 2 px oro (`box-shadow`), sin `outline`.
- **Etiqueta de campo:** una `.etiqueta` en `acento` encima del campo con 8 px de separación ("Tu nombre"); en el catálogo las etiquetas son `sr-only`.
- **Error:** una línea de 14 px en `tinta` bajo el campo ("Escribe tu nombre para enviar el pedido."), oculta hasta que hace falta, enlazada con `aria-describedby` y `aria-invalid`; sin rojo, sin icono.

### Selector de cantidad
En la ficha, `inline-grid` de 48 px de alto con columnas `[48px_56px_48px]` y filete `linea`: botón "menos" (icono 18 px en `texto-suave`, hover `tinta`), `input[type=number]` centrado en 600 con filetes laterales y sin flechas nativas, botón "más". Rango 1–20. En el carrito la versión compacta mide 44 px (`[44px_48px_44px]`, 14 px, iconos de 16 px) sobre `fondo`, y "Quitar" (12 px, icono papelera) ocupa 44 px de alto.

### Tarjeta de producto (`TarjetaProducto.astro`)
- **Corner Style:** sin radio.
- **Background:** `fondo`, también sobre bandas `fondo-suave`.
- **Shadow Strategy:** ninguna (ver Elevation).
- **Border:** filete `linea`, que pasa a `piedra` al pasar el ratón (300 ms).
- **Internal Padding:** 12 px (14 px abajo).
- **Anatomía:** enlace a la ficha que envuelve el `.arco` con su filete y la foto (400 px, `transition:name="foto-{slug}"`) → nombre (700 / 15 px, 12 px debajo del arco, en `tinta`) → marca (etiqueta 11 px en `acento`, 4 px) → fuera del enlace, precio 17 px con prefijo pequeño (8 px) → botón a lo ancho (12 px): `btn-negro` "Añadir" o, si está agotado, `btn-borde` "Avísame" con el icono de WhatsApp a 16 px.
- **Hover (solo punteros con hover):** la foto sube un 2 % y escala 1.03 en 600 ms `ease-salida`; también al recibir foco el enlace.
- **Agotado:** `.insignia` arriba a la izquierda (12 px / 12 px), arco al 60 %, botón de borde, sin botón de añadir. Lleva `data-*` (género, tipo, marca, precio, búsqueda) para los filtros en cliente.

### Carrusel del portal
Solo en el banner de portada: dentro del `.arco--limpio` del portal, una `ul.pista` con `scroll-snap-type: x mandatory`, una diapositiva por destacado (hasta 8) a todo el ancho, deslizable con el dedo sin JavaScript. `carrusel.ts` añade el autoavance cada 5000 ms, las flechas (`izquierda` / `derecha`, cajas de 44 px, blanco 70 % con hover oro), los puntos (`.punto`: círculos de 8 px, blanco al 28 %; el actual en oro y escalado 1.3, 300 ms) y actualiza la leyenda (nombre, marca, precio y enlace, `aria-live="polite"`) con un `IntersectionObserver` al 60 %. Se detiene al entrar el puntero, al enfocar, al tocar y con la pestaña oculta; no arranca con `prefers-reduced-motion`, donde además el desplazamiento es instantáneo. Las diapositivas del banner no llevan `transition:name`.

### Insignia (`.insignia`)
Rectángulo negro con texto oro de 10 px, Regular, 0.26em, mayúsculas, padding `7px 10px 6px`, posicionado a 12 px de la esquina superior izquierda del arco en `z-index: 2`. Solo existe el texto "Agotado".

### Precio (`.precio`)
Bold, `tinta`, −0.01em; el prefijo "RD$" en `<small>` (0.62em, Regular, 0.08em, `texto-suave`, 0.15em de margen) y la cantidad con separador de miles. Tamaños: 17 px tarjeta, 30 → 36 px ficha, 24 px total del carrito, 16 → 18 px subtotal. El total del carrito se pinta por JavaScript con el formato entero "RD$5,800" y `tabular-nums`.

### Etiqueta (`.etiqueta`)
Regular, mayúsculas, 0.3em, 11 px, interlineado 1.5. Colores: `acento` bajo títulos, en marcas y en `dt`; `oro` sobre la fachada (títulos de columna del pie, "Menú", marca del pie de foto del banner); `tinta` como enlace de sección (hover `acento`); blanco 90 % en la navegación (hover oro). Un `span` en caja normal y tracking normal puede colgar de ella para datos variables (resumen de filtros en `texto-suave`).

### Chevrón y separador
`Chevron.astro` dibuja el chevrón doble del logo (oro por defecto). `.separador` lo centra entre dos filetes de 1 px (`linea`; `--oscuro` usa `grafito` sobre negro) con hueco de 1.1rem: encabeza el pie y la banda de cierre a 30 px y separa la presentación de "Sobre nosotros" a 26 px. Solo, centrado a 30–34 px, abre los estados vacíos del catálogo, del carrito y el 404. A 18 px es la viñeta de la lista de garantías de "Así de fácil" y a 16 px acompaña al `dt` "Pago" en contacto.

### Iconos (`Icono.astro`)
Diecisiete iconos dibujados a mano en rejilla de 24, trazo de 1.6 px con remates redondos, `currentColor`, 22 px por defecto (16 / 18 / 20 / 28 / 32 según contexto), `aria-hidden`: buscar, bolsa, instagram, menú, cerrar, flecha, más, menos, papelera, check, ubicación, reloj, sol, luna, izquierda, derecha y WhatsApp. Solo el de WhatsApp es de relleno, y hereda el color del texto: negro en el FAB y en `btn-oro`, blanco en `btn-negro`, oro en la tarjeta negra de contacto, `acento` en enlaces de texto. Ninguna librería de iconos.

### Navigation (`Header.astro`)
- **Barra:** pegajosa, 60 px, negra con filete inferior `grafito`, contenedor de 1280 px; fija en los dos temas. Izquierda: isotipo blanco 36 × 37 + lockup "WIL / FRAGANCE". Centro (desde 1024 px): cinco etiquetas (Catálogo, Hombre, Mujer, Árabes, Diseñador) al 90 % de blanco, hueco 28 px, hover a oro, `aria-current="page"` solo en el enlace sin parámetros. Derecha: iconos de buscar, bolsa, tema y menú en cajas de 44 px, hover a oro.
- **Globo del carrito:** círculo oro de 18 px mínimo con el número en 10 px Bold negro, en la esquina superior derecha de la bolsa; oculto cuando es 0, `aria-live="polite"`.
- **Botón de tema:** caja de 44 px con el icono `luna` de día y `sol` de noche (`.solo-claro` / `.solo-oscuro`), `aria-pressed` cuando el tema oscuro está activo y `aria-label` "Cambiar al modo oscuro/claro". Guarda la elección en `localStorage["wil.tema"]`.
- **Menú móvil:** `<dialog>` negro a pantalla completa (telón negro 70 %), fila superior de 60 px con "Menú" en etiqueta oro y botón de cerrar de 44 px; enlaces principales de 24 px Bold con filete `grafito` y 16 px de padding vertical, hover oro; secundarios en etiqueta al 85 %; abajo del todo, `btn-oro` "Escríbenos por WhatsApp" a lo ancho. Se cierra al pulsar un enlace o al cambiar de página.
- **View Transitions:** la cabecera lleva `transition:name="cabecera"` y `transition:animate="none"`: persiste sin animar entre páginas.
- **Migas de pan (ficha):** 12 px en `texto-suave`, separador "›", enlaces con hover a `tinta`, elemento actual en `texto`.

### Pie (`Footer.astro`)
Banda negra con 56 px de padding, fija en los dos temas; separador oscuro con chevrón de 30 px (48 px debajo), rejilla `[1.2fr_1fr_1fr_1fr]` desde 768 px con hueco 40 px: logo blanco 120 × 130 y descripción (14 px, blanco 70 %, `max-w-xs`); tres columnas con título en etiqueta oro y enlaces de 14 px a 10 px entre sí (hover oro); contacto con iconos de 18 px (el horario y los pagos solo si están configurados). Legal: filete superior `grafito`, 12 px al 55 % de blanco, en dos columnas desde 768 px.

### Aviso de carrito (`#aviso`)
Caja fija centrada: negro con filete oro, 12 × 16 px de padding, 14 px en blanco, `max-w-md`, `shadow-flotante`; texto "{Marca} {Nombre} añadido al carrito" y enlace "Ver carrito" en etiqueta oro (hover blanco). Oculto: 12 px más abajo y opacidad 0; entra en 300 ms `ease-salida` y se oculta solo a los 3200 ms. `role="status"`, `aria-live="polite"`. En móvil se sitúa a 96 px del borde inferior para no tapar el FAB.

### Botón flotante de WhatsApp (`WhatsAppFab.astro`)
Círculo oro de 56 px con el glifo de WhatsApp de 28 px en negro, `shadow-flotante`, fijo a 16 px (24 px desde 768 px) de la esquina inferior derecha, `z-40`. Hover y foco lo levantan 2 px en 300 ms `ease-salida`. Un solo FAB por página; no hay otros.

### Panel suave
Caja `border border-linea bg-fondo-suave` con 20 px de padding (24 px desde 768 px), sin radio ni sombra. Es el contenedor de apoyo para: estados vacíos (centrados, 56–64 px de padding vertical, chevrón 30, mensaje 18 px, texto 14 px `texto-suave`, `btn-negro`), el aside "Resumen" del carrito (pegajoso en escritorio), el aviso "Agotado por ahora" de la ficha, "¿Otra duda?" en FAQ, la lista de garantías de la portada, la tarjeta de Instagram en contacto (hover: filete `tinta`) y el cuadro de datos de /estado/. Sobre una banda `fondo-suave` el panel sigue llevando su filete.

### Acordeón de preguntas (FAQ)
Lista `divide-y` con filetes `linea` arriba y abajo en un contenedor de 672 px; cada `<details>` muestra un `summary` de 15 → 16 px Bold en `tinta` con 16 px de padding vertical y, a la derecha, el icono "más" (18 px, `texto-suave`) en una caja de 32 px que gira 45° al abrirse (300 ms `ease-salida`); respuesta en 15 px `texto` (o `texto-suave` si es un marcador pendiente). Marcador nativo oculto.

### Enlaces en texto
Dentro del contenido: `acento` subrayado con `underline-offset` de 4 px (3 px dentro de `.prosa`), hover a `tinta`. Acciones terciarias ("Quitar", "Vaciar el carrito", "limpia los filtros"): 12–14 px en `texto-suave`, subrayadas si son texto, hover a `tinta`; con icono de 16 px si aplica. Sobre la fachada: enlaces de 14 px en blanco con hover a oro.

### Movimiento
Una sola curva, `--ease-salida: cubic-bezier(0.16, 1, 0.3, 1)`, para todo lo que se desplaza o escala; los cambios de color, fondo y borde usan la curva por defecto a 200 ms. Duraciones: 200 ms (color de botones, chips, enlaces), 250 ms (`translateY(1px)` del botón activo), 300 ms (filete de tarjeta, FAB, aviso, giro del icono de FAQ, puntos del carrusel, cambio de tema en `body`), 600 ms (ascenso de la foto en el arco, solo con `hover: hover`), 5000 ms (intervalo del carrusel). La única animación entre páginas es la foto del producto: `transition:name="foto-{slug}"` en tarjeta y ficha hace que el frasco viaje de la vitrina a la ficha con el `ClientRouter` de Astro; la cabecera persiste sin animar y el resto de la página usa la transición por defecto. Con `prefers-reduced-motion: reduce` todas las transiciones y animaciones bajan a 0.01 ms, `scroll-behavior` vuelve a `auto`, el carrusel no avanza solo ni desliza suave y el `ClientRouter` desactiva sus animaciones. Estado "Añadido": el botón negro cambia su texto y adopta `btn-oro` durante 1400 ms mientras el aviso aparece.

### Superficies del navegador
Selección de texto oro con texto negro en los dos temas; `:focus-visible` con `outline` de 2 px en `tinta` y 3 px de desplazamiento, oro dentro de `.bg-negro` y en el tema oscuro (los campos usan anillo de `box-shadow`); barra de scroll `piedra` sobre `fondo-suave`; `html` y `body` en `fondo`; `theme-color` #000000 en los dos temas; `color-scheme: light dark` con `data-tema` en `<html>`; `scroll-behavior: smooth`; enlace "Saltar al contenido" en oro con texto negro al recibir foco; `html lang="es-DO"`.

### Named Rules
**La regla del chevrón.** Un chevrón por sección, como separador (con filetes) o como viñeta (18 px). Es un adorno del logo, no un icono de interfaz ni un sustituto de la marca.

**La regla de la acción única.** Cada tarjeta tiene un botón; cada pantalla tiene un relleno dorado grande como máximo (el que lleva a WhatsApp o al catálogo). El negro es la acción por defecto; el oro, la que cierra.

**La regla de la inversión.** El hover invierte, no añade: negro ↔ oro (blanco → oro en el tema oscuro), borde → relleno, filete `linea` → `piedra`. Nunca sombra, brillo, escala de caja ni color nuevo al pasar el ratón.

## Do's and Don'ts

### Do:
- **Do** usar el oro #E6C643 como texto solo sobre negro o sobre los fondos del tema oscuro, y `text-acento` (#7E6911 en claro, #E6C643 en oscuro) para toda voz dorada dentro del contenido.
- **Do** poner texto negro (o el glifo en negro) sobre cualquier relleno dorado: `btn-oro`, FAB, globo, selección, punto activo del carrusel.
- **Do** construir el contenido con los tokens semánticos (`bg-fondo`, `bg-fondo-suave`, `border-linea`, `text-tinta`, `text-texto`, `text-texto-suave`, `text-acento`) para que gire con el tema, y reservar los fijos (`bg-negro`, `text-blanco`, `text-oro`, `border-grafito`) para la fachada.
- **Do** escribir el texto secundario en `text-texto-suave` a 12 px o más (14 px cuando va sobre `bg-fondo-suave`) y el cuerpo en `text-texto`.
- **Do** separar con filetes de 1 px en `border-linea` (`arena` en claro, `grafito` en oscuro) y con `border-grafito` sobre la fachada negra.
- **Do** meter cada foto de producto en un `.arco` blanco en los dos temas (1/1.18, foto al 78 % apoyada abajo), con su filete `linea`; `--limpio` solo cuando el arco se apoya sobre negro o es una miniatura.
- **Do** componer cada sección como título Bold y, si hace falta subtítulo, una etiqueta Regular en mayúsculas 8 px debajo; la rejilla a 28 px.
- **Do** usar `btn-negro` como acción por defecto dentro del contenido y `btn-oro` solo para la acción que abre WhatsApp o lleva al catálogo desde el banner.
- **Do** escribir precios como `RD$10,800` con el prefijo en `<small>` dentro de los componentes y `tabular-nums` cuando se alinean en columna.
- **Do** alternar bandas `bg-fondo` y `bg-fondo-suave` y reservar el negro fijo para cabecera, banner, pie y cierre.
- **Do** mantener objetivos táctiles de 44 px y controles de 48 px, y respetar `prefers-reduced-motion` (sin autoavance ni desplazamiento suave en el carrusel).
- **Do** usar `ease-salida` y las duraciones de 200–600 ms ya definidas; la única animación entre páginas es la foto de la tarjeta a la ficha.
- **Do** marcar "Agotado" con la insignia negra y oro (10 px), el arco al 60 % y el botón de borde "Avísame".

### Don't:
- **Don't** añadir colores: ni verde de WhatsApp, ni rojo de error, ni azul de enlace, ni un segundo dorado; solo los once tokens de la paleta y los tres negros cálidos del tema oscuro.
- **Don't** usar degradados, brillos, "negro con neón" ni tintes dorados de superficie.
- **Don't** aplicar sombras a nada apoyado; `shadow-flotante` es exclusiva del FAB de WhatsApp y del aviso de carrito.
- **Don't** poner una etiqueta o kicker encima de un título; la etiqueta va debajo.
- **Don't** redondear esquinas de botones, campos, tarjetas, paneles ni imágenes; los únicos radios son el arco, la píldora de los chips y los círculos del FAB, del globo y de los puntos del carrusel.
- **Don't** escribir oro #E6C643 como texto sobre blanco o marfil (1.7:1), `oro-oscuro` sobre fondos oscuros, ni `piedra` como texto en el tema claro (2.5:1).
- **Don't** fijar colores claros dentro del contenido (`bg-blanco`, `text-carbon`, `border-arena`…) que no giren con el tema, ni cambiar de tema la fachada negra.
- **Don't** usar Bold en mayúsculas espaciadas ni Regular apretada en títulos; las dos voces no se mezclan (el botón, 700 / 0.16em / 12 px, es la única excepción existente).
- **Don't** cargar otra familia tipográfica, una fuente de sistema para titulares, una monoespaciada ni una librería de iconos; los iconos son trazos de 1.6 px hechos a mano.
- **Don't** mostrar una foto de producto fuera del arco, recortada con `cover` o a sangre.
- **Don't** repetir el portal de columnas ni el carrusel fuera del banner de portada, ni usar más de un chevrón por sección.
- **Don't** engrosar filetes por encima de 1 px (salvo el trazo de 2 px de las columnas y el anillo de foco) ni apoyar contenido sobre gris.
- **Don't** usar más de un FAB, ni un botón con marca o color de WhatsApp; el icono hereda el color del texto.
- **Don't** animar el hover con sombras, escalas de caja o colores nuevos; el hover invierte negro y oro (blanco y oro en el tema oscuro).
