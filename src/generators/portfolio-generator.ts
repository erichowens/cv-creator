/**
 * Portfolio Website Generator
 * Generates static HTML/CSS/JS portfolio site
 */

import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';
import { PortfolioData, GenerationOptions } from '../types';

export class PortfolioGenerator {
  private templatePath: string;
  private template: HandlebarsTemplateDelegate;

  constructor() {
    this.templatePath = path.join(__dirname, '../templates/portfolio.html');
    const templateSource = fs.readFileSync(this.templatePath, 'utf-8');
    this.template = Handlebars.compile(templateSource);
  }

  /**
   * Generate portfolio website
   */
  async generatePortfolio(
    portfolioData: PortfolioData,
    options: GenerationOptions
  ): Promise<string> {
    // 1. Render HTML from template
    const html = this.template(portfolioData);

    // 2. Create portfolio directory
    const portfolioDir = path.join(options.outputDir, options.portfolio.dirname);

    if (!fs.existsSync(portfolioDir)) {
      fs.mkdirSync(portfolioDir, { recursive: true });
    }

    // 3. Write index.html
    const indexPath = path.join(portfolioDir, 'index.html');
    fs.writeFileSync(indexPath, html, 'utf-8');

    // 4. Create README with deployment instructions
    this.generateREADME(portfolioDir, portfolioData);

    // 5. Copy any assets (if provided)
    // Future: Handle screenshot copying

    return portfolioDir;
  }

  /**
   * Generate README with deployment instructions
   */
  private generateREADME(outputDir: string, portfolioData: PortfolioData): void {
    const readme = `# ${portfolioData.hero.name} - Portfolio Website

This is your professional portfolio website, ready to deploy!

## Quick Deploy

### Option 1: Netlify (Recommended - Easiest)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop this entire folder into Netlify
3. Done! Your site is live at \`your-name.netlify.app\`

**Custom Domain:**
- Go to Domain Settings
- Add your custom domain (e.g., \`yourname.com\`)
- Follow DNS instructions

### Option 2: Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Install Vercel CLI: \`npm install -g vercel\`
3. Run \`vercel\` in this directory
4. Follow prompts
5. Your site is live!

### Option 3: GitHub Pages

1. Create a new GitHub repository (e.g., \`username.github.io\`)
2. Push this folder to the repository:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   \`\`\`
3. Enable GitHub Pages in repo settings
4. Your site is live at \`https://username.github.io\`

### Option 4: Custom Server

Upload all files to your web hosting via FTP/SFTP.
Make sure \`index.html\` is in the root directory.

## Customization

The website is a single HTML file (\`index.html\`) with embedded CSS and JavaScript.

### Change Colors

Find the \`:root\` CSS variables in \`<style>\` tag:

\`\`\`css
:root {
  --primary-color: #2563eb;  /* Change this */
  --secondary-color: #1e40af; /* And this */
}
\`\`\`

### Add Analytics (Optional)

Add before closing \`</body>\` tag:

**Google Analytics:**
\`\`\`html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
\`\`\`

**Plausible (Privacy-friendly):**
\`\`\`html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
\`\`\`

### Add Contact Form

Replace the contact section with a form using:
- [Formspree](https://formspree.io/) - Free tier available
- [Netlify Forms](https://www.netlify.com/products/forms/) - If using Netlify
- [Web3Forms](https://web3forms.com/) - Free, no backend needed

## SEO Tips

1. **Add favicon:**
   - Create \`favicon.ico\` in this directory
   - Add to \`<head>\`: \`<link rel="icon" href="favicon.ico">\`

2. **Add og:image:**
   - Create a social share image (1200x630px)
   - Update meta tags in \`<head>\`

3. **Submit to Google:**
   - Add to [Google Search Console](https://search.google.com/search-console)
   - Submit sitemap

## Files

- \`index.html\` - Your complete portfolio website
- \`README.md\` - This file
- \`resume.pdf\` - Your resume (copy from parent directory)

## Support

Questions? Issues? Reach out:
- Email: ${portfolioData.contact.email}
${portfolioData.contact.github ? `- GitHub: ${portfolioData.contact.github}` : ''}

---

**Built with ❤️ using CV Creator**
`;

    fs.writeFileSync(
      path.join(outputDir, 'README.md'),
      readme,
      'utf-8'
    );
  }

