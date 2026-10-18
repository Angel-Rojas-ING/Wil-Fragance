# 2 · Administrar el catálogo con Google Sheets

La web lee el catálogo desde una hoja de Google publicada como CSV. Tú editas la hoja; la web se vuelve a publicar sola (cada hora si hubo cambios, o al momento con el botón manual).

## A. Crear y publicar la hoja (una sola vez)

1. Entra en <https://sheets.google.com> y crea una hoja nueva. Llámala, por ejemplo, **Catálogo WIL Fragance**.
2. Importa el archivo `productos.csv` del proyecto: menú **Archivo → Importar → Subir**, elige `productos.csv` y en "Ubicación de importación" selecciona **Reemplazar hoja de cálculo**. Tipo de separador: **Detectar automáticamente**. Deja marcada "Convertir texto en números, fechas y fórmulas".
3. Comprueba que la primera fila contiene exactamente estas cabeceras (en minúsculas, sin espacios extra):

   `id, nombre, marca, genero, tipo, precio, stock, imagen, concentracion, ml, notas, descripcion, ocasion, temporada, similar_a, destacado, novedad`

4. Opcional pero recomendable: selecciona la columna **precio** y en **Formato → Número → Número** quita los decimales. La web entiende `10800`, `10,800` y `RD$10,800`, pero así lo verás más claro.
5. Publica la hoja como CSV: **Archivo → Compartir → Publicar en la web**. En la pestaña **Enlace** elige la pestaña de la hoja (no "Todo el documento") y el formato **Valores separados por comas (.csv)**. Pulsa **Publicar** y copia la URL que aparece. Es parecida a:

   `https://docs.google.com/spreadsheets/d/e/2PACX-…/pub?gid=0&single=true&output=csv`

   Esta URL es la que se guarda como `SHEET_CSV_URL` en Cloudflare Pages y como secreto en GitHub (ver la guía 3). Quien tenga la URL puede leer el catálogo, nada más; no da acceso para editar.

6. Marca la casilla "Volver a publicar automáticamente cuando se realicen cambios" (viene activada por defecto). Google tarda hasta 5 minutos en reflejar un cambio en la URL publicada.

## B. Columnas y valores válidos

| Columna | Obligatoria | Valores que acepta la web |
|---|---|---|
| `id` | sí | Un número o texto único por perfume. Para uno nuevo usa el siguiente número libre. No cambies el id de un perfume existente. |
| `nombre` | sí | Nombre sin la marca, con la concentración si la hay: `Sauvage EDP`, `Khamrah EDP`, `Eros Flame`. |
| `marca` | sí | `Dior`, `Lattafa`… Escribe siempre la marca igual para que el filtro no la duplique. |
| `genero` | sí | `hombre`, `mujer` o `unisex` |
| `tipo` | sí | `diseñador` o `árabe` (también vale sin tilde) |
| `precio` | sí | Número en pesos: `3100`, `3,100` o `RD$3,100`. Sin decimales. |
| `stock` | no | `disponible` (o vacío) o `agotado` |
| `imagen` | sí | Nombre del archivo de la foto dentro de la carpeta `fotos/`, por ejemplo `lattafa-khamrah-edp.jpg`. |
| `concentracion` | no | `Eau de Parfum`, `Eau de Toilette`, `Parfum`, `Extrait de Parfum`… |
| `ml` | no | Solo el número: `100` |
| `notas` | no | Texto libre, o con pirámide: `Salida: bergamota, pimienta; Corazón: lavanda; Fondo: ámbar, vainilla` (así la ficha lo muestra en tres columnas). |
| `descripcion` | no | Uno o dos párrafos. |
| `ocasion` | no | `Día`, `Noche`, `Oficina`, `Fiesta`… |
| `temporada` | no | `Verano`, `Invierno`, `Todo el año`… |
| `similar_a` | no | Perfumes a los que se parece, separados por punto y coma: `Creed Aventus; Dior Sauvage`. El buscador también encuentra el perfume por estos nombres. |
| `destacado` | no | `sí` para mostrarlo en "Destacados" de la portada (los primeros ocho; todos ellos rotan en el carrusel del banner). |
| `novedad` | no | `sí` para mostrarlo en "Novedades". Si ninguno está marcado, salen los últimos ids añadidos. |

