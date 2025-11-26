/**
 * Sample data for testing CV Creator
 * Based on the "Alex Chen" example from the architecture docs
 */

import { CareerProfile, PositioningStrategy } from '../src/types';

/**
 * Sample CareerProfile from career-biographer
 */
export const sampleCareerProfile: CareerProfile = {
  name: 'Alex Chen',
  email: 'alex.chen@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  headline: 'Senior Backend Engineer',
  summary: 'Passionate backend engineer with 8 years of experience building scalable distributed systems. Specialized in microservices architecture, cloud-native applications, and high-performance APIs. Led teams through successful migrations serving millions of users. Strong advocate for clean code, comprehensive testing, and continuous improvement.',

  linkedin: 'https://linkedin.com/in/alexchen',
  github: 'https://github.com/alexchen',
  website: 'https://alexchen.dev',

  timelineEvents: [
    {
      date: '2021-06',
      type: 'role_change',
      title: 'Senior Backend Engineer',
      company: 'TechCorp Inc',
      description: 'Lead backend engineer for core infrastructure team, responsible for microservices architecture serving 10M+ daily active users.',
      impact: 'Led microservices migration from monolith, reducing API latency by 40% and improving deployment frequency from weekly to daily releases',
      tags: ['Go', 'Kubernetes', 'PostgreSQL', 'Redis', 'gRPC', 'Kafka'],
      bullets: [
        'Architected event-driven system processing 500K messages/second using Kafka and Go with 99.99% uptime SLA',
        'Optimized PostgreSQL query performance through indexing and query rewriting, reducing average query time from 800ms to 120ms (85% improvement)',
        'Implemented distributed tracing with Jaeger, reducing mean time to resolution for production issues by 60%',
        'Mentored 5 junior engineers through code reviews and pair programming, resulting in 3 promotions',
      ],
    },
    {
      date: '2018-03',
      type: 'role_change',
      title: 'Backend Engineer',
      company: 'StartupXYZ',
      description: 'Full-stack engineer building B2B SaaS platform for data analytics.',
      impact: 'Built REST API serving 2M+ requests/day with sub-200ms p95 latency',
      tags: ['Python', 'Django', 'PostgreSQL', 'AWS', 'Docker'],
      bullets: [
        'Designed and implemented RESTful API using Django Rest Framework, handling 2M daily requests',
        'Reduced infrastructure costs by 35% through AWS resource optimization and reserved instance planning',
        'Implemented CI/CD pipeline using GitHub Actions and Docker, reducing deployment time from 2 hours to 15 minutes',
      ],
    },
    {
      date: '2016-07',
      type: 'role_change',
      title: 'Software Engineer',
      company: 'Enterprise Solutions Corp',
      description: 'Junior engineer working on internal tools and automation.',
      impact: 'Automated manual processes saving 20 hours/week of team time',
      tags: ['Java', 'Spring Boot', 'MySQL', 'Jenkins'],
      bullets: [
        'Developed automation tools in Java/Spring Boot reducing manual report generation from 4 hours to 5 minutes',
        'Created internal dashboard for monitoring system health, reducing incident response time by 40%',
      ],
    },
    {
      date: '2020-09',
      type: 'certification',
      title: 'AWS Certified Solutions Architect - Professional',
      description: 'Advanced AWS certification for architecting scalable systems',
      impact: '',
      tags: ['AWS', 'Cloud Architecture'],
    },
    {
      date: '2019-11',
      type: 'award',
      title: 'Company Hackathon Winner - Best Infrastructure Project',
      description: 'Won first place for building real-time log aggregation system',
      impact: 'System adopted for production use, processing 1TB+ logs daily',
      tags: ['Elasticsearch', 'Logstash', 'Kafka'],
    },
  ],

  skills: [
    // Languages
    { category: 'technical', name: 'Go', proficiency: 95, yearsOfExperience: 4 },
    { category: 'technical', name: 'Python', proficiency: 90, yearsOfExperience: 6 },
    { category: 'technical', name: 'Java', proficiency: 80, yearsOfExperience: 5 },
    { category: 'technical', name: 'SQL', proficiency: 85, yearsOfExperience: 7 },

    // Frameworks & Tools
    { category: 'technical', name: 'Kubernetes', proficiency: 90, yearsOfExperience: 3 },
    { category: 'technical', name: 'Docker', proficiency: 95, yearsOfExperience: 5 },
    { category: 'technical', name: 'PostgreSQL', proficiency: 90, yearsOfExperience: 6 },
    { category: 'technical', name: 'Redis', proficiency: 85, yearsOfExperience: 4 },
    { category: 'technical', name: 'Kafka', proficiency: 85, yearsOfExperience: 3 },
    { category: 'technical', name: 'gRPC', proficiency: 80, yearsOfExperience: 3 },
    { category: 'technical', name: 'GraphQL', proficiency: 75, yearsOfExperience: 2 },

    // Cloud & DevOps
    { category: 'technical', name: 'AWS', proficiency: 90, yearsOfExperience: 5 },
    { category: 'technical', name: 'Terraform', proficiency: 85, yearsOfExperience: 3 },
    { category: 'technical', name: 'CI/CD', proficiency: 90, yearsOfExperience: 5 },
    { category: 'technical', name: 'GitHub Actions', proficiency: 85, yearsOfExperience: 3 },

    // Architecture & Patterns
    { category: 'technical', name: 'Microservices', proficiency: 95, yearsOfExperience: 4 },
    { category: 'technical', name: 'Distributed Systems', proficiency: 90, yearsOfExperience: 5 },
    { category: 'technical', name: 'System Design', proficiency: 90, yearsOfExperience: 6 },
    { category: 'technical', name: 'API Design', proficiency: 95, yearsOfExperience: 7 },

    // Monitoring & Observability
    { category: 'technical', name: 'Prometheus', proficiency: 80, yearsOfExperience: 3 },
    { category: 'technical', name: 'Grafana', proficiency: 80, yearsOfExperience: 3 },
    { category: 'technical', name: 'Jaeger', proficiency: 75, yearsOfExperience: 2 },

    // Leadership
    { category: 'leadership', name: 'Mentoring', proficiency: 85, yearsOfExperience: 4 },
    { category: 'leadership', name: 'Code Review', proficiency: 90, yearsOfExperience: 6 },
    { category: 'leadership', name: 'Technical Writing', proficiency: 80, yearsOfExperience: 5 },
  ],

  projects: [
    {
      name: 'Event-Driven Microservices Platform',
      role: 'Lead Engineer',
      description: 'Designed and implemented scalable event-driven architecture using Kafka, Go, and Kubernetes',
      technologies: ['Go', 'Kafka', 'Kubernetes', 'gRPC', 'PostgreSQL'],
      impact: 'Reduced coupling between services, improved system resilience, enabled 500K events/sec throughput',
      metrics: ['99.99% uptime', '500K msgs/sec', '40% latency reduction'],
      github: 'https://github.com/alexchen/event-platform',
    },
    {
      name: 'Real-Time Log Aggregation System',
      role: 'Creator',
      description: 'Built centralized logging system processing 1TB+ logs daily with real-time search capabilities',
      technologies: ['Elasticsearch', 'Logstash', 'Kafka', 'Go'],
      impact: 'Reduced debugging time by 60%, enabled real-time alerting on critical errors',
      metrics: ['1TB+ daily logs', '60% faster debugging', 'Real-time search'],
      github: 'https://github.com/alexchen/log-aggregator',
    },
    {
      name: 'API Gateway with Rate Limiting',
      role: 'Designer & Implementer',
      description: 'Custom API gateway with intelligent rate limiting, authentication, and request routing',
      technologies: ['Go', 'Redis', 'nginx'],
      impact: 'Protected backend services from abuse, improved security posture',
      metrics: ['10M+ requests/day', 'Sub-5ms latency', 'Zero downtime'],
    },
  ],

  education: [
    {
      degree: 'B.S. Computer Science',
      institution: 'University of California, Berkeley',
      year: '2016',
      gpa: '3.7',
      honors: ['Dean\'s List', 'Tau Beta Pi Engineering Honor Society'],
      relevantCoursework: [
        'Distributed Systems',
        'Database Systems',
        'Computer Networks',
        'Operating Systems',
      ],
    },
  ],

  aspirations: {
    shortTerm: [
      'Seeking principal engineering role focused on distributed systems and infrastructure',
      'Open to FAANG and high-growth startups',
    ],
    longTerm: 'Build expertise in large-scale distributed systems, eventually leading platform engineering teams',
    values: [
      'Technical excellence',
      'Continuous learning',
      'Mentoring others',
      'Building scalable systems',
    ],
  },

  brand: {
    targetAudience: 'Senior/principal engineering roles at tech companies',
    keywords: [
      'distributed systems',
      'microservices',
      'golang',
      'kubernetes',
      'scalability',
      'backend engineering',
    ],
    tone: 'Technical but approachable, focused on impact and metrics',
    colors: ['#2563eb', '#1e40af'], // Professional blue
  },
};

