import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '@/types';
import { Badge } from './Badge';
import Button from './Button';
import { cn } from '@/lib/utils';
import { OptimizedImage } from './OptimizedImage';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

/**
 * Premium Project Card
 * Features: Parallax image, accent bars, shimmer effects, and orchestrated hover states.
 */
export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the image
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/5 bg-surface transition-all duration-500",
        featured ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/5]"
      )}
    >
      {/* Left Accent Bar */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1.5 z-30 transition-transform duration-500 origin-bottom scale-y-0 group-hover:scale-y-100"
        style={{ backgroundColor: project.color }}
      />

      {/* Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <OptimizedImage
          src={project.imageUrl}
          alt={project.title}
          style={{ y: featured ? y : 0 }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          containerClassName="w-full h-full"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
      </div>

      {/* Shimmer Sweep Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
        <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {project.techStack.map(tech => (
              <Badge key={tech} variant="muted" className="bg-white/10 text-white/80 border-none backdrop-blur-sm">
                {tech}
              </Badge>
            ))}
          </div>

          <h3 className="text-3xl md:text-4xl font-display text-text-primary mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm md:text-base font-body max-w-lg mb-6 line-clamp-2">
            {project.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" icon={ExternalLink}>
                  Live Demo
                </Button>
              </a>
            )}
            <Link to={`/projects/${project.id}`}>
              <Button variant="ghost" size="sm" icon={ArrowRight}>
                Case Study
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Year Badge */}
      <div className="absolute top-6 right-6 z-20">
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
          {project.year}
        </span>
      </div>
    </motion.div>
  );
};
