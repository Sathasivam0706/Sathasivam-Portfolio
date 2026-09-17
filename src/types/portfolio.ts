export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  repoUrl: string;
  demoUrl?: string | null;
  technologies: string[];
  keyFeatures: string[];
  category: 'AI & Full-Stack' | 'AI & IoT' | 'Java & ML' | 'Java Software';
  milestones?: { title: string; desc: string }[];
  details: {
    problem: string;
    solution: string;
    technologyOverview: string;
    featuresList: string[];
    architecture: string;
    contribution: string;
  };
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  category: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  duration: string;
  type: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  university: string;
  period: string;
  cgpa: string;
  status: string;
  currentYear?: string;
  currentSemester?: string;
  details: string[];
}
