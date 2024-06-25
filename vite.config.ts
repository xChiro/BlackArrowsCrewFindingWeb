import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html'
            },
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            },
            plugins: [react(), {
                name: 'ignore-cache',
                load(id) {
                    if (id.includes('.cache')) {
                        return null;
                    }
                }
            }],
        }
    }
})
