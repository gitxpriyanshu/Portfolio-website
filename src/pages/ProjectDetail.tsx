import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

import { GlassCard } from '@/components/ui/GlassCard';

/**
 * Project Detail Page (Case Study)
 * Features: High-impact banner, problem/solution breakdown, and technical deep-dives.
 */
export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-display text-text-primary mb-4">Project Not Found</h1>
        <Link to="/" className="text-accent hover:underline font-mono uppercase tracking-widest text-xs">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors font-mono text-xs uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Back to projects
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="accent">{project.category}</Badge>
            <Badge variant="outline">{project.year}</Badge>
            <Badge variant="default">{project.status}</Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display text-text-primary mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-body leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          <div className="flex gap-4 mt-10">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" icon={ExternalLink}>Live Preview</Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" icon={Github}>View Code</Button>
              </a>
            )}
          </div>
        </motion.div>

        {/* Full Image Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 mb-24 shadow-2xl"
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ backgroundColor: project.color }}
          />
        </motion.div>

        {/* Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-6">The Problem</h3>
              <p className="text-text-primary text-lg leading-relaxed font-body">
                {project.description}
              </p>
            </section>

            <section>
              <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-6">Technical Approach</h3>
              <p className="text-text-secondary text-lg leading-relaxed font-body mb-8">
                {project.longDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, idx) => (
                  <GlassCard key={idx} className="p-5" hover={false}>
                    <p className="text-text-primary text-sm font-body">{highlight}</p>
                  </GlassCard>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div>
              <h4 className="text-text-primary font-display text-xl mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <Badge key={tech} variant="outline" className="text-[10px]">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="my-8 h-px w-full bg-white/5" />

            <div>
              <h4 className="text-text-primary font-display text-xl mb-4">Project Meta</h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-text-secondary text-xs uppercase font-mono">Category</span>
                  <span className="text-text-primary text-sm capitalize">{project.category}</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-text-secondary text-xs uppercase font-mono">Completed</span>
                  <span className="text-text-primary text-sm">{project.year}</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-text-secondary text-xs uppercase font-mono">Status</span>
                  <Badge variant="muted" className="text-[9px]">{project.status}</Badge>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
