import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import pages from 'vite-plugin-pages-svelte';

// https://vitejs.dev/config/
const production = process.env.NODE_ENV === 'production';
const sourceMapsInProduction = false;
export default defineConfig({
  plugins: [
    svelte({
      emitCss: production,
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: !production,
      },
    }),
    pages(),
  ],
  server: {
    host: 'localhost',
    port: 4200,
  },
  build: {
    sourcemap: sourceMapsInProduction,
  },
});
