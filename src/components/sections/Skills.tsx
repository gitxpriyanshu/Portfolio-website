import { motion } from 'framer-motion';
import { Layout, Code2, Wrench, Telescope } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Tooltip } from '@/components/ui/Tooltip';
import { SKILL_GROUPS } from '@/data/skills';
import { useInView } from '@/hooks/useInView';

/**
 * Skills Section
 * Features: A technical capability grid (2x2), hover-reactive badges, and a scrolling marquee.
 */
export const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const iconMap: Record<string, any> = {
    'Layout': Layout,
    'Code2': Code2,
    'Wrench': Wrench,
    'Telescope': Telescope,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          eyebrow="TECHNICAL CAPABILITIES" 
          title="Engineered with precision."
          subtitle="A focused overview of my technical stack and ongoing explorations in software engineering."
          align="center"
          className="mb-16"
        />

        {/* Skill Clusters Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {SKILL_GROUPS.map((group) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <motion.div key={group.category} variants={cardVariants}>
                <GlassCard className="h-full border-t-2 border-t-accent/20 flex flex-col p-8 group">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display text-text-primary tracking-tight">
                        {group.category}
                      </h3>
                      <p className="text-xs text-text-secondary font-mono uppercase tracking-widest mt-1">
                        Domain Expert
                      </p>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-text-secondary text-sm font-body leading-relaxed mb-8 opacity-80">
                    {group.skills[0]?.description || "Specialized development focusing on efficiency and modern patterns."}
                  </p>

                  {/* Skills Grid */}
                  <div className="mt-auto flex flex-wrap gap-2.5">
                    {group.skills.map((skill, sIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={badgeVariants}
                        transition={{ delay: 0.2 + sIndex * 0.05 }}
                      >
                        <Tooltip content={skill.context || `Active for ${skill.years} years`}>
                          <Badge 
                            variant="outline" 
                            className="hover:border-accent hover:text-accent hover:shadow-[0_0_10px_rgba(232,213,183,0.1)] transition-all cursor-crosshair py-1.5"
                          >
                            {skill.name}
                          </Badge>
                        </Tooltip>
                      </motion.div>
                    ))}
                  </div>

                  {/* Subtle Ambient Rotation Oscillation */}
                  <motion.div
                    animate={{ rotate: [0, 0.5, 0, -0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    className="absolute inset-0 pointer-events-none"
                  />
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* "Currently Exploring" Marquee */}
      <div className="mt-24 w-full bg-surface/30 border-y border-white/5 py-4 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-sm font-mono text-text-secondary/40 tracking-[0.3em] px-8">
                LEARNING ETHICAL HACKING
              </span>
              <span className="text-accent/30">•</span>
              <span className="text-sm font-mono text-text-secondary/40 tracking-[0.3em] px-8">
                GSOC PREPARATION
              </span>
              <span className="text-accent/30">•</span>
              <span className="text-sm font-mono text-text-secondary/40 tracking-[0.3em] px-8">
                THREE.JS INTERACTION
              </span>
              <span className="text-accent/30">•</span>
              <span className="text-sm font-mono text-text-secondary/40 tracking-[0.3em] px-8">
                NODE.JS MICROSERVICES
              </span>
              <span className="text-accent/30">•</span>
            </div>
          ))}
        </div>

        {/* Gradient Fades for Marquee */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      </div>

      {/* Marquee Keyframes (Added to globals.css usually, but can be inline) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};
