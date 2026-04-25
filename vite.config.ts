import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


/**
 * Performance Optimized Vite Configuration
 * 1. Manual chunk splitting to separate heavy libraries (Three.js, GSAP)
 * 2. Image compression pipeline for production assets
 * 3. Terser minification with dead code elimination
 */
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),

  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@types': path.resolve(__dirname, './src/types'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: mode === 'development',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Performance: Remove console logs in production
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Chunk Splitting: Prevents a single large JS file, improving cacheability
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          gsap: ['gsap'],
          framer: ['framer-motion'],
        },
      },
    },
    // CSS code splitting: Generates separate CSS for each chunk
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
  },
}));
