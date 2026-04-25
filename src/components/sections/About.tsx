import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { SKILL_GROUPS } from '@/data/skills';
import { EXPERIENCE } from '@/data/experience';
import { GraduationCap, Briefcase, Code2, Rocket, Trophy, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * About Section
 * Features: Asymmetric profile frame, animated stats, and tabbed deep-dive content.
 */
export const About = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education'>('skills');
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  // Stats Logic
  const projectsCount = useCountUp(12, 1500, inView);
  const dsaProblemsCount = useCountUp(300, 2000, inView); 

  const tabs = [
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative Grid Background */}
            <div className="absolute -top-10 -left-10 w-40 h-40 opacity-10 pointer-events-none">
              <div className="grid grid-cols-5 gap-4">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-accent rounded-full" />
                ))}
              </div>
            </div>

            {/* Asymmetric Frame */}
            <div className="relative z-10 mx-auto lg:mx-0 w-full max-w-[400px]">
              {/* Offset Border */}
              <div className="absolute top-4 left-4 w-full h-full border border-accent/30 rounded-2xl z-0" />
              
              {/* Main Photo Container */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden group transition-all duration-700 bg-background border border-white/5 shadow-2xl">
                <img 
                  src="/assets/images/profile.png" 
                  alt="Priyanshu Verma"
                  className="w-full h-full object-contain object-center scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating Status Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 z-20 bg-background border border-border px-4 py-2 rounded-xl shadow-2xl flex items-center gap-3"
              >
                <span className="text-xs font-mono text-text-primary whitespace-nowrap">
                  Open to Work · Full-Stack & AI/ML
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2">
            <SectionHeading 
              eyebrow="ABOUT ME" 
              title="Scalable logic. User-centric design."
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6 text-text-secondary text-lg leading-relaxed font-body mb-10"
            >
              <p>
                I am a <span className="text-accent font-medium">Full-Stack Developer and AI/ML Undergraduate</span> with a deep focus on architecting 
                high-performance, production-grade solutions. My expertise lies in building scalable backend systems, 
                distributed microservices, and real-time applications that bridge complex logic with intuitive interfaces.
              </p>
              <p>
                Currently pursuing my B.Tech at <span className="text-accent font-medium">Newton School of Technology</span>, 
                I’ve engineered a diverse range of projects—from RAG-powered AI assistants to SaaS monitoring platforms. 
                I don’t just write code; I engineer digital ecosystems that scale.
              </p>
            </motion.div>

            {/* Stat Boxes */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <StatBox icon={Rocket} count={`${projectsCount}+`} label="Projects Engineered" delay={0.3} inView={inView} />
              <StatBox icon={Code2} count={dsaProblemsCount} label="DSA Problems" delay={0.4} inView={inView} />
              <StatBox icon={Trophy} count="Lead" label="AARAMBH Initiative" delay={0.5} inView={inView} />
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-8 p-1 bg-background/40 backdrop-blur-sm rounded-full w-fit border border-white/5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    'relative px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 flex items-center gap-2',
                    activeTab === tab.id ? 'text-background' : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-accent rounded-full z-0"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <tab.icon size={14} className="relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'skills' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {SKILL_GROUPS.slice(0, 4).map((group, idx) => (
                        <GlassCard key={idx} className="p-4" hover={false}>
                          <h4 className="text-accent text-[10px] font-mono uppercase tracking-widest mb-3">{group.category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {group.skills.map(skill => (
                              <Badge key={skill.name} variant="outline" className="text-[9px]">
                                {skill.name}
                              </Badge>
                            ))}
                          </div>
                        </GlassCard>
                      ))}
                    </div>
                  )}

                  {activeTab === 'experience' && (
                    <div className="space-y-4">
                      {EXPERIENCE.filter(e => e.type !== 'education').slice(0, 5).map((exp) => (
                        <div key={exp.id} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                            {exp.type === 'leadership' ? <Users size={18} /> : <Rocket size={18} />}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-accent/60 uppercase">{exp.date}</span>
                            <h4 className="text-text-primary font-medium text-sm mt-1">{exp.title}</h4>
                            <p className="text-text-secondary text-xs mt-1">{exp.organization}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'education' && (
                    <div className="space-y-4">
                      {EXPERIENCE.filter(e => e.type === 'education').map((edu) => (
                        <GlassCard key={edu.id} className="p-5" hover={false}>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-text-primary font-display text-xl">{edu.title}</h4>
                            <Badge variant="accent">{edu.date}</Badge>
                          </div>
                          <p className="text-accent text-sm mb-4 font-mono">{edu.organization}</p>
                          <p className="text-text-secondary text-sm leading-relaxed">{edu.description}</p>
                        </GlassCard>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatBox = ({ icon: Icon, count, label, delay, inView }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center p-4 rounded-2xl bg-background border border-white/5 text-center"
  >
    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
      <Icon size={20} strokeWidth={1.5} />
    </div>
    <span className="text-2xl font-display text-text-primary mb-1">{count}</span>
    <span className="text-[9px] uppercase tracking-wider text-text-secondary font-mono">{label}</span>
  </motion.div>
);
