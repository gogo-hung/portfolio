import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lishenghung.pages.dev',
  build: { format: 'directory' },
  trailingSlash: 'ignore',
});
