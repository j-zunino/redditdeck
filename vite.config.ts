import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        proxy: {
            '/reddit': {
                target: 'https://www.reddit.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/reddit/, ''),
            },
        },
    },
});
