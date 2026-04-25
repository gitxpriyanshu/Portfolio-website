import { useState, useEffect } from 'react';

/**
 * Tracks the global mouse position
 * Optimized with requestAnimationFrame for smooth cursor following.
 */
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      frameId = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return mousePosition;
};
