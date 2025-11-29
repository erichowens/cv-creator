import { CareerProfile, PositioningStrategy } from '../src/types';

/**
 * Erich Owens - Career Profile
 * Generated: 2025-11-25
 *
 * Mathematical problem-solver with 12 years at Meta (IC Staff → managing 40 engineers)
 * who ships ML/CV/VR systems that last. Open to Senior IC or Leadership roles building
 * exciting AI products.
 */

export const erichOwensCareerProfile: CareerProfile = {
  name: "Erich Owens",
  email: "erich.owens@gmail.com",
  phone: "+1-989-992-8286",
  location: "Portland, OR",
  headline: "Engineering Leader | ML/CV/VR/AR | 12 Patents | Applied Mathematician",
  summary: "Mathematical and creative problem solver open to Senior IC or Leadership roles building transformative AI products at startups or big tech.",
  linkedin: "https://www.linkedin.com/in/erich-owens-01a38446/",
  github: "https://github.com/erichowens",
  website: "https://erichowens.github.io/some_claude_skills/",

  timelineEvents: [
    // Current Role
    {
      date: "2025-09",
      endDate: "Present",
      type: "role_change",
      title: "CTO",
      company: "Dolphin AI",
      description: "Modernizing drone vision software for customer and insurer property understanding and protection needs",
      impact: "Building AI/CV systems for geospatial intelligence, roof damage assessment, and property analytics",
      tags: ["leadership", "drones", "computer-vision", "AI", "startup"]
    },
    {
      date: "2025-09",
      type: "milestone",
      title: "Independent Projects: Claude Skills Collection, AI Workflow Tooling, Photo Curation Apps",
      company: "Independent",
      description: "Created 39 production-ready Claude Skills at someclaudeskills.com; building stealth AI workflow tooling and photo curation apps with CV/ML; speech pathology AI, HRV biometrics, Jungian psychology chatbots",
      impact: "Open-sourced skill collection helping developers ship faster with AI agents; exploring new AI product categories",
      tags: ["AI", "open-source", "developer-tools", "LLMs", "computer-vision", "photo-curation"]
    },

    // Meta (12 years, multiple roles)
    {
      date: "2023-08",
      endDate: "2025-09",
      type: "role_change",
      title: "Staff Engineer > TLM > Engineering Manager - Facebook AI Editing",
      company: "Meta",
      description: "Managed mobile and ML engineers integrating computer vision and LLMs into composer and creation tools; led research and development for photo understanding, event detection, and collage creation",
      impact: "Shipped AI-powered editing features to billions of users across Facebook mobile apps",
      tags: ["engineering-management", "ML", "computer-vision", "LLMs", "mobile", "photo-understanding"]
    },
    {
      date: "2022-06",
      endDate: "2023-07",
      type: "role_change",
      title: "Engineering Manager - Avatars Craft",
      company: "Meta",
      description: "Led avatar customization, asset pipeline, and ML integration; managed 40+ engineers across the org including engineering managers; built tooling to let artists and PMs understand ML decisions",
      impact: "Scaled avatar systems across Meta's VR ecosystem; shipped ML-powered generation with human-in-the-loop visualization tools",
      tags: ["engineering-management", "3D-graphics", "ML", "VR", "tooling", "visualization"]
    },
    {
      date: "2022-01",
      type: "award",
      title: "GPT-3 and CLIP Avatar Generation from Description (Fourth Hackathon Win)",
      company: "Meta",
      description: "Built prototype generating avatars from text descriptions using GPT-3 and CLIP",
      impact: "Demonstrated feasibility of text-to-avatar generation, influencing product roadmap",
      tags: ["hackathon", "GPT-3", "CLIP", "avatars", "generative-AI"]
    },
    {
      date: "2016-11",
      type: "award",
      title: "Thermal Haptics for VR Controllers (Third Hackathon Win)",
      company: "Meta",
      description: "Built peltier-cooled VR controllers providing hot/cold sensations for immersive VR ('fire and ice in VR')",
      impact: "Hackathon win; filed patent; demonstrated novel haptic modality; led to Building 8 research",
      tags: ["hackathon", "VR", "haptics", "hardware", "patent"]
    },
    {
      date: "2020-06",
      endDate: "2022-06",
      type: "role_change",
      title: "Staff Engineer > TLM > Engineering Manager - XR Tech",
      company: "Meta",
      description: "Built computer vision and ML for Facebook face tech including mobile AR face tracker, FACS expression tracking, and audio-based lipsync",
      impact: "Shipped production face tracking to Instagram AR effects used by millions daily",
      tags: ["computer-vision", "ML", "AR", "face-tracking", "mobile"]
    },
    {
      date: "2019-08",
      endDate: "2020-05",
      type: "role_change",
      title: "Staff Engineer - Instagram AR",
      company: "Meta",
      description: "Led effect curation and personalized ranking; hired art curators; built tools for surfacing avant-garde Spark effects",
      impact: "Improved discovery of high-quality AR effects, increasing engagement and creator retention",
      tags: ["staff-engineer", "ranking", "AR", "curation", "Instagram"]
    },
    {
      date: "2018-11",
      endDate: "2019-08",
      type: "role_change",
      title: "Engineering Manager - FAIR (Facebook AI Research)",
      company: "Meta",
      description: "Managed AI engineers on embodied agents, MRI compressed sensing, AlphaZero open-source; contributed to fastMRI website/dataset release and competition kick-off",
      impact: "Supported open-source AI research including fastMRI dataset release with NYU Langone",
      tags: ["engineering-management", "AI-research", "medical-AI", "open-source"]
    },
    {
      date: "2016-12",
      endDate: "2018-11",
      type: "role_change",
      title: "Founding Engineer - Facebook Spaces & Social VR",
      company: "Meta",
      description: "Built 'avatar from photo' system in 2 months for Facebook's first social VR app; hired ex-Pixar talent for parametric avatars",
      impact: "Shipped company's best-reviewed avatars (FastCompany coverage); launched Facebook Spaces to public",
      tags: ["founding-engineer", "VR", "3D-graphics", "avatars", "computer-vision"]
    },
    {
      date: "2016-11",
      endDate: "2016-11",
      type: "role_change",
      title: "Engineer - Building 8 (Hackamonth)",
      company: "Meta",
      description: "LIDAR-based social VR room scans; thermal haptics research; peltier-cooled VR controllers",
      impact: "Demonstrated novel haptic feedback modality; filed patent on thermal haptics",
      tags: ["VR", "LIDAR", "haptics", "research", "hackathon"]
    },
    {
      date: "2016-01",
      endDate: "2016-10",
      type: "role_change",
      title: "Computer Vision Software Engineer - Oculus Vision",
      company: "Meta (Oculus)",
      description: "Built VR simulations for VR designers pre-hand-controller launch",
      impact: "Used VR to design VR experiences, accelerating product development cycles",
      tags: ["VR", "tooling", "Oculus", "product-development"]
    },
    {
      date: "2015-01",
      endDate: "2015-12",
      type: "role_change",
      title: "Tech Lead - Comment Ranking",
      company: "Meta (Facebook)",
      description: "Overhauled comment ranking for quality and civility; semantic similarity, Thompson sampling; co-authored PNLambda config language; authored Commentology tool",
      impact: "Commentology tool still used company-wide a decade later; significantly improved comment quality",
      tags: ["tech-lead", "ML", "ranking", "NLP", "tooling"]
    },
    {
      date: "2015-01",
      type: "award",
      title: "Meme Development Tracking Across FB/IG (Second Hackathon Win)",
      company: "Meta",
      description: "Built system tracking how memes spread and evolve across Facebook and Instagram",
      impact: "Filed patent on viral content propagation analysis",
      tags: ["hackathon", "computer-vision", "social-networks", "patent"]
    },
    {
      date: "2014-01",
      type: "award",
      title: "First CV-Based Newsfeed Filter (First Hackathon Win)",
      company: "Meta",
      description: "Built first computer vision filter for Facebook news feed—users could filter content by visual category",
      impact: "Pioneered CV-based personalization in newsfeed; filed patent",
      tags: ["hackathon", "computer-vision", "ML", "ranking", "patent"]
    },
    {
      date: "2013-06",
      endDate: "2014-12",
      type: "role_change",
      title: "Software Engineer - News Feed Ranking",
      company: "Meta (Facebook)",
      description: "Built first CV-based filter for Facebook news feed (hackathon win/patent); created JS visualization + Presto SQL tooling for experimentation",
      impact: "Pioneered computer vision in newsfeed ranking; filed patent; improved user experience",
      tags: ["engineer", "ML", "ranking", "computer-vision", "patent", "hackathon"]
    },

    // Pre-Meta
    {
      date: "2012-05",
      endDate: "2013-05",
      type: "role_change",
      title: "ML Engineer (First Hire)",
      company: "Newsle",
      description: "Entity disambiguation, industry/subject prediction, news clustering, recommendation system",
      impact: "Linked 500k users by semantic content; enabled personalized news discovery",
      tags: ["ML", "NLP", "recommendation", "startup"]
    },
    {
      date: "2011-09",
      endDate: "2012-05",
      type: "role_change",
      title: "Quantitative Analyst > Software Engineer",
      company: "Quid",
      description: "Network visualizations of company interrelationships, text mining, unsupervised learning for cluster analysis",
      impact: "Built visualization tools for understanding company ecosystems",
      tags: ["ML", "visualization", "NLP", "data-science"]
    },
    {
      date: "2011-06",
      endDate: "2011-08",
      type: "role_change",
      title: "Adjunct Instructor",
      company: "Rhode Island College",
      description: "Taught AP Calculus to highly-motivated secondary students",
      impact: "Shared mathematical foundations with next generation",
      tags: ["teaching", "mathematics"]
    },
    {
      date: "2010-06",
      type: "role_change",
      title: "Researcher",
      company: "Pierre and Marie Curie University (Paris VI)",
      description: "Stochastic and partial differential equations research",
      impact: "Contributed to mathematical research in probability theory",
      tags: ["research", "mathematics", "probability"]
    },
    {
      date: "2008-06",
      endDate: "2008-08",
      type: "role_change",
      title: "Space Grant Intern",
      company: "NASA JPL",
      description: "Systems engineering on Project Constellation",
      impact: "Contributed to NASA's next-generation spacecraft program",
      tags: ["aerospace", "systems-engineering", "NASA"]
    },
    {
      date: "2006-06",
      endDate: "2006-08",
      type: "role_change",
      title: "Laboratory Intern",
      company: "SLAC National Accelerator Laboratory",
      description: "X-ray crystallography of Nitinol (nickel-titanium shape memory alloy) under sustained strain; developed algorithmic inference of crystallographic patterns from powder diffraction data",
      impact: "Published and presented paper on algorithmic inference of x-ray crystallographic patterns of Nitinol under sustained strain",
      tags: ["research", "materials-science", "medical", "nitinol", "crystallography", "publication"]
    },

    // Education
    {
      date: "2011-05",
      type: "milestone",
      title: "MS Applied Mathematics",
      company: "Brown University",
      description: "Research at University of Paris VI; TA for dynamics, analysis, cryptography, differential geometry",
      impact: "Deep foundations in probability, cryptography, nonlinear dynamics, mathematical neuroscience",
      tags: ["education", "mathematics", "research"]
    },
    {
      date: "2009-05",
      type: "milestone",
      title: "BS Applied Mathematics",
      company: "Columbia University",
      description: "Editor, Columbia Undergraduate Science Journal",
      impact: "Strong mathematical and scientific foundations",
      tags: ["education", "mathematics", "science"]
    },
    {
      date: "2007-12",
      type: "milestone",
      title: "Budapest Semesters in Mathematics",
      company: "Budapest Semesters in Mathematics",
      description: "Intensive mathematics program: Combinatorics, Analysis, Set Theory",
      impact: "Advanced mathematical training",
      tags: ["education", "mathematics"]
    },
    {
      date: "2007-05",
      type: "milestone",
      title: "BA Mathematics & Physics",
      company: "Albion College",
      description: "Bachelor of Arts in Mathematics and Physics",
      impact: "Foundation in mathematical and physical sciences",
      tags: ["education", "mathematics", "physics"]
    },

    // Patents (12 granted US/EU patents from LinkedIn)
    {
      date: "2020-04",
      type: "patent",
      title: "Systems and Methods for Ranking Comments",
      company: "Meta",
      patentNumber: "US 10,630,632 B2",
      inventors: ["Erich James Owens"],
      issueDate: "2020-04-21",
      description: "Comprehensive comment ranking framework using multiple signals including engagement, relevance, and quality metrics to optimize comment thread organization and user experience",
      impact: "Master system for deciding which comments you see first on any post",
      tags: ["patent", "ML", "ranking", "NLP", "comments"]
    },
    {
      date: "2020-04",
      type: "patent",
      title: "Systems and Methods for Generating Content",
      company: "Meta",
      patentNumber: "US 10,621,417 B2",
      inventors: ["Erich James Owens"],
      issueDate: "2020-04-14",
      description: "Building users an avatar of themselves to use in VR, all from their tagged photos on their Facebook profile",
      impact: "Core technology enabling Facebook Spaces avatar creation from photos",
      tags: ["patent", "VR", "computer-vision", "avatars", "3D"]
    },
    {
      date: "2020-01",
      type: "patent",
      title: "Ranking and Filtering Comments Based on Audience",
      company: "Meta",
      patentNumber: "US 10,545,969 B2",
      issueDate: "2020-01-28",
      description: "Methods for personalizing comment visibility and ranking based on audience characteristics, social connections, and user preferences to enhance relevant content discovery",
      impact: "Shows you comments that matter to you based on your friends and interests",
      tags: ["patent", "ML", "ranking", "personalization", "comments"]
    },
    {
      date: "2019-09",
      type: "patent",
      title: "Systems and Methods for Ranking Comments Based on Interaction-to-Impression Ratio",
      company: "Meta",
      patentNumber: "US 10,419,383 B2",
      inventors: ["Erich James Owens"],
      issueDate: "2019-09-17",
      description: "Advanced comment ranking algorithm using relevance signals as well as interaction-to-impression ratios to identify high-engagement comments and optimize comment visibility in social media discussions",
      impact: "Finds comments that punch above their weight—those that get lots of engagement relative to views",
      tags: ["patent", "ML", "ranking", "engagement", "comments"]
    },
    {
      date: "2019-06",
      type: "patent",
      title: "Content Quality Evaluation and Classification",
      company: "Meta",
      patentNumber: "US 10,311,525 B1",
      inventors: ["Erich James Owens"],
      issueDate: "2019-06-04",
      description: "Machine learning systems for automatically evaluating and classifying content quality across social media platforms to identify and filter low-quality or problematic content",
      impact: "AI that figures out if a Facebook post is good or garbage automatically",
      tags: ["patent", "ML", "ranking", "content-quality", "classification"]
    },
    {
      date: "2019-05",
      type: "patent",
      title: "Providing Temperature Sensation to a User Based on Content Presented to the User",
      company: "Meta",
      patentNumber: "US 10,290,190 B2",
      inventors: ["Erich James Owens"],
      issueDate: "2019-05-14",
      description: "Haptic feedback system that provides temperature sensations through VR/AR controllers to enhance immersive experiences by correlating thermal feedback with virtual content",
      impact: "VR controller that gets hot or cold to match what you're experiencing in virtual reality",
      tags: ["patent", "VR", "haptics", "hardware", "thermal"]
    },
    {
      date: "2019-02",
      type: "patent",
      title: "Ranking and Filtering Comments Based on Author and Content",
      company: "Meta",
      patentNumber: "US 10,216,803 B2",
      issueDate: "2019-02-26",
      description: "Systems for ranking and filtering social media comments based on characteristics of comment authors and content quality to optimize user engagement and reduce low-quality content visibility",
      impact: "Helps Facebook show you better comments by looking at who wrote them and what they said",
      tags: ["patent", "ML", "ranking", "content-quality", "comments"]
    },
    {
      date: "2019-02",
      type: "patent",
      title: "Providing Temperature Sensation to a User Based on Content Presented to the User",
      company: "Meta",
      patentNumber: "EP 3,438,791 A1",
      issueDate: "2019-02-06",
      description: "European patent for haptic thermal feedback technology in VR/AR applications, synchronizing temperature sensations with virtual content for enhanced immersion",
      impact: "European version of the hot/cold VR controller patent",
      tags: ["patent", "VR", "haptics", "hardware", "thermal", "EU"]
    },
    {
      date: "2018-12",
      type: "patent",
      title: "Viral Content Propagation Analyzer in a Social Networking System",
      company: "Meta",
      patentNumber: "US 10,152,544 B1",
      issueDate: "2018-12-11",
      description: "Social graph analysis system for detecting, tracking, and analyzing viral content propagation patterns to identify trending topics and predict content spread across social networks",
      impact: "Tracks how things go viral on Facebook and predicts what's about to blow up",
      tags: ["patent", "social-networks", "viral", "analytics", "prediction"]
    },
    {
      date: "2018-08",
      type: "patent",
      title: "Determining Temporal Relevance of Newsfeed Stories",
      company: "Meta",
      patentNumber: "US 10,063,513 B2",
      inventors: ["Erich James Owens"],
      issueDate: "2018-08-28",
      description: "Dynamic newsfeed algorithm that computes engagement ratios to identify and filter stale content, measuring story freshness based on ongoing user interaction rather than static time decay",
      impact: "Keeps old boring posts out of your newsfeed by tracking if people still care about them",
      tags: ["patent", "ML", "ranking", "newsfeed", "freshness"]
    },
    {
      date: "2018-08",
      type: "patent",
      title: "Ranking and Filtering Comments Based on Impression Calculations",
      company: "Meta",
      patentNumber: "US 10,057,199 B2",
      issueDate: "2018-08-21",
      description: "Algorithms for ranking comments using impression data and engagement metrics to surface high-quality, relevant discussions while minimizing spam and low-value content",
      impact: "Promotes comments people actually read and engage with, buries the junk",
      tags: ["patent", "ML", "ranking", "comments", "impressions"]
    },
    {
      date: "2016-11",
      type: "patent",
      title: "Systems and Methods for Tuning Content Provision Based on User Preference",
      company: "Meta",
      patentNumber: "US 2016/0328480 A1",
      issueDate: "2016-11-10",
      description: "Personalization engine that dynamically adjusts content delivery based on explicit and implicit user preferences to optimize feed relevance and user satisfaction",
      impact: "Learns what you like and adjusts your feed accordingly—born from 'hide baby photos' hackathon win in 2013",
      tags: ["patent", "ML", "personalization", "newsfeed", "hackathon"]
    },
  ],

  skills: [
    // Technical Skills - ML/AI
    { category: "technical", name: "Machine Learning", proficiency: 95, yearsOfExperience: 13 },
    { category: "technical", name: "Computer Vision", proficiency: 95, yearsOfExperience: 12 },
    { category: "technical", name: "Natural Language Processing", proficiency: 90, yearsOfExperience: 13 },
    { category: "technical", name: "PyTorch", proficiency: 90, yearsOfExperience: 8 },
    { category: "technical", name: "TensorFlow", proficiency: 80, yearsOfExperience: 9 },
    { category: "technical", name: "CLIP", proficiency: 85, yearsOfExperience: 3 },
    { category: "technical", name: "GPT-3/LLMs", proficiency: 85, yearsOfExperience: 3 },
    { category: "technical", name: "Stable Diffusion", proficiency: 75, yearsOfExperience: 2 },

    // Technical Skills - VR/AR
    { category: "technical", name: "VR/AR Development", proficiency: 95, yearsOfExperience: 9 },
    { category: "technical", name: "3D Graphics", proficiency: 85, yearsOfExperience: 9 },
    { category: "technical", name: "Face Tracking", proficiency: 95, yearsOfExperience: 7 },
    { category: "technical", name: "Unity", proficiency: 80, yearsOfExperience: 8 },
    { category: "technical", name: "Avatar Systems", proficiency: 95, yearsOfExperience: 8 },
    { category: "technical", name: "Spatial Computing", proficiency: 85, yearsOfExperience: 9 },

    // Technical Skills - Engineering
    { category: "technical", name: "Python", proficiency: 95, yearsOfExperience: 15 },
    { category: "technical", name: "TypeScript/JavaScript", proficiency: 85, yearsOfExperience: 8 },
    { category: "technical", name: "C++", proficiency: 75, yearsOfExperience: 10 },
    { category: "technical", name: "C#", proficiency: 70, yearsOfExperience: 8 },
    { category: "technical", name: "PHP/Hack", proficiency: 60, yearsOfExperience: 12 },
    { category: "technical", name: "Rust", proficiency: 50, yearsOfExperience: 2 },
    { category: "technical", name: "System Design", proficiency: 90, yearsOfExperience: 12 },
    { category: "technical", name: "Ranking Systems", proficiency: 95, yearsOfExperience: 11 },
    { category: "technical", name: "Recommendation Systems", proficiency: 90, yearsOfExperience: 11 },

    // Leadership Skills
    { category: "leadership", name: "Engineering Management", proficiency: 90, yearsOfExperience: 7 },
    { category: "leadership", name: "Technical Leadership", proficiency: 95, yearsOfExperience: 10 },
    { category: "leadership", name: "Team Building", proficiency: 90, yearsOfExperience: 7 },
    { category: "leadership", name: "Hiring & Interviewing", proficiency: 90, yearsOfExperience: 10 },
    { category: "leadership", name: "Cross-functional Collaboration", proficiency: 95, yearsOfExperience: 12 },
    { category: "leadership", name: "Product Strategy", proficiency: 85, yearsOfExperience: 10 },

    // Domain Expertise
    { category: "domain", name: "Applied Mathematics", proficiency: 95, yearsOfExperience: 18 },
    { category: "domain", name: "Probability Theory", proficiency: 90, yearsOfExperience: 15 },
    { category: "domain", name: "Nonlinear Dynamics", proficiency: 85, yearsOfExperience: 14 },
    { category: "domain", name: "Medical AI", proficiency: 85, yearsOfExperience: 5 },
    { category: "domain", name: "Cryptography", proficiency: 80, yearsOfExperience: 14 },

    // Soft Skills
    { category: "soft", name: "Rapid Domain Mastery", proficiency: 95, yearsOfExperience: 15 },
    { category: "soft", name: "Prototyping & Shipping", proficiency: 95, yearsOfExperience: 15 },
    { category: "soft", name: "Creative Problem Solving", proficiency: 95, yearsOfExperience: 15 },
    { category: "soft", name: "Mentorship", proficiency: 90, yearsOfExperience: 10 }
  ],

  education: [
    {
      degree: "MS Applied Mathematics",
      institution: "Brown University",
      year: "2011",
      details: "Research at University of Paris VI. TA for dynamics, analysis, cryptography, differential geometry. Focus: Probability theory, nonlinear dynamics, mathematical neuroscience."
    },
    {
      degree: "BS Applied Mathematics",
      institution: "Columbia University",
      year: "2009",
      details: "Editor, Columbia Undergraduate Science Journal. Strong mathematical and scientific foundations."
    },
    {
      degree: "Budapest Semesters in Mathematics",
      institution: "Budapest Semesters in Mathematics",
      year: "2007",
      details: "Intensive mathematics program: Combinatorics, Analysis, Set Theory"
    },
    {
      degree: "BA Mathematics & Physics",
      institution: "Albion College",
      year: "2007",
      details: "Bachelor of Arts in Mathematics and Physics"
    }
  ],

  projects: [
    {
      name: "Claude Skills Collection (someclaudeskills.com)",
      role: "Creator",
      description: "Built 39 production-ready AI skills spanning ML, CV, audio, psychology, and developer tools",
      technologies: ["TypeScript", "LLMs", "Claude AI", "Open Source"],
      impact: "Open-sourced skill collection with interactive showcase website, helping developers ship faster",
      metrics: ["39 skills", "Open source", "Interactive website"],
      url: "https://someclaudeskills.com",
      github: "https://github.com/erichowens/some_claude_skills",
      screenshot: "https://storage.googleapis.com/firecrawl-scrape-media/screenshot-41736ee2-b91a-46e1-8163-37a44fc762bf.png"
    },
    {
      name: "Thermal Haptics for VR ('Fire and Ice')",
      role: "Hackathon Project → Building 8 Research",
      description: "Built peltier-cooled VR controllers providing hot/cold sensations for immersive VR. Won Judges' Choice Award at Facebook Hack 53 (2016). Hardware + Unity + Arduino.",
      technologies: ["VR", "Haptics", "Hardware", "C++", "Arduino", "Unity"],
      impact: "Hackathon win; filed patent on thermal haptics; demonstrated novel haptic modality; led to Building 8 research",
      metrics: ["Judges' Choice Award", "Patent filed", "Novel haptic feedback"],
      screenshot: "images/fire-and-ice-vr-hackathon.gif",
      patentUrl: "https://patents.google.com/patent/US10290190B2"
    },
    {
      name: "Facebook News Feed Ranking Quality",
      role: "Engineer",
      description: "Authored and shipped multiple News Feed FYI blog posts announcing ranking improvements to reduce hoaxes, improve story timeliness, and enhance content quality for billions of users",
      technologies: ["ML", "Ranking Systems", "Python", "A/B Testing", "Content Quality"],
      impact: "Improved News Feed experience for billions; reduced viral hoaxes; patented freshness algorithms",
      metrics: ["Billions of users impacted", "Multiple ranking patents", "Public blog announcements"],
      screenshot: "images/news-feed-quality.webp",
      url: "https://about.fb.com/news/2015/01/news-feed-fyi-showing-fewer-hoaxes/",
      additionalUrls: [
        "https://about.fb.com/news/2014/09/news-feed-fyi-showing-more-timely-stories-from-friends-and-pages/"
      ],
      patentUrl: "https://patents.google.com/patent/US10063513B2"
    },
    {
      name: "Comment Ranking System",
      role: "Tech Lead",
      description: "Overhauled Facebook's comment ranking for quality and civility using ML and semantic similarity",
      technologies: ["Python", "ML", "NLP", "Thompson Sampling", "PNLambda"],
      impact: "Commentology tool still used company-wide a decade later; improved comment quality across billions of comments daily",
      metrics: ["10+ years in production", "Billions of comments ranked daily", "Multiple patents filed"],
      patentUrl: "https://patents.google.com/patent/US10630632B2"
    },
    {
      name: "Facebook Spaces Avatar System",
      role: "Founding Engineer",
      description: "Built 'avatar from photo' system in 2 months for Facebook's first social VR app; hired ex-Pixar talent. Featured in FastCompany for delivering 'Facebook's best-reviewed avatars'",
      technologies: ["Computer Vision", "3D Graphics", "VR", "Python", "C++"],
      impact: "Shipped company's best-reviewed avatars; enabled Facebook's entry into social VR; spoke at STRV Silicon Valley Insights on the work",
      metrics: ["2 months to production", "FastCompany featured", "Patent filed"],
      screenshot: "images/facebook-spaces-avatar-upgrade.gif",
      url: "https://www.fastcompany.com/40552391/facebooks-vr-avatars-just-got-a-more-realistic-upgrade",
      patentUrl: "https://patents.google.com/patent/US10621417B2"
    },
    {
      name: "Avatar Team at Meta",
      role: "Engineering Manager",
      description: "Managed 40+ engineers across avatar pipeline, 3D geometry, technical art, and avatar ML. Won hackathon generating avatars from text descriptions using GPT-3 and CLIP.",
      technologies: ["ML", "3D Graphics", "GPT-3", "CLIP", "Stable Diffusion", "Unity"],
      impact: "Scaled avatar systems across Meta's VR ecosystem; shipped GPT-3/CLIP avatar generation",
      metrics: ["40+ engineers managed", "Hackathon win", "Production ML avatar generation"],
      screenshot: "images/facebook-avatars-demo.gif"
    },
    {
      name: "fastMRI Dataset Release",
      role: "Engineering Manager (FAIR)",
      description: "Contributed to fastMRI website, dataset release, and competition kick-off with NYU Langone",
      technologies: ["Deep Learning", "Medical Imaging", "PyTorch", "Research", "Open Source"],
      impact: "Supported open dataset release enabling medical AI research community",
      metrics: ["Open dataset release", "Competition launch", "NYU collaboration"],
      screenshot: "https://storage.googleapis.com/firecrawl-scrape-media/screenshot-191fafd4-2c53-4426-b698-4b221a915cf0.png"
    },
    {
      name: "AR Face Tracking",
      role: "Engineering Manager / Tech Lead Manager",
      description: "Built CV/ML for Facebook's mobile AR face tracker with FACS expression tracking and audio lipsync",
      technologies: ["Computer Vision", "ML", "Mobile", "Face Tracking", "FACS"],
      impact: "Shipped production face tracking to Instagram AR effects used by millions daily",
      metrics: ["Millions of daily users", "Production mobile deployment", "Real-time performance"]
    },
    {
      name: "First CV-Based Newsfeed Personalization",
      role: "Engineer",
      description: "Built first CV-based filter for Facebook news feed using computer vision for content understanding—born from 2013 hackathon win",
      technologies: ["Computer Vision", "ML", "Ranking", "Python"],
      impact: "Pioneered visual content understanding in newsfeed ranking; filed patent; improved UX",
      metrics: ["First CV in newsfeed", "Patent filed", "Hackathon win"],
      patentUrl: "https://patents.google.com/patent/US20160328480A1"
    }
  ],

  aspirations: {
    shortTerm: [
      "Build transformative AI products at high-growth companies",
      "Lead engineering teams (Senior IC or EM/Director level)",
      "Advise startups on AI/ML/VR strategy",
      "Continue open-source contributions"
    ],
    longTerm: "Lead AI/ML/VR engineering at a company solving important problems—whether as VP Engineering, CTO, or Founding Engineer. Build systems that last, ship products that delight, mentor engineers who grow.",
    values: [
      "Impact over vanity metrics",
      "Rapid prototyping and shipping",
      "Technical depth + creative taste",
      "Building without constraints",
      "Systems that endure"
    ]
  },

  brand: {
    targetAudience: "AI/ML engineering leaders at startups (seed-Series B) and big tech (Microsoft, Meta, Google) looking for IC Staff or EM/Director with proven ability to ship production ML/CV/VR systems and scale teams",
    keywords: [
      "ML/CV/VR",
      "Applied Mathematics",
      "Engineering Leadership",
      "Rapid Domain Mastery",
      "Production ML Systems",
      "Computer Vision",
      "VR/AR",
      "12 Patents",
      "Technical Depth",
      "Builder"
    ],
    tone: "Technical depth meets pragmatic shipping—mathematical foundations applied to real products that billions use",
    colors: ["#0066cc", "#2563eb"] // Professional blue
  }
};

