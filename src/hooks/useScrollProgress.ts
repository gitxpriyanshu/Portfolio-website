import { useScroll, useSpring } from 'framer-motion';

/**
 * Hook to get the current scroll progress of the page (0 to 1)
 * Uses Framer Motion's optimized scroll tracking.
 */
export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Use a spring to smooth out the progress for UI elements like progress bars
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return smoothProgress;
};
