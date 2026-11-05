import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const paths = [base, `${base}docs/`];
  const urls = site
    ? paths.map((path) => new URL(path, site).href)
    : paths;

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
