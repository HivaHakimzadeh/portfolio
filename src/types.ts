export interface ContactLink {
  label: string;
  href: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface IdentityCardData {
  title: string;
  body: string;
}

export interface FeaturedProject {
  title: string;
  eyebrow: string;
  year: string;
  role: string;
  preview?: string;
  thumb?: string;
  summary: string;
  impact: string;
  focus: string;
  visualWords: string[];
  stack: string[];
  highlights: string[];
}

export interface CompactProject {
  title: string;
  summary: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  timeframe: string;
  description: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}
