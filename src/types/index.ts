export interface Project {
  id: string;
  title: string;
  category: 'Web App' | 'E-Commerce' | 'Dashboard' | 'UI/UX' | 'Landing Page';
  year: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  features: string[];
  image: string;
  accentColor: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  stats?: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  deliverables: string[];
  highlight: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Design & Tools' | 'Animation & Styling';
  iconName: string;
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Pricing & Timeline' | 'Technical';
}

export interface WorkProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
  description: string;
}
