import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { URL, fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
      '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@shared/styles/api" as *;`,
      },
    },
  },
});
