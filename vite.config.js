import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE || (mode === 'production' ? '/portfolio/' : '/');

  return {
    plugins: [react()],
    base,
    build: {
      assetsInlineLimit: 0, // Ensures all assets are processed as files
      rollupOptions: {
        output: {
          manualChunks: undefined,
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
