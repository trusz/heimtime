// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"

const isDevelopment = process.env.NODE_ENV === "development"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    preview: {
        port: 51021,
    },
    build: {
        lib: {
            entry:    "src/main.ts",
            formats:  ["es"],
            fileName: "index",
        },
        // sourcemap: isDevelopment ? "inline" : false,
        sourcemap: "inline",
    },
    test: {
        include: ["src/**/*.spec.ts"],
    },
})
