# CV Creator

Transform career narratives into **ATS-optimized PDF resumes** and **beautiful portfolio websites**.

![CV Creator](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)

## 🎯 What It Does

CV Creator generates two powerful outputs from structured career data:

1. **PDF Resume** - ATS-optimized, clean, professional (1-2 pages)
2. **Portfolio Website** - Modern, responsive, deploy-ready

### Key Features

✅ **ATS Optimization** - Scores 85+ on applicant tracking systems
✅ **Multi-Format** - PDF resume + HTML portfolio website
✅ **Strategic Positioning** - Applies competitive differentiation insights
✅ **Metrics-Driven** - Automatic validation and recommendations
✅ **Deploy-Ready** - One-click deployment to Netlify/Vercel/GitHub Pages

---

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Generate Example

```bash
npm run example
```

This generates:
- `output/alex-chen-resume.pdf` - ATS-optimized PDF resume
- `output/portfolio/index.html` - Portfolio website
- `output/ats-analysis.md` - ATS validation report

### Preview

```bash
# Open the portfolio in your browser
open output/portfolio/index.html

# Or on Linux
xdg-open output/portfolio/index.html
```

---

## 📖 Usage

### Basic Usage

```typescript
import { CVCreator } from './src';
import { CareerProfile, PositioningStrategy } from './src/types';

// 1. Prepare career data (from career-biographer)
const careerProfile: CareerProfile = {
  name: 'John Doe',
  email: 'john@example.com',
  // ... (see types/index.ts for full schema)
};

// 2. Optionally add strategic positioning (from competitive-cartographer)
const positioningStrategy: PositioningStrategy = {
  positioning: {
    headline: 'Full-Stack Engineer Specializing in Performance Optimization',
    differentiators: ['...'],
    messaging: '...',
  },
  // ... (see types/index.ts for full schema)
};

// 3. Generate
const cvCreator = new CVCreator();
const result = await cvCreator.generate(
  careerProfile,
  positioningStrategy,
  {
    outputDir: './output',
    pdf: {
      filename: 'john-doe-resume.pdf',
      format: 'A4',
    },
    portfolio: {
      dirname: 'portfolio',
    },
  }
);

// 4. Check results
console.log('PDF:', result.pdfPath);
console.log('Portfolio:', result.portfolioDir);
console.log('ATS Score:', result.atsValidation.score);
```

### With Career Biographer + Competitive Cartographer

```typescript
// This is the recommended workflow:
// 1. Use career-biographer to collect structured career data
// 2. Use competitive-cartographer to generate positioning strategy
// 3. Use cv-creator to generate resume + portfolio

import { CVCreator } from './src';

// Assume you have these from previous steps
const careerProfile = await careerBiographer.interview(user);
const positioningStrategy = await competitiveCartographer.analyze(careerProfile);

// Generate optimized outputs
const cvCreator = new CVCreator();
const result = await cvCreator.generate(careerProfile, positioningStrategy);
```

---

## 📊 ATS Optimization

CV Creator validates resumes for ATS compatibility and provides a score (0-100).

### Scoring Algorithm

| Category | Weight | Criteria |
|----------|--------|----------|
| **Formatting** | 30 pts | Single-column, standard fonts, no images |
| **Structure** | 20 pts | Standard headers, consistent dates |
| **Content** | 30 pts | Summary length, skills count, metrics in bullets |
| **Keywords** | 20 pts | Keyword coverage (if job description provided) |

### Passing Score

- **85+** = ✅ Ready to submit
- **70-84** = ⚠️ Needs improvements
- **<70** = ❌ Significant issues

### Example ATS Report

```markdown
# ATS Validation Report

**Score:** 91/100 ✅ PASS

## Checks
- Single-column layout: ✅
- Standard fonts: ✅
- No images/graphics: ✅
- Standard headers: ✅
- Date format consistent: ✅

## Recommendations
💡 Resume passes ATS validation! Ready to submit.
```

---

## 🌐 Portfolio Website

### Features

- **Responsive Design** - Looks great on mobile, tablet, desktop
- **Modern UI** - Clean, professional, with smooth animations
- **Deploy-Ready** - No build step required, works anywhere
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Fast Loading** - Optimized HTML/CSS, minimal JavaScript

### Sections

1. **Hero** - Name, headline, CTA buttons, social links
2. **About** - Professional summary, differentiators
3. **Experience** - Timeline view of career history
4. **Projects** - Showcase portfolio projects
5. **Skills** - Visual skill matrix with proficiency levels
6. **Contact** - Email, social links, availability status

### Deployment

The portfolio is a single HTML file with embedded CSS/JS. Deploy anywhere:

**Netlify (Easiest):**
```bash
# Drag and drop portfolio folder to netlify.com
# Or use CLI:
cd output/portfolio
netlify deploy --prod
```

**Vercel:**
```bash
cd output/portfolio
vercel --prod
```

**GitHub Pages:**
```bash
cd output/portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

See `DEPLOYMENT_GUIDE.md` in the portfolio folder for detailed instructions.

---

## 📁 Project Structure

```
cv-creator-implementation/
├── src/
│   ├── types/
│   │   └── index.ts              # TypeScript type definitions
│   ├── utils/
│   │   └── transformers.ts       # Data transformation logic
│   ├── generators/
│   │   ├── pdf-generator.ts      # PDF generation with Puppeteer
│   │   └── portfolio-generator.ts # Portfolio HTML generation
│   ├── templates/
│   │   ├── resume.html           # Resume template (Handlebars)
│   │   └── portfolio.html        # Portfolio template (Handlebars)
│   └── index.ts                  # Main CV Creator orchestrator
├── examples/
│   ├── sample-data.ts            # Sample career profile & strategy
│   └── generate-sample.ts        # Example usage script
├── tests/                        # Unit tests (future)
├── output/                       # Generated files
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔧 Development

