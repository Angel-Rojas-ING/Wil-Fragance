// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URL pública del sitio. En Cloudflare Pages se define SITE_URL cuando haya dominio propio.
const site = (process.env.SITE_URL || 'https://wil-fragance.pages.dev').replace(/\/+$/, '');

export default defineConfig({
  site,
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/estado/') && !page.includes('/carrito/') && !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
