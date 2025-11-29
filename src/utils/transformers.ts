/**
 * Data transformation utilities
 * Transform CareerProfile + PositioningStrategy → Resume/Portfolio data
 */

import {
  CareerProfile,
  PositioningStrategy,
  ResumeData,
  PortfolioData,
  ExperienceEntry,
  EducationEntry,
  PatentEntry,
  PortfolioExperience,
  PortfolioProject,
  SkillCategory,
  TimelineEvent,
  KeyMetric,
} from '../types';

/**
 * Transform CareerProfile and PositioningStrategy into ResumeData
 */
export function transformToResume(
  profile: CareerProfile,
  strategy?: PositioningStrategy
): ResumeData {
  return {
    header: {
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      location: profile.location,
      linkedin: profile.linkedin,
      github: profile.github,
      website: profile.website,
    },

    summary: generateProfessionalSummary(profile, strategy),

    skills: selectCoreSkills(profile.skills, 20),

    experience: transformExperience(profile.timelineEvents),

    education: profile.education.map(transformEducation),

    // Optional sections
    certifications: extractCertifications(profile.timelineEvents),
    awards: extractAwards(profile.timelineEvents),
    patents: extractPatents(profile.timelineEvents),
    publications: extractPublications(profile.timelineEvents),
  };
}

/**
 * Transform CareerProfile and PositioningStrategy into PortfolioData
 */
export function transformToPortfolio(
  profile: CareerProfile,
  strategy?: PositioningStrategy
): PortfolioData {
  return {
    hero: {
      name: profile.name,
      headline: strategy?.positioning.headline || profile.headline,
      tagline: generateTagline(profile, strategy),
      links: {
        linkedin: profile.linkedin,
        github: profile.github,
        email: profile.email,
        resume: 'resume.pdf', // Will be in same output directory
      },
      keyMetrics: strategy?.positioning.keyMetrics || generateDefaultMetrics(profile),
    },

    about: {
      summary: profile.summary,
      differentiators: strategy?.positioning.differentiators || [],
    },

    experience: transformToPortfolioExperience(profile.timelineEvents),

    projects: profile.projects.map(transformToPortfolioProject),

    skills: categorizeSkills(profile.skills),

    education: profile.education || [],

    contact: {
      email: profile.email,
      linkedin: profile.linkedin,
      github: profile.github,
      availability: determineAvailability(profile.aspirations),
    },

    meta: {
      title: `${profile.name} - ${strategy?.positioning.headline || profile.headline}`,
      description: profile.summary,
      keywords: [
        ...profile.brand.keywords,
        ...(strategy?.contentStrategy.topics || []),
      ],
    },
  };
}

/**
 * Generate professional summary (2-4 lines)
 * Formula: [Seniority] + [Focus] with [Years]. [Key Achievement]. Expertise in [Skills]. [Goal].
 */
function generateProfessionalSummary(
  profile: CareerProfile,
  strategy?: PositioningStrategy
): string {
  const parts: string[] = [];

  // Use strategic headline if available
  if (strategy?.positioning.headline) {
    parts.push(strategy.positioning.headline);
  } else {
    parts.push(profile.headline);
  }

  // Add key achievement if available
  const topAchievement = findTopAchievement(profile.timelineEvents);
  if (topAchievement) {
    parts.push(topAchievement);
  }

  // Add expertise
  const topSkills = selectCoreSkills(profile.skills, 5);
  if (topSkills.length > 0) {
    parts.push(`Expertise in ${topSkills.join(', ')}.`);
  }

  // Add goal/aspiration
  if (profile.aspirations.shortTerm.length > 0) {
    parts.push(profile.aspirations.shortTerm[0]);
  }

  return parts.join(' ');
}

/**
 * Generate tagline for portfolio hero (shorter than summary)
 */
function generateTagline(
  profile: CareerProfile,
  strategy?: PositioningStrategy
): string {
  if (strategy?.positioning.messaging) {
    return strategy.positioning.messaging;
  }

  // Fallback: Use first sentence of summary
  return profile.summary.split('.')[0] + '.';
}

/**
 * Select top N skills by proficiency and years of experience
 */
function selectCoreSkills(skills: CareerProfile['skills'], limit: number): string[] {
  return skills
    .filter((s) => s.category === 'technical') // Only technical skills for resume
    .sort((a, b) => {
      // Sort by: proficiency * years of experience
      const scoreA = a.proficiency * a.yearsOfExperience;
      const scoreB = b.proficiency * b.yearsOfExperience;
      return scoreB - scoreA;
    })
    .slice(0, limit)
    .map((s) => s.name);
}

/**
 * Transform timeline events into work experience entries
 */
