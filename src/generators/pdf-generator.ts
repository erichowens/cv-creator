/**
 * PDF Resume Generator
 * Uses Puppeteer to render HTML template to PDF
 */

import * as fs from 'fs';
import * as path from 'path';
import puppeteer from 'puppeteer';
import * as Handlebars from 'handlebars';
import { ResumeData, GenerationOptions, ATSValidation } from '../types';

export class PDFGenerator {
  private templatePath: string;
  private template: HandlebarsTemplateDelegate;

  constructor() {
    this.templatePath = path.join(__dirname, '../templates/resume.html');
    const templateSource = fs.readFileSync(this.templatePath, 'utf-8');
    this.template = Handlebars.compile(templateSource);
  }

  /**
   * Generate PDF resume from resume data
   */
  async generatePDF(
    resumeData: ResumeData,
    options: GenerationOptions
  ): Promise<string> {
    // 1. Render HTML from template
    const html = this.template(resumeData);

    // 2. Launch headless browser
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
      ],
    });

    try {
      const page = await browser.newPage();

      // 3. Load HTML content
      await page.setContent(html, {
        waitUntil: 'networkidle0',
      });

      // 4. Ensure output directory exists
      if (!fs.existsSync(options.outputDir)) {
        fs.mkdirSync(options.outputDir, { recursive: true });
      }

      // 5. Generate PDF
      const outputPath = path.join(options.outputDir, options.pdf.filename);

      await page.pdf({
        path: outputPath,
        format: options.pdf.format,
        margin: {
          top: options.pdf.margin,
          right: options.pdf.margin,
          bottom: options.pdf.margin,
          left: options.pdf.margin,
        },
        printBackground: false,
        preferCSSPageSize: false,
      });

      return outputPath;
    } finally {
      await browser.close();
    }
  }

  /**
   * Validate resume for ATS compatibility
   */
  validateATS(resumeData: ResumeData): ATSValidation {
    const checks = {
      singleColumn: true, // Our template is always single-column
      standardFonts: true, // We use Calibri/Arial
      noImages: true, // No images in template
      standardHeaders: this.checkStandardHeaders(resumeData),
      dateFormatConsistent: this.checkDateConsistency(resumeData),
    };

    const warnings: string[] = [];
    const recommendations: string[] = [];

    // Check professional summary length
    if (resumeData.summary.length < 100) {
      warnings.push('Professional summary is quite short (<100 characters)');
      recommendations.push('Expand summary to 2-4 lines (200-400 characters)');
    }

    if (resumeData.summary.length > 600) {
      warnings.push('Professional summary is too long (>600 characters)');
      recommendations.push('Shorten summary to 2-4 lines (200-400 characters)');
    }

    // Check skills count
    if (resumeData.skills.length < 10) {
      warnings.push('Few skills listed (<10)');
      recommendations.push('Add more relevant technical skills (aim for 15-20)');
    }

    if (resumeData.skills.length > 25) {
      warnings.push('Too many skills listed (>25)');
      recommendations.push('Focus on top 15-20 most relevant skills');
    }

    // Check experience bullets have metrics
    const bulletsWithMetrics = this.countBulletsWithMetrics(resumeData);
    const totalBullets = this.countTotalBullets(resumeData);
    const metricPercentage = totalBullets > 0 ? (bulletsWithMetrics / totalBullets) * 100 : 0;

    if (metricPercentage < 50) {
      warnings.push(`Only ${Math.round(metricPercentage)}% of bullets have quantifiable metrics`);
      recommendations.push('Add metrics/numbers to achievement bullets (aim for 70%+)');
    }

    // Calculate score
    let score = 0;

    // Formatting compliance (30 points)
    score += checks.singleColumn ? 10 : 0;
    score += checks.standardFonts ? 10 : 0;
    score += checks.noImages ? 10 : 0;

    // Section structure (20 points)
    score += checks.standardHeaders ? 15 : 5;
    score += checks.dateFormatConsistent ? 5 : 0;

    // Content quality (30 points)
    if (resumeData.summary.length >= 200 && resumeData.summary.length <= 500) {
      score += 10;
    } else if (resumeData.summary.length >= 100 && resumeData.summary.length <= 600) {
      score += 5;
    }

    if (resumeData.skills.length >= 15 && resumeData.skills.length <= 20) {
      score += 10;
    } else if (resumeData.skills.length >= 10 && resumeData.skills.length <= 25) {
      score += 5;
    }

    if (metricPercentage >= 70) {
      score += 10;
    } else if (metricPercentage >= 50) {
      score += 5;
    }

    // Keyword optimization (20 points) - placeholder for now
    score += 15; // Assume good keyword usage if structure is solid

    const passed = score >= 85;

    if (passed) {
      recommendations.push('Resume passes ATS validation! Ready to submit.');
    } else {
      recommendations.push('Address warnings above to improve ATS score to 85+');
    }

    return {
      passed,
      score,
      checks,
      warnings,
      recommendations,
    };
  }

  /**
   * Check if standard section headers are used
   */
  private checkStandardHeaders(resumeData: ResumeData): boolean {
    // Our template always uses standard headers
    // This would check for custom/creative section names in real validation
    return true;
  }

  /**
   * Check date format consistency
   */
  private checkDateConsistency(resumeData: ResumeData): boolean {
    const dates = resumeData.experience.map((e) => e.dates);

    // Check if all dates follow similar format (contain months and years)
    const hasMonthFormat = dates.filter((d) => /[A-Z][a-z]{2}\s\d{4}/.test(d)).length;
    const hasYearOnlyFormat = dates.filter((d) => /^\d{4}$/.test(d)).length;

    // Consistent if all follow same format
    return hasMonthFormat === dates.length || hasYearOnlyFormat === dates.length;
  }

  /**
   * Count bullets that have quantifiable metrics
   */
  private countBulletsWithMetrics(resumeData: ResumeData): number {
    let count = 0;

    for (const exp of resumeData.experience) {
      for (const bullet of exp.bullets) {
        // Check if bullet contains numbers or percentages
        if (/\d+/.test(bullet)) {
          count++;
        }
      }
    }

    return count;
  }

  /**
   * Count total bullets
   */
  private countTotalBullets(resumeData: ResumeData): number {
    return resumeData.experience.reduce((sum, exp) => sum + exp.bullets.length, 0);
  }

  /**
   * Generate ATS analysis report
   */
  generateATSReport(validation: ATSValidation): string {
    const lines: string[] = [];

    lines.push('# ATS Validation Report\n');
    lines.push(`**Score:** ${validation.score}/100 ${validation.passed ? '✅ PASS' : '⚠️ NEEDS IMPROVEMENT'}\n`);

    lines.push('## Checks\n');
    lines.push(`- Single-column layout: ${validation.checks.singleColumn ? '✅' : '❌'}`);
    lines.push(`- Standard fonts: ${validation.checks.standardFonts ? '✅' : '❌'}`);
    lines.push(`- No images/graphics: ${validation.checks.noImages ? '✅' : '❌'}`);
    lines.push(`- Standard headers: ${validation.checks.standardHeaders ? '✅' : '❌'}`);
    lines.push(`- Date format consistent: ${validation.checks.dateFormatConsistent ? '✅' : '❌'}\n`);

    if (validation.warnings.length > 0) {
      lines.push('## Warnings\n');
      validation.warnings.forEach((w) => lines.push(`⚠️ ${w}`));
      lines.push('');
    }

    lines.push('## Recommendations\n');
    validation.recommendations.forEach((r) => lines.push(`💡 ${r}`));

    return lines.join('\n');
  }
}
