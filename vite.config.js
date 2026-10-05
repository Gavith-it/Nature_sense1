import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

const pages = ['stay', 'packages', 'day-out', 'events', 'facilities', 'gallery', 'visit', 'farmland', 'options-preview'];

export default defineConfig({
  plugins: [react()],
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        ...Object.fromEntries(pages.map((p) => [p, resolve(__dirname, p, 'index.html')])),
      },
    },
  },
  server: { port: Number(process.env.PORT) || 3000, host: true, allowedHosts: true },
});
