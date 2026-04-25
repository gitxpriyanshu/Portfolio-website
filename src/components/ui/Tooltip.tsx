import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Minimal Premium Tooltip
 * Uses Framer Motion for cinematic fade and slide interactions
 */
export const Tooltip = ({ content, children, className }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[100] pointer-events-none',
              className
            )}
          >
            <div className="bg-surface border border-border px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
              <span className="text-xs font-medium text-text-primary">
                {content}
              </span>
            </div>
            {/* Tooltip Arrow */}
            <div className="w-2 h-2 bg-surface border-r border-b border-border rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
