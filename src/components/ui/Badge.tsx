import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted' | 'outline';
  className?: string;
}

/**
 * Minimalist Badge Component
 * Used for tech stack tags and status indicators
 */
export const Badge = ({ children, variant = 'default', className }: BadgeProps) => {
  const variants = {
    default: 'bg-white/5 text-text-secondary border-border',
    accent: 'bg-accent/10 text-accent border-accent/20',
    muted: 'bg-surface text-text-secondary/50 border-white/5',
    outline: 'bg-transparent text-text-primary border-border hover:border-accent/50 transition-colors',
  };

  return (
    <span
      className={cn(
        'px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-widest border inline-flex items-center justify-center',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
