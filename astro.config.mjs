import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    assets: 'reports/hours/_astro',
  },
  vite: {
    server: {
      proxy: {
        '/api': 'http://traccar-eu.fleetmap.pt',
      },
    },
  },
});
