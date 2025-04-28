import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // No path aliases to avoid build issues
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Simplified build configuration
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});