/**
 * Positioning Strategy (optional - can be used by competitive-cartographer)
 */
export const erichOwensPositioning: PositioningStrategy = {
  positioning: {
    headline: "Architect & Tool Builder Who Makes Complex Systems Legible",
    differentiators: [
      "Every ML system comes with its visualization: I don't just build models—I build the tools that let humans understand what the model sees, debug its failures, and trust its decisions",
      "Systems that outlast their creators: Comment ranking algorithms still running 10+ years later at Meta scale; infrastructure that survives team turnover and strategy pivots",
      "Mathematician who speaks product: Applied math foundations let me jump domains (vision, VR, drones, medical AI) while tooling instincts ensure the work actually ships",
      "Leadership that oscillates: Staff Engineer, Tech Lead, or managing 100+ people across orgs—I go where the problem needs me, not where the ladder points",
      "12 patents, zero orphans: Every invention came with documentation, visualization, and a path to production",
      "Taste meets utility: Hired ex-Pixar talent, curated avant-garde AR effects, built thermal haptic controllers—because delight and function aren't opposites"
    ],
    messaging: "I build systems that last and tools that explain them. Most engineers choose: go deep technically or go broad into management. I oscillate based on what the problem needs. Most ML engineers throw models over the wall. I build the visualization and tooling stack that brings humans into the loop—so others can understand the problem and see how the solution works.",
    keyMetrics: [
      { value: "12", label: "Patents" },
      { value: "12", label: "Years at Meta" },
      { value: "100+", label: "People Managed" },
      { value: "1B+", label: "Users Reached" }
    ]
  },
  visualStrategy: {
    aestheticDirection: "Oxknit mod meets color blocking—1960s confidence, bold geometric divisions, textured warmth. Steve McQueen not Mark Zuckerberg.",
    avoid: ["cold corporate", "gradients", "soft edges", "LinkedIn energy", "too much ornamentation"],
    embrace: ["bold color blocks", "clean geometry", "confident negative space", "knit texture feel", "Mondrian/Bauhaus influence"]
  },
  contentStrategy: {
    topics: ["systems architecture", "ML tooling", "visualization", "human-in-the-loop AI", "engineering leadership", "drones", "VR/AR"],
    tone: "Friendly and precise—like explaining something complex to a smart friend. Technical depth without jargon walls. First person. Genuine enthusiasm for the craft.",
    depth: "Lead with the 'why' and the human impact. Support with concrete examples and metrics. Show the tools and visualizations that made the work understandable."
  }
};
