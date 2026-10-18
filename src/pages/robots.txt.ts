import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site?.href ?? 'https://wil-fragance.pages.dev/';
  const cuerpo = ['User-agent: *', 'Allow: /', 'Disallow: /estado/', 'Disallow: /carrito/', '', `Sitemap: ${new URL('sitemap-index.xml', base).href}`, ''].join('\n');
  return new Response(cuerpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
