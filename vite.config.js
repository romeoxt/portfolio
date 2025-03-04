import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    assetsInlineLimit: 0, // Ensures all assets are processed as files
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
