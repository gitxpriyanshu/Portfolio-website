import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * Premium Glassmorphism Card
 * Features: Backdrop blur, subtle borders, and smooth hover elevation
 */
export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, borderColor: 'rgba(255, 255, 255, 0.15)' } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-md transition-colors duration-300',
        className
      )}
    >
      {/* Background radial gradient shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
};
