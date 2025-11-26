# CV Creator - Quick Start Guide

Get your resume and portfolio ready in **5 minutes**!

## Step 1: Install Dependencies (1 min)

```bash
cd cv-creator-implementation
npm install
```

This installs:
- TypeScript
- Puppeteer (for PDF generation)
- Handlebars (for templates)

## Step 2: Run the Example (1 min)

```bash
npm run example
```

This generates:
- ✅ `output/alex-chen-resume.pdf` - Professional resume
- ✅ `output/portfolio/index.html` - Portfolio website
- ✅ `output/ats-analysis.md` - ATS validation report

## Step 3: Preview Your Files (1 min)

### Preview Resume PDF
```bash
# macOS
open output/alex-chen-resume.pdf

# Linux
xdg-open output/alex-chen-resume.pdf

# Windows
start output/alex-chen-resume.pdf
```

### Preview Portfolio Website
```bash
# macOS
open output/portfolio/index.html

# Linux
xdg-open output/portfolio/index.html

# Windows
start output/portfolio/index.html
```

## Step 4: Check ATS Score (1 min)

```bash
cat output/ats-analysis.md
```

Look for:
- **Score:** Should be 85+ for optimal ATS compatibility
- **Warnings:** Any issues to address
- **Recommendations:** How to improve

## Step 5: Deploy Portfolio (1 min)

### Option A: Netlify (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag and drop `output/portfolio` folder
4. Done! Copy your URL

### Option B: GitHub Pages

```bash
cd output/portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

Your site will be live at `https://YOUR-USERNAME.github.io`

---

## 🎉 You're Done!

You now have:
- ✅ ATS-optimized PDF resume
- ✅ Live portfolio website
- ✅ Deployment-ready files

## Next Steps

### Customize with Your Data

1. **Collect Career Data**
   - Use career-biographer skill to interview yourself
   - Or manually create `CareerProfile` JSON

2. **Generate Positioning Strategy**
   - Use competitive-cartographer to analyze your market
   - Or manually create `PositioningStrategy` JSON

3. **Generate Your Resume**
   ```typescript
   import { CVCreator } from './src';

   const cvCreator = new CVCreator();
   const result = await cvCreator.generate(
     yourCareerProfile,
     yourPositioningStrategy
   );
   ```

### Customize Appearance

**Resume PDF:**
- Edit `src/templates/resume.html`
- Change fonts, colors, spacing
- Modify section order

**Portfolio Website:**
- Edit `src/templates/portfolio.html`
- Update CSS variables for colors
- Add custom sections

---

## 💡 Pro Tips

### Get ATS Score 90+

1. **Use Metrics**: Add numbers to every achievement bullet
2. **Match Keywords**: Use exact terminology from job descriptions
3. **Keep It Clean**: Single-column, standard fonts, no images
4. **Optimize Length**: 1-2 pages max

### Make Portfolio Stand Out

1. **Add Screenshots**: Include project screenshots
2. **Show GitHub**: Link to your best repositories
3. **Highlight Impact**: Use specific metrics (40% faster, 10M users, etc.)
4. **Custom Domain**: Buy domain and point it to portfolio

### Speed Up Job Applications

1. **Create Variants**: Generate role-specific resumes
2. **Update Regularly**: Refresh with new achievements
3. **Test ATS**: Run through Jobscan or Resume Worded
4. **Get Feedback**: Show to recruiters and peers

---

## ❓ Common Questions

**Q: Can I use this for free?**
A: Yes! MIT licensed, free forever.

**Q: Does the portfolio work on mobile?**
A: Yes! Fully responsive design.

**Q: Can I customize the colors?**
A: Yes! Edit CSS variables in templates.

**Q: Does it work with applicant tracking systems?**
A: Yes! Designed to score 85+ on ATS compatibility.

**Q: Can I add more sections?**
A: Yes! Templates are fully customizable.

**Q: Do I need to know how to code?**
A: No for basic use. Yes for advanced customization.

---

## 🆘 Troubleshooting

### Issue: npm install fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue: Puppeteer can't find Chromium

**Solution:**
```bash
# Manually install Chromium
npx puppeteer browsers install chrome
```

### Issue: PDF looks wrong

**Solution:**
- Check `src/templates/resume.html` for errors
- Ensure Handlebars syntax is correct
- Test with sample data first

### Issue: Portfolio won't deploy

**Solution:**
- Ensure all files are in portfolio folder
- Check index.html opens in browser locally first
- Verify no absolute paths (use relative paths)

---

## 📚 More Resources

- [Full README](README.md) - Complete documentation
- [Examples](examples/) - Sample data and usage
- [Type Definitions](src/types/index.ts) - Data schemas
- [Templates](src/templates/) - HTML templates

---

**Need Help?** Open an issue on GitHub or check the documentation.

**Ready to Apply?** Use your PDF for applications, share your portfolio URL!

Good luck with your job search! 🚀