Reglas que aplica la web al compilarse:

- Una fila con **precio no numérico**, **stock inválido**, **género o tipo inválidos**, **id repetido** o **imagen que no existe en `fotos/`** se **omite** y se avisa; el resto del catálogo se publica igual.
- Si la hoja no responde o no tiene ninguna fila válida, la web se compila con el último `productos.csv` guardado en el repositorio. Nunca se queda en blanco.
- Los avisos aparecen en tres sitios: en el registro de compilación de Cloudflare Pages, en el resumen de la GitHub Action y en la página privada `https://TU-DOMINIO/estado/`.

## C. Añadir un perfume nuevo con su foto

1. **Prepara la foto**: fondo blanco o muy claro, frasco centrado, al menos 800 × 800 px (mejor 1200). Formatos: JPG, PNG o WebP. Ponle un nombre sencillo sin espacios ni tildes, por ejemplo `armaf-club-de-nuit-woman-edp.jpg`.
2. **Súbela a la carpeta `fotos/` del repositorio**. En GitHub: abre el repositorio → carpeta `fotos` → botón **Add file → Upload files** → arrastra la foto → **Commit changes**. (Si trabajas en tu computadora: copia el archivo a `fotos/` y haz `git add fotos`, `git commit`, `git push`.)
3. **Añade la fila en la hoja** con, como mínimo: `id` (siguiente número), `nombre`, `marca`, `genero`, `tipo`, `precio`, `stock` = `disponible` e `imagen` = el nombre exacto del archivo que subiste. Rellena el resto cuando quieras.
4. Espera a la sincronización horaria o publica al momento: GitHub → pestaña **Actions** → **Sincronizar catálogo con Google Sheets** → **Run workflow**. (Subir la foto ya provoca una publicación por sí sola; la Action añade la fila nueva.)
5. Comprueba la ficha: `https://TU-DOMINIO/perfume/marca-nombre/` (la URL se forma con marca y nombre en minúsculas y guiones). Si la fila tenía algún error, aparecerá en `/estado/`.

La web recorta el margen sobrante, deja el fondo blanco y genera los tamaños para móvil automáticamente: no hace falta editar la foto.

## D. Marcar un perfume como agotado

1. En la hoja, busca la fila del perfume y escribe `agotado` en la columna `stock`.
2. Espera a la sincronización (hasta una hora) o publica al momento con **Run workflow**.
3. En la web, la tarjeta y la ficha mostrarán la etiqueta **Agotado**, el botón "Añadir" desaparece y aparece **Avísame cuando llegue**, que abre WhatsApp con el nombre del perfume. Cuando vuelva a haber existencias, escribe `disponible` (o deja la celda vacía).

## E. Cambiar precios o nombres

Edita la celda y espera a la sincronización. Si cambias el **nombre** o la **marca**, cambia también la URL de la ficha (`/perfume/marca-nombre/`); los enlaces antiguos dejarán de funcionar, así que evita renombrar perfumes que hayas compartido mucho.

## F. Errores comunes

| Síntoma | Causa y solución |
|---|---|
| La Action falla en "Descargar la hoja" | La URL no es la publicada como CSV, o la hoja dejó de estar publicada. Repite el paso A.5 y actualiza el secreto `SHEET_CSV_URL`. |
| Un perfume no aparece | Mira `/estado/`: casi siempre es una imagen con nombre distinto al archivo subido, o un precio con texto. |
| El filtro de marcas muestra la misma marca dos veces | Hay dos grafías (`Armaf` y `ARMAF`). Unifícalas. |
| Cambié la hoja y la web no cambia | Google tarda hasta 5 minutos en republicar; la Action pasa cada hora; Cloudflare tarda 1 o 2 minutos en compilar. Usa el botón manual si tienes prisa. |
