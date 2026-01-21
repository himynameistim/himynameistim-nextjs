import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://himynameistim.com',
  integrations: [react(), sitemap()],
  redirects: {
    '/category/[slug]': '/[slug]',
    '/[year]/[month]/[day]/[slug]': '/blog/[slug]',
  },
  vite: {
    resolve: {
      alias: {
        '@Models': '/Models',
        '@CMS': '/blogProviders/prismic',
      },
    },
  },
});
