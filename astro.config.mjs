import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/reports/hours',
  vite: {
    server: {
      proxy: {
        '/api': 'http://traccar-eu.fleetmap.pt',
      },
    },
  },
});
