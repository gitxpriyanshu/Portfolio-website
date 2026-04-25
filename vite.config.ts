import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import viteImagemin from 'vite-plugin-imagemin';

/**
 * Performance Optimized Vite Configuration
 * 1. Manual chunk splitting to separate heavy libraries (Three.js, GSAP)
 * 2. Image compression pipeline for production assets
 * 3. Terser minification with dead code elimination
 */
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Image optimization: Compresses images during build to reduce LCP/FCP
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [{ name: 'removeViewBox' }, { name: 'removeEmptyAttrs', active: false }],
      },
    }),
    // Bundle analyzer: Run 'npm run analyze' to see bundle composition
    mode === 'analyze' ? visualizer({ open: true, filename: 'stats.html', gzipSize: true }) : null,
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
