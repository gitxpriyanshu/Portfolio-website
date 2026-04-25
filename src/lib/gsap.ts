import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * GSAP Global Configuration
 * Used for advanced scroll-based sequences that require fine-grained control
 * beyond Framer Motion's standard viewport triggers.
 */

export const setupGSAP = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Set default eases for a cohesive feel
  gsap.defaults({
    ease: 'power3.out',
    duration: 1,
  });
};

/**
 * Creates a parallax effect on a target element
 * @param element Selector or Element
 * @param speed Movement speed (multiplier)
 */
export const createParallax = (element: string | HTMLElement, speed: number = 0.5) => {
  gsap.to(element, {
    y: () => -ScrollTrigger.maxScroll(window) * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

/**
 * Configures the timeline line drawing animation
 * Used in the Experience section for the central axis
 */
export const animateTimelineAxis = (lineSelector: string, triggerSelector: string) => {
  gsap.fromTo(
    lineSelector,
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerSelector,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    }
  );
};

/**
 * Marquee Scroll Effect
 * Used for the horizontal scrolling ticker in the Skills section
 */
export const createMarquee = (containerSelector: string) => {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  gsap.to(container, {
    xPercent: -50,
    repeat: -1,
    duration: 20,
    ease: 'none',
  });
};
