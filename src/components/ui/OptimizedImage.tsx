import { useState } from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends HTMLMotionProps<"img"> {
  alt: string;
  src: string;
  className?: string;
  containerClassName?: string;
}

/**
 * Performance-First Image Component (Motion Enabled)
 * 1. Native lazy loading + async decoding
 * 2. Shimmer placeholder
 * 3. Support for Framer Motion transforms (parallax, etc.)
 */
export const OptimizedImage = ({ 
  alt, 
  src, 
  className, 
  containerClassName, 
  style,
  ...props 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-white/5", containerClassName)}>
      {/* Shimmer Placeholder */}
      <AnimatePresence>
        {!isLoaded && !isError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
          >
            <div className="w-full h-full animate-pulse bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Fallback */}
      {isError ? (
        <div className="absolute inset-0 flex items-center justify-center text-text-secondary text-xs font-mono uppercase">
          Image unavailable
        </div>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsError(true)}
          style={style}
          className={cn(
            "transition-opacity duration-700 ease-in-out",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};
