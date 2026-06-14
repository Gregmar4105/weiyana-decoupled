import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'src': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/sanctum': {
        target: 'http://weiyana-decoupled.test',
        changeOrigin: true,
      },
      '/login': {
        target: 'http://weiyana-decoupled.test',
        changeOrigin: true,
        bypass: (req) => {
          if (req.method === 'GET' && req.headers.accept?.includes('text/html')) {
            return req.url;
          }
        },
      },
      '/register': {
        target: 'http://weiyana-decoupled.test',
        changeOrigin: true,
        bypass: (req) => {
          if (req.method === 'GET' && req.headers.accept?.includes('text/html')) {
            return req.url;
          }
        },
      },
      '/logout': {
        target: 'http://weiyana-decoupled.test',
        changeOrigin: true,
        bypass: (req) => {
          if (req.method === 'GET' && req.headers.accept?.includes('text/html')) {
            return req.url;
          }
        },
      },
      '/api': {
        target: 'http://weiyana-decoupled.test',
        changeOrigin: true,
      },
    },
  },
})