/**
 * Sample PositioningStrategy from competitive-cartographer
 */
export const samplePositioningStrategy: PositioningStrategy = {
  positioning: {
    headline: 'Architect-Leader Bridging Technical Depth with Business Impact',
    differentiators: [
      'Rare combination of deep distributed systems expertise with proven team leadership',
      'Track record of 40%+ performance improvements in production systems',
      'Strong focus on observable, maintainable systems (not just "move fast and break things")',
      'Effective technical communicator who can explain complex systems to non-technical stakeholders',
    ],
    messaging: 'Senior backend engineer who builds scalable systems that ship fast and last. Proven track record improving performance by 40%+ while mentoring teams to excellence.',
  },

  visualStrategy: {
    aestheticDirection: 'Professional minimalist with subtle technical credibility signals',
    avoid: [
      'Overly creative/colorful designs',
      'Too casual or startup-bro aesthetic',
      'Generic corporate templates',
    ],
    embrace: [
      'Clean typography',
      'Data visualization when showing impact',
      'GitHub contribution graph',
      'Subtle technical details (but not overwhelming)',
    ],
  },

  contentStrategy: {
    topics: [
      'Distributed systems architecture',
      'Performance optimization case studies',
      'Team mentoring and growth',
      'Production reliability',
    ],
    tone: 'Technical authority with humility - show expertise without arrogance',
    depth: 'Specific metrics and concrete examples, not buzzwords',
  },
};