  /**
   * Generate deployment guide for popular platforms
   */
  generateDeploymentGuide(outputDir: string): void {
    const guide = `# Deployment Guide

## Choosing a Platform

| Platform | Cost | Ease | Custom Domain | Best For |
|----------|------|------|---------------|----------|
| Netlify | Free | ⭐⭐⭐⭐⭐ | Yes | Beginners |
| Vercel | Free | ⭐⭐⭐⭐ | Yes | Developers |
| GitHub Pages | Free | ⭐⭐⭐ | Yes | Git users |
| Custom Server | Varies | ⭐⭐ | Yes | Full control |

## Step-by-Step: Netlify

### 1. Create Account
- Go to [netlify.com](https://netlify.com)
- Sign up (free)

### 2. Deploy
- Click "Add new site" → "Deploy manually"
- Drag and drop the portfolio folder
- Wait 30 seconds
- Done! Copy your URL

### 3. Custom Domain (Optional)
- Go to Site Settings → Domain Management
- Click "Add custom domain"
- Enter your domain (e.g., \`johndoe.com\`)
- Follow DNS instructions from your domain provider

**DNS Records (Example):**
\`\`\`
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
\`\`\`

### 4. HTTPS
- Netlify automatically provisions SSL
- Your site is secure at \`https://yourdomain.com\`

## Step-by-Step: Vercel

### 1. Install CLI
\`\`\`bash
npm install -g vercel
\`\`\`

### 2. Deploy
\`\`\`bash
cd portfolio
vercel
\`\`\`

### 3. Follow prompts
- Link to existing project? No
- What's your project name? my-portfolio
- In which directory is your code located? ./

### 4. Done!
- Copy the production URL
- Vercel handles HTTPS automatically

## Step-by-Step: GitHub Pages

### 1. Create Repository
- Name it \`username.github.io\` (replace username with yours)
- Initialize empty repository

### 2. Push Code
\`\`\`bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
\`\`\`

### 3. Enable GitHub Pages
- Go to repository Settings
- Pages section
- Source: Deploy from branch \`main\`
- Folder: \`/ (root)\`
- Save

### 4. Wait 2-3 minutes
- Your site is live at \`https://username.github.io\`

## Custom Domain Setup

### Buy Domain
- [Namecheap](https://namecheap.com)
- [Google Domains](https://domains.google)
- [Cloudflare Registrar](https://cloudflare.com)

### Configure DNS

**For Netlify:**
1. Add domain in Netlify
2. Get DNS servers (e.g., \`dns1.p05.nsone.net\`)
3. Update nameservers at your registrar

**For Vercel:**
1. Add domain in Vercel dashboard
2. Add DNS records at your registrar:
   - \`A\` record: \`76.76.21.21\`
   - \`CNAME\` www → \`cname.vercel-dns.com\`

**For GitHub Pages:**
1. Add \`CNAME\` file with your domain
2. At registrar, add:
   - \`A\` records: \`185.199.108.153\`, \`185.199.109.153\`, \`185.199.110.153\`, \`185.199.111.153\`
   - \`CNAME\` www → \`username.github.io\`

## Troubleshooting

**Site not loading:**
- Wait 5-10 minutes for DNS propagation
- Clear browser cache
- Try incognito mode

**CSS not working:**
- Check file paths (should be relative)
- View browser console for errors

**Custom domain not working:**
- DNS can take 24-48 hours to propagate worldwide
- Use [whatsmydns.net](https://whatsmydns.net) to check propagation
- Verify DNS records at registrar

## Performance Tips

1. **Image Optimization:**
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Add lazy loading: \`loading="lazy"\`

2. **Caching:**
   - Netlify/Vercel handle this automatically
   - For custom servers, add cache headers

3. **CDN:**
   - Netlify/Vercel use CDN by default
   - For custom servers, use Cloudflare (free)

## Security

- **HTTPS:** All platforms provide free SSL
- **No backend needed:** Static site = secure
- **No database:** No SQL injection risks

## Updates

To update your site:

**Netlify:** Drag and drop new files
**Vercel:** Run \`vercel --prod\`
**GitHub Pages:** \`git push\`

---

Need help? Check platform docs or reach out to their support.
`;

    fs.writeFileSync(
      path.join(outputDir, 'DEPLOYMENT_GUIDE.md'),
      guide,
      'utf-8'
    );
  }
}
