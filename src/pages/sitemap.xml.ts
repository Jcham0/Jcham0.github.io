import type { APIRoute } from 'astro';

const pages = [
  '/',
  '/proyectos',
  '/proyectos/torneo-videojuegos',
  '/proyectos/gestion-alumnos',
  '/contacto',
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
          <url>
            <loc>https://jcham0.github.io${page}</loc>
          </url>`
        )
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
