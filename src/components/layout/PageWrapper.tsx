import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { Cursor } from '@/components/ui/Cursor';
import { ScrollProgress } from './ScrollProgress';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
}

/**
 * Global Page Wrapper
 * Handles cinematic page transitions, global overlays, and core layout components
 */
export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="relative min-h-screen bg-background selection:bg-accent/30">
      {/* Global Cinematic Overlays */}
      <NoiseOverlay />
      <Cursor />
      <ScrollProgress />
      
      {/* Permanent Layout */}
      <Navbar />

      {/* Page Content with Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for "Apple" feel
          }}
          className="pt-20" // Offset for fixed navbar
        >
          {children}
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  );
};
