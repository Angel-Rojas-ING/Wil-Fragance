# 1 · Instalación en Windows y comandos

## Node.js

En esta computadora Node.js ya está instalado (v24.20, con npm 11.19), así que no hay que hacer nada. Si trabajas desde otra máquina:

1. Entra en <https://nodejs.org/es> y descarga la versión **LTS** (instalador `.msi` para Windows).
2. Ejecuta el instalador con las opciones por defecto (marca "Automatically install the necessary tools" si te lo ofrece).
3. Cierra y vuelve a abrir la terminal (PowerShell o el Símbolo del sistema) y comprueba:

```bash
node --version
```

```bash
npm --version
```

Deben salir `v22` o superior y `11` o superior.

Alternativa sin salir de la terminal:

```bash
winget install OpenJS.NodeJS.LTS
```

## Git

Hace falta para subir el código a GitHub. Si `git --version` da error, instálalo:

```bash
winget install Git.Git
```

Al terminar, cierra y vuelve a abrir la terminal.

## Editor (opcional)

Visual Studio Code con la extensión "Astro" resalta los archivos `.astro`:

```bash
winget install Microsoft.VisualStudioCode
```

## Trabajar con el proyecto

Abre una terminal dentro de la carpeta del proyecto (en el Explorador, clic derecho → "Abrir en Terminal") y ejecuta:

```bash
npm install
```

Solo la primera vez en cada computadora: descarga las dependencias en `node_modules/`.

```bash
npm run dev
```

Lee el catálogo, prepara las fotos y abre la web en <http://localhost:4321>. Cada cambio que guardes en el código se ve al instante. Para parar: `Ctrl + C`.

```bash
npm run build
```

Compila la web completa en la carpeta `dist/`, igual que hará Cloudflare Pages. Si este comando termina sin errores, la publicación también lo hará.

## Variables locales (opcional)

Copia `.env.example` a `.env` y rellena `SHEET_CSV_URL` si quieres que en tu computadora la web también lea la hoja de Google. Sin `.env`, usa `productos.csv`.
