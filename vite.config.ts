import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), {
        name: 'ignore-cache',
        load(id) {
            if (id.includes('.cache')) {
                return null;
            }
        }
    }],
})
