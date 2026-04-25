import { SkillGroup } from '../types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Full-Stack Development',
    icon: 'Code2',
    skills: [
      { name: 'Next.js', level: 4, description: 'Server-side rendering and App Router', years: 1, context: 'Used in Plinko and YourSplit' },
      { name: 'React', level: 5, description: 'Component architecture and hooks', years: 2, context: 'Core of most projects' },
      { name: 'Node.js', level: 4, description: 'Server-side runtime and REST APIs', years: 1.5, context: 'Backend for monitoring systems' },
      { name: 'Express JS', level: 4, description: 'Minimalist web framework for Node', years: 1.5, context: 'Building scalable APIs' },
      { name: 'FastAPI', level: 4, description: 'High-performance Python APIs', years: 1, context: 'Used in AI Debugging Assistant' }
    ]
  },
  {
    category: 'Languages & Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Python', level: 5, description: 'AI/ML, scripting and backend development', years: 2, context: 'Used for ML models and FastAPI' },
      { name: 'TypeScript', level: 4, description: 'Type safety and enterprise patterns', years: 1, context: 'Standard for Next.js projects' },
      { name: 'JavaScript', level: 5, description: 'ES6+ and interactive web logic', years: 2.5, context: 'Foundational web language' },
      { name: 'HTML/CSS', level: 5, description: 'Responsive and semantic web design', years: 3, context: 'Mastering since 2022' }
    ]
  },
  {
    category: 'Databases & Infrastructure',
    icon: 'Layout',
    skills: [
      { name: 'PostgreSQL', level: 4, description: 'Relational database management', years: 1, context: 'Primary SQL database' },
      { name: 'MongoDB', level: 4, description: 'NoSQL document storage', years: 1, context: 'Used for telemetry data' },
      { name: 'Prisma ORM', level: 4, description: 'Type-safe database client', years: 1, context: 'Used in YourSplit and Plinko' },
      { name: 'Docker', level: 3, description: 'Containerization and deployment', years: 1, context: 'Used in TournaSphere' },
      { name: 'GitHub Actions', level: 3, description: 'CI/CD pipeline automation', years: 0.5, context: 'Automating build workflows' }
    ]
  },
  {
    category: 'Others & Soft Skills',
    icon: 'Telescope',
    skills: [
      { name: 'UI/UX Design', level: 4, description: 'User-centric interface design', years: 1, context: 'Designing all project interfaces' },
      { name: 'Framer Motion', level: 4, description: 'Production-ready web animations', years: 1, context: 'Cinematic portfolio effects' },
      { name: 'Communication', level: 5, description: 'Effective teamwork and leadership', years: 2, context: 'Proven via AARAMBH leadership' },
      { name: 'Leadership', level: 5, description: 'Organizing and leading teams', years: 2, context: 'President of Sports Club' }
    ]
  }
];
