import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { EXPERIENCE } from '@/data/experience';
import { useInView } from '@/hooks/useInView';
import { GraduationCap, Trophy, Rocket, Users, Milestone } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Animated Experience Timeline
 * Features: A scroll-driven center axis, alternating card layout, and pulse animations.
 */
export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress for the vertical axis line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 bg-surface/30 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          eyebrow="MY JOURNEY" 
          title="Timeline of growth."
          subtitle="A chronological overview of my academic milestones, leadership roles, and technical project launches."
          align="center"
          className="mb-20"
        />

        <div className="relative">
          {/* Central Axis Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/5" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent via-accent/50 to-transparent origin-top z-10"
          />

          <div className="space-y-16 md:space-y-24">
            {EXPERIENCE.map((entry, index) => (
              <TimelineEntry key={entry.id} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineEntryProps {
  entry: typeof EXPERIENCE[0];
  index: number;
}

const TimelineEntry = ({ entry, index }: TimelineEntryProps) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  const iconMap: Record<string, any> = {
    education: GraduationCap,
    leadership: Trophy,
    project: Rocket,
    community: Users,
    milestone: Milestone
  };

  const Icon = iconMap[entry.type] || Milestone;

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center">
      {/* Date Badge (Mobile: Left, Desktop: Axis) */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20 top-0 md:top-1/2 md:-translate-y-1/2">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          className="relative"
        >
          {/* Pulse Ring */}
          <motion.div
            animate={inView ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full bg-accent/30"
          />
          <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(232,213,183,0.5)] border-2 border-background relative z-10" />
        </motion.div>
      </div>

      {/* Content Layout */}
      <div className={cn(
        "w-full md:w-1/2 flex",
        isEven ? "md:justify-end md:pr-16" : "md:justify-start md:pl-16 md:order-2"
      )}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="ml-16 md:ml-0 w-full"
        >
          <GlassCard className="p-6 relative group" hover={true}>
            {/* Header Info */}
            <div className="flex justify-between items-start mb-4">
              <Badge variant="accent" className="text-[9px]">{entry.type}</Badge>
              <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">{entry.date}</span>
            </div>

            <div className="flex gap-4 items-start">
              <div className="hidden sm:flex w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 items-center justify-center text-accent flex-shrink-0">
                <Icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-display text-text-primary mb-1 tracking-tight group-hover:text-accent transition-colors">
                  {entry.title}
                </h3>
                <p className="text-sm font-body text-accent/60 mb-3">{entry.organization}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {entry.description}
                </p>
                
                {entry.highlight && (
                  <div className="text-[10px] font-mono text-accent uppercase tracking-wider py-1 px-2 bg-accent/5 border-l border-accent inline-block">
                    {entry.highlight}
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Empty spacer for desktop layout symmetry */}
      <div className="hidden md:block w-1/2" />
    </div>
  );
};
