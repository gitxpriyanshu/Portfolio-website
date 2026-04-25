import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  loading?: boolean;
}

/**
 * Premium Button Component
 * Features: Shine animation, micro-interactions, and multiple variants
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', icon: Icon, loading, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-accent text-background hover:bg-accent/90 shadow-[0_0_20px_rgba(232,213,183,0.15)]',
      ghost: 'bg-transparent text-text-primary hover:bg-white/5 border border-transparent hover:border-border',
      outline: 'bg-transparent text-text-primary border border-border hover:border-accent hover:text-accent',
    };

    const sizes = {
      sm: 'px-4 py-1.5 text-xs',
      md: 'px-6 py-2.5 text-sm',
      lg: 'px-8 py-3.5 text-base',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'relative overflow-hidden rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group',
          variants[variant],
          sizes[size],
          loading && 'opacity-70 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {/* Shine Effect (Primary Only) */}
        {variant === 'primary' && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </div>
        )}

        {/* Glow on Click (CSS only) */}
        <span className="absolute inset-0 active:bg-white/10 transition-colors pointer-events-none" />

        {loading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {Icon && <Icon className={cn('w-4 h-4 transition-transform group-hover:scale-110', children && 'mr-0.5')} />}
            {children}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
