import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For local dev: opens at localhost:5173/
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
