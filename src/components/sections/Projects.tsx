import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PROJECTS } from '@/data/projects';
import { useInView } from '@/hooks/useInView';

/**
 * Projects Showcase Section
 * Features: High-impact grid layout with featured and secondary project prioritization.
 */
export const Projects = () => {
  const [ref] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 bg-background overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          eyebrow="SELECTED WORK" 
          title="Digital experiences that matter."
          subtitle="A collection of products, experiments, and technical investigations into the future of the web."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              featured={project.featured && index === 0}
            />
          ))}
        </div>
        
        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary text-sm font-mono uppercase tracking-[0.2em] opacity-40">
            More projects available on <a href="https://github.com/gitxpriyanshu" className="text-accent hover:underline">GitHub</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
