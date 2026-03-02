import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    assets: 'reports/hours',
  },
  vite: {
    server: {
      proxy: {
        '/api': 'http://traccar-eu.fleetmap.pt',
      },
    },
  },
});
