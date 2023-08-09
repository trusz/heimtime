import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const isDevelopment = process.env.NODE_ENV === 'development'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    build:{
        lib:{
            entry: "src/plugin.ts",
            formats: ['es'],
            fileName: "index",
        },
        sourcemap: isDevelopment ? "inline" : false,
    }
})
