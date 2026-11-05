// @ts-check
/// <reference types="bun" />
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Set SITE_URL when deploying so canonical URLs, the OG image and the sitemap
// can be absolute. BASE_PATH supports project-page hosting (e.g. /motion-prompt/).
// Bun is the only runtime here; the typeof guard keeps editors that load this
// config under Node from throwing.
/** @type {Record<string, string | undefined>} */
const env = typeof Bun === 'undefined' ? {} : Bun.env;
const site = env.SITE_URL || undefined;
const base = env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
