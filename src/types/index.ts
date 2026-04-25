/**
 * Shared Type Definitions for Priyanshu's Portfolio
 */

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export type ProjectCategory = 'web' | 'game' | 'tool' | 'open-source' | 'ai';
export type ProjectStatus = 'live' | 'in-progress' | 'archived';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  featured: boolean;
  year: number;
  status: ProjectStatus;
  highlights: string[];
  color: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  description?: string;
  years: number;
  context?: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export type ExperienceType = 'education' | 'leadership' | 'project' | 'community' | 'milestone';

export interface Experience {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: ExperienceType;
  highlight?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

