import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
const production = process.env.NODE_ENV === 'production'
const sourceMapsInProduction = false
export default defineConfig({
  plugins: [
    svelte({
      emitCss: production,
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: !production
      }
    })
  ],
  server: {
    host: 'localhost',
    port: 4200
  },
  build: {
    sourcemap: sourceMapsInProduction
  },
});
