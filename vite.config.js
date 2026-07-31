import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE || (mode === 'production' ? '/portfolio/' : '/');

  return {
    plugins: [react()],
    base,
    build: {
      assetsInlineLimit: 0,
      chunkSizeWarningLimit: 700,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('three') || id.includes('@react-three')) {
                return 'three';
              }
              if (id.includes('framer-motion')) {
                return 'motion';
              }
              if (id.includes('maath')) {
                return 'maath';
              }
              return 'vendor';
            }
          },
        },
      },
    },
    server: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin',
      }
    },
    optimizeDeps: {
      exclude: ['three']
    }
  };
});