function transformExperience(events: TimelineEvent[]): ExperienceEntry[] {
  // Filter to role_change events only
  const roleEvents = events.filter((e) => e.type === 'role_change');

  // Group by company and combine overlapping roles
  const experiences: ExperienceEntry[] = [];

  for (const event of roleEvents) {
    const bullets = formatBullets([
      event.impact,
      ...(event.bullets || []),
    ]);

    experiences.push({
      company: event.company || 'Unknown',
      role: event.title,
      dates: formatDate(event.date, event.endDate),
      bullets,
      technologies: event.tags,
    });
  }

  return experiences;
}

/**
 * Transform education entry
 */
function transformEducation(edu: CareerProfile['education'][0]): EducationEntry {
  return {
    degree: edu.degree,
    institution: edu.institution,
    year: edu.year,
    gpa: edu.gpa && parseFloat(edu.gpa) >= 3.5 ? edu.gpa : undefined, // Only show if >= 3.5
    honors: edu.honors?.join(', '),
  };
}

/**
 * Format achievement bullets with action verbs and metrics
 * Formula: [Action Verb] + [What] + [How/Why] + [Metric]
 */
function formatBullets(bullets: string[]): string[] {
  return bullets
    .filter((b) => b && b.trim().length > 0)
    .map((bullet) => {
      // Ensure bullet starts with action verb
      const actionVerbs = [
        'Led', 'Built', 'Architected', 'Optimized', 'Reduced', 'Increased',
        'Designed', 'Implemented', 'Developed', 'Managed', 'Created',
      ];

      const startsWithVerb = actionVerbs.some((verb) =>
        bullet.startsWith(verb)
      );

      if (!startsWithVerb) {
        // Try to detect what was done and prepend appropriate verb
        return bullet; // For MVP, just return as-is
      }

      return bullet;
    });
}

/**
 * Find the most impactful achievement (has metrics/numbers)
 */
function findTopAchievement(events: TimelineEvent[]): string | null {
  // Look for achievements with metrics (numbers, percentages)
  const achievementsWithMetrics = events
    .filter((e) => /\d+/.test(e.impact)) // Has numbers
    .sort((a, b) => b.impact.length - a.impact.length); // Prefer longer (more detailed)

  return achievementsWithMetrics[0]?.impact || null;
}

/**
 * Format a single date for display (e.g., "Jan 2020" or "2020")
 */
function formatSingleDate(dateStr: string): string {
  // Handle "YYYY-MM" format
  if (/^\d{4}-\d{2}$/.test(dateStr)) {
    const [year, month] = dateStr.split('-');
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  }

  // Handle "YYYY" format
  if (/^\d{4}$/.test(dateStr)) {
    return dateStr;
  }

  // Handle "Present" or other strings
  return dateStr;
}

/**
 * Format date range for display (e.g., "Jan 2020 - Dec 2021" or "Jan 2020 - Present")
 */
function formatDate(startDate: string, endDate?: string): string {
  const formattedStart = formatSingleDate(startDate);

  if (!endDate) {
    // Single date event (patents, awards, etc.)
    return formattedStart;
  }

  const formattedEnd = endDate === 'Present' ? 'Present' : formatSingleDate(endDate);
  return `${formattedStart} - ${formattedEnd}`;
}

/**
 * Extract certifications from timeline events
 */
function extractCertifications(events: TimelineEvent[]): string[] | undefined {
  const certs = events
    .filter((e) => e.type === 'certification')
    .map((e) => e.title);

  return certs.length > 0 ? certs : undefined;
}

/**
 * Extract awards from timeline events
 */
function extractAwards(events: TimelineEvent[]): string[] | undefined {
  const awards = events
    .filter((e) => e.type === 'award')
    .map((e) => e.title);

  return awards.length > 0 ? awards : undefined;
}

/**
 * Extract patents from timeline events
 */
function extractPatents(events: TimelineEvent[]): PatentEntry[] | undefined {
  const patents = events
    .filter((e) => e.type === 'patent')
    .map((e) => ({
      number: e.patentNumber || 'Patent Pending',
      title: e.title,
      date: e.issueDate || e.date,
      inventors: e.inventors?.join(', '),
    }));

  return patents.length > 0 ? patents : undefined;
}

/**
 * Extract publications from timeline events
 */
function extractPublications(events: TimelineEvent[]): string[] | undefined {
  const pubs = events
    .filter((e) => e.type === 'publication')
    .map((e) => e.title);

  return pubs.length > 0 ? pubs : undefined;
}

/**
 * Transform timeline events to portfolio experience format
 */
function transformToPortfolioExperience(events: TimelineEvent[]): PortfolioExperience[] {
  return events
    .filter((e) => e.type === 'role_change')
    .map((event) => ({
      company: event.company || 'Unknown',
      role: event.title,
      dates: formatDate(event.date, event.endDate),
      description: event.description,
      achievements: [event.impact, ...(event.bullets || [])],
      technologies: event.tags,
    }));
}

