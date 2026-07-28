import type { IconType } from 'react-icons';

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface PersonalInfo {
  name: string;
  role: string;
  taglines: string[];
  intro: string;
  location: string;
  email: string;
  resumeUrl: string;
  avatarInitials: string;
}

export interface AboutInterest {
  label: string;
  icon: IconType;
}

export interface SkillItem {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  id: string;
  title: string;
  items: SkillItem[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface AchievementEntry {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'hackathon' | 'competitive-programming' | 'award' | 'scholarship';
  icon: IconType;
}

export interface LeadershipEntry {
  id: string;
  organization: string;
  role: string;
  duration: string;
  impact: string[];
}

export interface CertificationEntry {
  id: string;
  name: string;
  organization: string;
  year: string;
  credentialUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
