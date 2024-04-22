import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // This should be set correctly to reference assets relative to the index.html.
  build: {
    outDir: 'dist',  // Ensure this is correct
  }
});
