import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Single entry point for SPA
      input: {
        main: 'index.html',
      },
      external: ['three']
    }
  }
})
