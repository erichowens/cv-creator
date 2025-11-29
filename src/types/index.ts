/**
 * Type definitions for CV Creator
 * Matches the schemas from career-biographer and competitive-cartographer
 */

// ============================================================================
// INPUT: From career-biographer
// ============================================================================

export interface CareerProfile {
  // Identity
  name: string;
  email: string;
  phone: string;
  location: string;
  headline: string;
  summary: string;

  // Links
  linkedin?: string;
  github?: string;
  website?: string;

  // Timeline events (career history)
  timelineEvents: TimelineEvent[];

  // Skills
  skills: Skill[];

  // Projects
  projects: Project[];

  // Education
  education: Education[];

  // Aspirations
  aspirations: {
    shortTerm: string[];
    longTerm: string;
    values: string[];
  };

  // Personal brand
  brand: {
    targetAudience: string;
    keywords: string[];
    tone: string;
    colors?: string[];
  };
}

export interface TimelineEvent {
  date: string; // Start date: ISO date or "2020-01" format
  endDate?: string; // End date: ISO date, "2020-01", or "Present"
  type: 'role_change' | 'patent' | 'award' | 'publication' | 'milestone' | 'certification';
  title: string; // Role title or event name
  company?: string;
  description: string;
  impact: string; // Quantifiable impact/achievement
  tags: string[]; // Technologies, skills used
  bullets?: string[]; // Additional achievement bullets
  // Patent-specific fields
  patentNumber?: string; // e.g., "US 10,123,456 B2"
  inventors?: string[]; // Co-inventors
  filingDate?: string; // When filed
  issueDate?: string; // When granted
}

export interface Skill {
  category: 'technical' | 'leadership' | 'domain' | 'soft';
  name: string;
  proficiency: number; // 0-100
  yearsOfExperience: number;
}

export interface Project {
  name: string;
  role: string;
  description: string;
  technologies: string[];
  impact: string;
  metrics: string[];
  url?: string;
  github?: string;
  screenshot?: string; // Path to image
}

export interface Education {
  degree: string;
  institution: string;
  year: string; // "2020" or "2018-2022"
  gpa?: string;
  honors?: string[];
  relevantCoursework?: string[];
  details?: string; // Additional descriptive text
}

// ============================================================================
// INPUT: From competitive-cartographer
// ============================================================================

export interface PositioningStrategy {
  positioning: {
    headline: string; // Strategic headline
    differentiators: string[]; // What makes you unique
    messaging: string; // Core message
    keyMetrics?: KeyMetric[]; // Top 4 metrics for portfolio
  };

  visualStrategy: {
    aestheticDirection: string;
    avoid: string[];
    embrace: string[];
  };

  contentStrategy: {
    topics: string[];
    tone: string;
    depth: string;
  };
}

// ============================================================================
// OUTPUT: Resume data structure
// ============================================================================

export interface ResumeData {
  // Header
  header: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };

  // Professional summary (2-4 lines)
  summary: string;

  // Core skills (15-20 items)
  skills: string[];

  // Work experience
  experience: ExperienceEntry[];

  // Education
  education: EducationEntry[];

  // Optional sections
  certifications?: string[];
  awards?: string[];
  patents?: PatentEntry[];
  publications?: string[];
}

export interface PatentEntry {
  number: string; // e.g., "US 10,123,456 B2"
  title: string;
  date: string; // Issue date or filing date
  inventors?: string; // "E. Owens, J. Smith, et al."
}

export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string; // "Jan 2020 - Present"
  location?: string;
  bullets: string[]; // Achievement bullets with metrics
  technologies?: string[]; // Tech stack used
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
  honors?: string;
}

// ============================================================================
// OUTPUT: Portfolio website data
// ============================================================================

export interface KeyMetric {
  value: string; // e.g., "12", "40%", "10M+"
  label: string; // e.g., "Patents", "Latency Reduction", "Users Served"
}

export interface PortfolioData {
  // Hero section
  hero: {
    name: string;
    headline: string;
    tagline: string;
    photo?: string;
    links: {
      linkedin?: string;
      github?: string;
      email: string;
      resume: string; // Path to PDF resume
    };
    keyMetrics?: KeyMetric[]; // Top 4 metrics for the metrics bar
  };

  // About section
  about: {
    summary: string;
    differentiators: string[];
    photo?: string;
  };

  // Experience section
  experience: PortfolioExperience[];

  // Projects section
  projects: PortfolioProject[];

  // Skills section
  skills: SkillCategory[];

  // Education section
  education: Education[];

  // Contact section
  contact: {
    email: string;
    linkedin?: string;
    github?: string;
    availability: string; // "Available now", "Open to opportunities", etc.
  };

  // Metadata
  meta: {
    title: string;
    description: string;
    keywords: string[];
    og_image?: string;
  };
}

export interface PortfolioExperience {
  company: string;
  role: string;
  dates: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface PortfolioProject {
  name: string;
  description: string;
  technologies: string[];
  impact: string;
  url?: string;
  github?: string;
  screenshot?: string;
}

export interface SkillCategory {
  category: string; // "Languages", "Frameworks", "Tools", etc.
  skills: Array<{
    name: string;
    proficiency: number; // 0-100 for visual representation
    years: number;
  }>;
}

// ============================================================================
// Generation options
// ============================================================================

export interface GenerationOptions {
  outputDir: string;

  // PDF options
  pdf: {
    filename: string;
    format: 'A4' | 'Letter';
    margin: string; // e.g., "0.75in"
  };

  // Portfolio options
  portfolio: {
    dirname: string; // Folder name for portfolio files
    includeAnalytics?: boolean;
    analyticsId?: string;
    theme?: 'light' | 'dark' | 'auto';
  };

  // Optional job description for optimization
  jobDescription?: string;
}

// ============================================================================
// ATS validation result
// ============================================================================

export interface ATSValidation {
  passed: boolean;
  score: number; // 0-100 (simplified scoring)
  checks: {
    singleColumn: boolean;
    standardFonts: boolean;
    noImages: boolean;
    standardHeaders: boolean;
    dateFormatConsistent: boolean;
  };
  warnings: string[];
  recommendations: string[];
}
