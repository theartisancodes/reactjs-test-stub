import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';

import { svelte } from '@sveltejs/vite-plugin-svelte';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@context': path.resolve(__dirname, './src/context'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [
    react(),
    eslint(),
    svelte(),
    stylelintPlugin({
      include: ['src/**/*.css', 'src/**/*.scss'],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/global.scss" as *;`,
      },
    },
  },
});
