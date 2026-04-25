import { motion, useReducedMotion, useTransform } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import HeroScene from '@/components/three/HeroScene';
import Button from '@/components/ui/Button';
import { useScrollProgress } from '@/hooks/useScrollProgress';

import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

/**
 * Cinematic Hero Section
 * Features: Staggered typography animations, 3D background integration, and interactive CTAs.
 */
export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const scrollProgress = useScrollProgress();
  const name = "PRIYANSHU";

  // Performance: Use transform to drive opacity from scroll progress
  const scrollIndicatorOpacity = useTransform(scrollProgress, [0, 0.05], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  // Grid background style
  const gridStyle = {
    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)`,
    backgroundSize: '40px 40px',
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-background">
      {/* Background Layer: Grid + 3D Scene */}
      <div className="absolute inset-0 z-0 opacity-40" style={gridStyle} />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-10"
      >
        <ErrorBoundary componentName="Hero3DScene">
          <HeroScene />
        </ErrorBoundary>
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-10">
        <motion.div
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow Label */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 mb-6"
          >
            <span className="text-accent font-mono text-xs uppercase tracking-[0.4em]">
              Software Developer
            </span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-2 h-4 bg-accent/50"
            />
          </motion.div>

          {/* Headline: Staggered Letters */}
          <div className="mb-2">
            <h1 className="text-7xl md:text-9xl font-display text-text-primary tracking-[0.15em] flex overflow-hidden">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Role / Tagline */}
          <motion.div 
            variants={itemVariants}
            transition={{ delay: 1.0 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-body text-text-secondary/80 font-light tracking-wide">
              Crafting code that scales <span className="text-text-primary/40">&</span> interfaces that connect.
            </h2>
          </motion.div>

          {/* Sub-headline */}
          <motion.p 
            variants={itemVariants}
            transition={{ delay: 1.2 }}
            className="max-w-xl text-text-secondary text-lg mb-12 font-body leading-relaxed"
          >
            Computer Science student at Newton School of Technology. 
            Building high-impact software from the ground up with logic and purpose.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href="#projects" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-accent/10">
                View My Work
              </Button>
            </a>
            <a href="/assets/Resume-Priyanshu verma (7).pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="ghost" size="lg" icon={Download} className="w-full">
                Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        style={{ opacity: scrollIndicatorOpacity }}
        animate={{ 
          y: [0, 10, 0] 
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          delay: 2
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-secondary/60">
          Scroll
        </span>
        <ChevronDown size={16} className="text-accent/60" />
      </motion.div>
    </section>
  );
};