/**
 * Transform project to portfolio project format
 */
function transformToPortfolioProject(project: CareerProfile['projects'][0]): PortfolioProject {
  return {
    name: project.name,
    description: project.description,
    technologies: project.technologies,
    impact: project.impact,
    url: project.url,
    github: project.github,
    screenshot: project.screenshot,
  };
}

/**
 * Categorize skills into groups for portfolio display
 */
function categorizeSkills(skills: CareerProfile['skills']): SkillCategory[] {
  const categories = new Map<string, SkillCategory['skills']>();

  for (const skill of skills) {
    let categoryName: string;

    if (skill.category === 'technical') {
      // Further categorize technical skills
      if (isLanguage(skill.name)) {
        categoryName = 'Languages';
      } else if (isFramework(skill.name)) {
        categoryName = 'Frameworks';
      } else if (isCloud(skill.name)) {
        categoryName = 'Cloud & DevOps';
      } else {
        categoryName = 'Tools & Technologies';
      }
    } else {
      categoryName = capitalizeFirst(skill.category);
    }

    if (!categories.has(categoryName)) {
      categories.set(categoryName, []);
    }

    categories.get(categoryName)!.push({
      name: skill.name,
      proficiency: skill.proficiency,
      years: skill.yearsOfExperience,
    });
  }

  return Array.from(categories.entries()).map(([category, skills]) => ({
    category,
    skills,
  }));
}

/**
 * Helper: Check if skill is a programming language
 */
function isLanguage(skillName: string): boolean {
  const languages = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust', 'C++', 'C#',
    'Ruby', 'PHP', 'Swift', 'Kotlin', 'Scala', 'SQL',
  ];
  return languages.some((lang) =>
    skillName.toLowerCase().includes(lang.toLowerCase())
  );
}

/**
 * Helper: Check if skill is a framework
 */
function isFramework(skillName: string): boolean {
  const frameworks = [
    'React', 'Vue', 'Angular', 'Next.js', 'Express', 'Django', 'Flask',
    'Spring', 'Rails', '.NET', 'Laravel',
  ];
  return frameworks.some((fw) =>
    skillName.toLowerCase().includes(fw.toLowerCase())
  );
}

/**
 * Helper: Check if skill is cloud/devops
 */
function isCloud(skillName: string): boolean {
  const cloudTools = [
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins',
    'CI/CD', 'Git', 'GitHub Actions',
  ];
  return cloudTools.some((tool) =>
    skillName.toLowerCase().includes(tool.toLowerCase())
  );
}

/**
 * Helper: Capitalize first letter
 */
function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Determine availability status from aspirations
 */
function determineAvailability(aspirations: CareerProfile['aspirations']): string {
  const shortTerm = aspirations.shortTerm.join(' ').toLowerCase();

  if (shortTerm.includes('seeking') || shortTerm.includes('looking')) {
    return 'Open to opportunities';
  }

  if (shortTerm.includes('available')) {
    return 'Available now';
  }

  return 'Open to opportunities';
}

/**
 * Generate default metrics from career profile when not provided in positioning
 */
function generateDefaultMetrics(profile: CareerProfile): KeyMetric[] {
  const metrics: KeyMetric[] = [];

  // Count patents
  const patentCount = profile.timelineEvents.filter((e) => e.type === 'patent').length;
  if (patentCount > 0) {
    metrics.push({ value: String(patentCount), label: 'Patents' });
  }

  // Calculate years of experience from earliest role
  const roleEvents = profile.timelineEvents.filter((e) => e.type === 'role_change');
  if (roleEvents.length > 0) {
    const dates = roleEvents.map((e) => new Date(e.date + '-01').getTime());
    const earliest = Math.min(...dates);
    const years = Math.floor((Date.now() - earliest) / (365.25 * 24 * 60 * 60 * 1000));
    metrics.push({ value: `${years}+`, label: 'Years Experience' });
  }

  // Count awards
  const awardCount = profile.timelineEvents.filter((e) => e.type === 'award').length;
  if (awardCount > 0) {
    metrics.push({ value: String(awardCount), label: 'Awards' });
  }

  // Add skills count
  const technicalSkills = profile.skills.filter((s) => s.category === 'technical').length;
  if (technicalSkills > 0) {
    metrics.push({ value: String(technicalSkills), label: 'Technical Skills' });
  }

  // Add projects count
  if (profile.projects.length > 0) {
    metrics.push({ value: String(profile.projects.length), label: 'Projects' });
  }

  // Return top 4 metrics
  return metrics.slice(0, 4);
}
