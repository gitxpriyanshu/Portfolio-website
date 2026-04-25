import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

/**
 * ScrollProgress Component
 * Fixed 2px line at the top of the viewport indicating page scroll depth.
 */
export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[10001] origin-left"
      style={{ scaleX: progress }}
      initial={{ scaleX: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
    />
  );
};
