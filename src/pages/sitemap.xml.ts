import type { APIContext } from 'astro';
import { projects } from '@/data/projects';
import { withBase } from '@/utils/paths';

const staticPages = ['/', '/about/', '/projects/', '/resume/', '/creative/', '/contact/'];
const projectPages = projects.map((project) => `/projects/${project.slug}/`);

export function GET({ site }: APIContext) {
  const siteOrigin = site ?? new URL('http://localhost:4321');
  const urls = [...staticPages, ...projectPages]
    .map((path) => {
      const loc = new URL(withBase(path), siteOrigin).href;
      return `<url><loc>${loc}</loc></url>`;
    })
    .join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
