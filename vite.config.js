import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',  // Changed to match netlify.toml
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    }
  },
  server: {
    open: true
  }
});