import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/Gestiona_Asesoria/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/pages/home/index.html'),
                nosotros: resolve(__dirname, 'src/pages/nosotros/index.html'),
                asesoria: resolve(__dirname, 'src/pages/asesoria-fiscal/index.html'),
            },
        },
    },
})
