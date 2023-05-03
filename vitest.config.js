import { defineVitestConfig } from 'nuxt-vitest/config';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineVitestConfig({
  plugins: [vue()],
  test: {
    setupFiles: ['./tests/setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
