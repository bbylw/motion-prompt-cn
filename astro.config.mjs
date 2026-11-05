// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Set SITE_URL when deploying so canonical URLs, the OG image and the sitemap
// can be absolute. BASE_PATH supports project-page hosting (e.g. /motion-prompt/).
const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
