import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Editorial Section Heading
 * Uses Playfair Display for a premium, cinematic feel
 */
export const SectionHeading = ({ 
  eyebrow, 
  title, 
  subtitle, 
  align = 'left',
  className 
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      'flex flex-col mb-12',
      align === 'center' ? 'items-center text-center' : 'items-start text-left',
      className
    )}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-3 block"
        >
          {eyebrow}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-display text-text-primary leading-tight mb-4"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary max-w-2xl text-lg font-body"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative element */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="h-[1px] bg-accent/30 mt-6"
      />
    </div>
  );
};