### Build

```bash
npm run build
```

### Run Example

```bash
npm run example
```

### Development Mode

```bash
npm run dev
```

### Tests (Coming Soon)

```bash
npm test
```

---

## 📋 Input Schemas

### CareerProfile (from career-biographer)

```typescript
interface CareerProfile {
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
  aspirations: { shortTerm: string[]; longTerm: string; values: string[] };

  // Personal brand
  brand: { targetAudience: string; keywords: string[]; tone: string };
}
```

See [`src/types/index.ts`](src/types/index.ts) for complete schemas.

### PositioningStrategy (from competitive-cartographer)

```typescript
interface PositioningStrategy {
  positioning: {
    headline: string;
    differentiators: string[];
    messaging: string;
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
```

---

## 🎨 Customization

### PDF Resume Template

Edit `src/templates/resume.html` to customize:
- Typography (fonts, sizes)
- Spacing (margins, padding)
- Section order
- Colors (headers, accents)

### Portfolio Website

Edit `src/templates/portfolio.html` to customize:
- Color scheme (CSS variables in `:root`)
- Layout (sections, grid)
- Animations
- Navigation

### CSS Variables (Portfolio)

```css
:root {
  --primary-color: #2563eb;    /* Main accent color */
  --secondary-color: #1e40af;  /* Secondary accent */
  --text-dark: #1f2937;         /* Body text */
  --text-light: #6b7280;        /* Subtle text */
  --bg-light: #f9fafb;          /* Section backgrounds */
  --border-color: #e5e7eb;      /* Borders */
}
```

---

## 🤝 Integration with Other Skills

CV Creator is designed to work with:

### 1. career-biographer
Collects structured career data through empathetic interview process.

```typescript
const careerProfile = await careerBiographer.interview(user);
const result = await cvCreator.generate(careerProfile);
```

### 2. competitive-cartographer
Analyzes competitive landscape and generates positioning strategy.

```typescript
const strategy = await competitiveCartographer.analyze(careerProfile);
const result = await cvCreator.generate(careerProfile, strategy);
```

### Three-Skill Workflow

```
User Request
    ↓
career-biographer (30 min) → CareerProfile JSON
    ↓
competitive-cartographer (10 min) → PositioningStrategy JSON
    ↓
cv-creator (5 min) → PDF Resume + Portfolio Website
    ↓
Output: Ready to apply!
```

---

## 📝 Best Practices

### Resume Content

**Professional Summary:**
- 2-4 lines (200-400 characters)
- Include: seniority, technical focus, key achievement, goal
- Use metrics when possible

**Experience Bullets:**
- Formula: `[Action Verb] + [What] + [How/Why] + [Metric]`
- One bullet = one line (max 2 lines)
- 5-10 bullets for recent roles, 3-5 for older roles

**Skills Section:**
- 15-20 specific technical skills
- Use exact terminology from job descriptions
- Group by category if helpful

**Education:**
- Degree, Institution, Year
- GPA only if recent (<5 years) and strong (>3.5)
- No coursework unless entry-level

### Portfolio Content

**Projects:**
- Showcase 3-6 best projects
- Include screenshots if possible
- Highlight impact with metrics
- Link to GitHub/live demos

**About Section:**
- Be authentic and specific
- Highlight what makes you unique
- Avoid generic buzzwords

---

## 🐛 Troubleshooting

### PDF Generation Issues

**Problem:** PDF not generating
**Solution:** Ensure Puppeteer dependencies are installed:
```bash
npm install puppeteer
# Puppeteer will auto-download Chromium
```

**Problem:** PDF has missing fonts
**Solution:** Our template uses web-safe fonts (Calibri, Arial). If custom fonts needed, install on system or embed in HTML.

### Portfolio Not Rendering

**Problem:** Portfolio HTML not displaying correctly
**Solution:** Open browser console (F12) and check for errors. Ensure you're opening `index.html` directly or serving via local server.

### ATS Score Low

**Problem:** ATS score below 85
**Solution:** Check `ats-analysis.md` for specific recommendations. Common issues:
- Summary too short/long
- Missing metrics in bullets
- Too few/many skills

---

## 🚧 Roadmap

### v1.1 (Coming Soon)
- [ ] Job description keyword optimization
- [ ] Multiple resume templates (Traditional, Creative, Academic)
- [ ] DOCX export
- [ ] Contact form integration for portfolio

### v2.0 (Future)
- [ ] AI-powered bullet point generation
- [ ] A/B testing for resume variants
- [ ] LinkedIn data import
- [ ] GitHub stats integration
- [ ] Video resume generation

---

## 📜 License

MIT License - see LICENSE file for details.

---

## 🙏 Acknowledgments

Built as part of the Claude Skills ecosystem:
- **career-biographer** - Empathetic career data collection
- **competitive-cartographer** - Strategic positioning analysis

Inspired by:
- [JSON Resume](https://jsonresume.org/) - Resume schema standard
- [Reactive Resume](https://github.com/AmruthPillai/Reactive-Resume) - Open-source resume builder

---

## 📞 Support

Questions? Issues? Suggestions?

- GitHub Issues: [Report a bug](https://github.com/your-repo/cv-creator/issues)
- Documentation: See `/docs` folder for detailed guides
- Examples: See `/examples` folder for usage examples

---

**Made with ❤️ for job seekers everywhere**

*Stand out from the crowd with ATS-optimized resumes and stunning portfolios.*
