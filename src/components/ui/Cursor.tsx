import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useMediaQuery } from '@/hooks/useMediaQuery';

/**
 * Custom Cinematic Cursor
 * Replaces default cursor with a dual-element follower (inner dot + outer ring)
 * Disables on touch devices for accessibility
 */
export const Cursor = () => {
  const { x, y } = useMousePosition();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Smooth springs for the outer ring (lerp effect)
  const ringX = useSpring(useMotionValue(0), { damping: 25, stiffness: 200 });
  const ringY = useSpring(useMotionValue(0), { damping: 25, stiffness: 200 });

  useEffect(() => {
    ringX.set(x - 16); // Center the 32px ring
    ringY.set(y - 16);
  }, [x, y, ringX, ringY]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('.hoverable') !== null
      );
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(232, 213, 183, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(232, 213, 183, 0.5)' : 'rgba(255, 255, 255, 0.2)',
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/20 pointer-events-none z-[9999]"
      />

      {/* Inner Dot */}
      <motion.div
        animate={{
          x: x - 3,
          y: y - 3,
          scale: isClicked ? 0.8 : isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.1 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
};
