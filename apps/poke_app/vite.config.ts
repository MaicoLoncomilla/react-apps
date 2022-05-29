import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {},
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      pages: path.resolve(__dirname, 'pages'),
    },
  },
  server: {
    host: '0.0.0.0',
    hmr: {
      overlay: true,
    },
  },
})
