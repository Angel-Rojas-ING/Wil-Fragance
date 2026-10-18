# 3 · Publicar la web: GitHub, Cloudflare Pages y dominio

Resumen del flujo: el código vive en un repositorio de GitHub; Cloudflare Pages está conectado a ese repositorio y publica la web en cada cambio; una GitHub Action vigila la hoja de Google cada hora.

## A. Crear el repositorio en GitHub y subir el código

1. Crea una cuenta en <https://github.com> si no la tienes.
2. Pulsa **New repository**. Nombre: `wil-fragance`. Visibilidad: **Public** o **Private** (ambas funcionan; con Private, GitHub da 2,000 minutos de Actions al mes, y la sincronización horaria usa unos 750). No marques "Add a README".
3. Hecho el 17-10-2026: el repositorio local ya está conectado a <https://github.com/Angel-Rojas-ING/Web-Perfumes> y el código subido. Para subir cambios futuros desde la carpeta del proyecto:

```bash
git add -A
```

```bash
git commit -m "Describe el cambio"
```

```bash
git push
```

4. Añade los secretos de la Action: en GitHub, **Settings → Secrets and variables → Actions → New repository secret**:
   - `SHEET_CSV_URL`: la URL de la hoja publicada como CSV (guía 2, paso A.5).
   - `CF_DEPLOY_HOOK_URL`: la crearás en el paso B.6; vuelve aquí cuando la tengas.

## B. Conectar Cloudflare Pages

1. Crea una cuenta en <https://dash.cloudflare.com/sign-up> (gratis).
2. En el panel, entra en **Workers & Pages → Create → Pages → Connect to Git**.
3. Autoriza la aplicación de Cloudflare en GitHub y elige el repositorio `Web-Perfumes`. Como **Project name** escribe `wil-fragance` para que la dirección sea `wil-fragance.pages.dev` (si ya estuviera ocupado, elige otro y ajusta `SITE_URL`).
4. Configuración de la compilación:
   - **Production branch**: `main`
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. **Environment variables** (en el mismo formulario o después en **Settings → Variables and Secrets**):
   - `NODE_VERSION` = `24`
   - `SHEET_CSV_URL` = la URL de la hoja publicada como CSV
   - `SITE_URL` = `https://wil-fragance.pages.dev` por ahora; cuando tengas dominio, cámbiala por `https://tudominio.com` (sirve para el sitemap y las vistas previas al compartir)
6. Pulsa **Save and Deploy**. La primera compilación tarda 2 o 3 minutos. Al terminar, la web está en `https://wil-fragance.pages.dev` (el nombre del proyecto puede variar si ya existía).
7. Crea el deploy hook: **Settings → Builds → Deploy hooks → Add deploy hook**. Nombre: `catalogo`, rama: `main`. Copia la URL y guárdala en GitHub como secreto `CF_DEPLOY_HOOK_URL` (paso A.4). Esa URL permite publicar la web a quien la tenga: no la escribas en el código ni la compartas.

A partir de aquí, cada `git push` a `main` publica la web, y la Action horaria publica cuando la hoja cambie.

## C. Dominio

**Sin dominio propio**: usa `https://wil-fragance.pages.dev`. Es gratuito, con HTTPS, y vale para compartir por WhatsApp e Instagram.

**Con dominio propio** (por ejemplo `wilfragance.com`):

1. Compra el dominio en cualquier registrador (Cloudflare Registrar lo vende a precio de costo y simplifica todo; también vale GoDaddy, Namecheap, etc.).
2. Si el dominio está en otro registrador, añádelo a Cloudflare: **Add a domain** en el panel, elige el plan **Free** y cambia los servidores DNS del dominio en tu registrador por los dos que Cloudflare te indique. Tarda entre minutos y 24 horas.
3. En el proyecto de Pages: **Custom domains → Set up a custom domain** → escribe `wilfragance.com` → **Activate domain**. Repite con `www.wilfragance.com`. Cloudflare crea los registros DNS y el certificado HTTPS solo.
4. Cambia la variable `SITE_URL` a `https://wilfragance.com` y vuelve a publicar (botón manual de la Action o un push).

## D. Botón manual y comprobaciones

- **Publicar al momento**: GitHub → **Actions** → **Sincronizar catálogo con Google Sheets** → **Run workflow** → **Run workflow**. Si la hoja cambió, sube el nuevo `productos.csv` (y Cloudflare publica); si no cambió, llama al deploy hook.
- **Ver qué pasó**: en la misma pantalla, cada ejecución muestra un resumen con las filas omitidas y sus motivos.
- **Estado de la web publicada**: `https://TU-DOMINIO/estado/` (no aparece en Google).
- **Registro de compilación**: Cloudflare → Workers & Pages → wil-fragance → Deployments → la última → View details.

## E. Límites de los planes gratuitos (y cómo se respetan)

| Servicio | Límite gratuito | Uso previsto |
|---|---|---|
| Cloudflare Pages | 500 compilaciones al mes, compilación de hasta 20 min | Solo se compila cuando la hoja cambia o al pulsar el botón: normalmente menos de 60 al mes. Cada compilación dura 1 o 2 minutos. |
| GitHub Actions | Ilimitado en repositorios públicos; 2,000 min/mes en privados | 24 ejecuciones al día de 1 minuto: unos 750 min/mes. |
| GitHub | Repositorios de hasta 1 GB recomendados | Las fotos originales ocupan unos 10 MB. |
| Google Sheets | Publicación en la web sin límite práctico | Una lectura por compilación y una por hora. |

Dos avisos: GitHub desactiva las tareas programadas de un repositorio **sin actividad durante 60 días** (te llega un correo; basta con pulsar "Enable workflow"), y las ejecuciones programadas pueden retrasarse unos minutos en horas de mucha carga.

## F. Qué no subir nunca al código

- La URL del deploy hook y la URL de la hoja van solo en **secretos** (GitHub) y **variables** (Cloudflare). El archivo `.env` está ignorado por Git.
- La carpeta `materiales/` (zips y fotos originales del cliente) está ignorada: no se publica.
