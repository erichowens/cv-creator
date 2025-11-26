/**
 * CV Creator - Main Entry Point
 * Orchestrates PDF resume and portfolio website generation
 */

import * as fs from 'fs';
import * as path from 'path';
import { CareerProfile, PositioningStrategy, GenerationOptions, ATSValidation } from './types';
import { transformToResume, transformToPortfolio } from './utils/transformers';
import { PDFGenerator } from './generators/pdf-generator';
import { PortfolioGenerator } from './generators/portfolio-generator';

export class CVCreator {
  private pdfGenerator: PDFGenerator;
  private portfolioGenerator: PortfolioGenerator;

  constructor() {
    this.pdfGenerator = new PDFGenerator();
    this.portfolioGenerator = new PortfolioGenerator();
  }

  /**
   * Generate both PDF resume and portfolio website
   */
  async generate(
    careerProfile: CareerProfile,
    positioningStrategy?: PositioningStrategy,
    options?: Partial<GenerationOptions>
  ): Promise<GenerationResult> {
    // 1. Set default options
    const fullOptions = this.getDefaultOptions(careerProfile, options);

    console.log('🚀 CV Creator starting...\n');

    // 2. Transform data
    console.log('📊 Transforming career profile data...');
    const resumeData = transformToResume(careerProfile, positioningStrategy);
    const portfolioData = transformToPortfolio(careerProfile, positioningStrategy);

    // 3. Generate PDF resume
    console.log('📄 Generating PDF resume...');
    const pdfPath = await this.pdfGenerator.generatePDF(resumeData, fullOptions);
    console.log(`✅ PDF generated: ${pdfPath}`);

    // 4. Validate ATS compatibility
    console.log('\n🔍 Running ATS validation...');
    const atsValidation = this.pdfGenerator.validateATS(resumeData);
    console.log(`📊 ATS Score: ${atsValidation.score}/100 ${atsValidation.passed ? '✅' : '⚠️'}`);

    // 5. Generate ATS report
    const atsReportPath = path.join(fullOptions.outputDir, 'ats-analysis.md');
    const atsReport = this.pdfGenerator.generateATSReport(atsValidation);
    fs.writeFileSync(atsReportPath, atsReport, 'utf-8');
    console.log(`✅ ATS report: ${atsReportPath}`);

    // 6. Generate portfolio website
    console.log('\n🌐 Generating portfolio website...');
    const portfolioDir = await this.portfolioGenerator.generatePortfolio(
      portfolioData,
      fullOptions
    );
    console.log(`✅ Portfolio generated: ${portfolioDir}/index.html`);

    // 7. Generate deployment guide
    this.portfolioGenerator.generateDeploymentGuide(portfolioDir);
    console.log(`✅ Deployment guide: ${portfolioDir}/DEPLOYMENT_GUIDE.md`);

    // 8. Copy resume PDF to portfolio directory
    const resumeInPortfolio = path.join(portfolioDir, 'resume.pdf');
    fs.copyFileSync(pdfPath, resumeInPortfolio);
    console.log(`✅ Resume copied to portfolio`);

    // 9. Generate summary
    const summary = this.generateSummary(
      pdfPath,
      portfolioDir,
      atsValidation
    );

    console.log('\n' + summary);
    console.log('\n🎉 Done! Your resume and portfolio are ready.\n');

    return {
      pdfPath,
      portfolioDir,
      atsValidation,
      resumeData,
      portfolioData,
    };
  }

  /**
   * Get default generation options
   */
  private getDefaultOptions(
    profile: CareerProfile,
    overrides?: Partial<GenerationOptions>
  ): GenerationOptions {
    const sanitizedName = profile.name.toLowerCase().replace(/\s+/g, '-');

    return {
      outputDir: overrides?.outputDir || './output',
      pdf: {
        filename: `${sanitizedName}-resume.pdf`,
        format: 'A4',
        margin: '0.75in',
        ...overrides?.pdf,
      },
      portfolio: {
        dirname: 'portfolio',
        includeAnalytics: false,
        theme: 'light',
        ...overrides?.portfolio,
      },
      jobDescription: overrides?.jobDescription,
    };
  }

  /**
   * Generate summary of what was created
   */
  private generateSummary(
    pdfPath: string,
    portfolioDir: string,
    atsValidation: ATSValidation
  ): string {
    const lines = [
      '═══════════════════════════════════════════════════',
      '                  GENERATION SUMMARY',
      '═══════════════════════════════════════════════════',
      '',
      '📄 PDF RESUME',
      `   Location: ${pdfPath}`,
      `   ATS Score: ${atsValidation.score}/100 ${atsValidation.passed ? '✅ PASS' : '⚠️ NEEDS WORK'}`,
      '',
      '🌐 PORTFOLIO WEBSITE',
      `   Location: ${portfolioDir}/index.html`,
      `   Preview: Open index.html in your browser`,
      '',
      '📋 NEXT STEPS',
      '',
      '1. Review your PDF resume',
      '   - Open the PDF and check formatting',
      '   - Verify all information is accurate',
      '',
      '2. Check ATS recommendations',
      `   - Review ${path.basename(path.dirname(pdfPath))}/ats-analysis.md`,
      `   - Current score: ${atsValidation.score}/100`,
      '',
      '3. Preview your portfolio website',
      `   - Open ${portfolioDir}/index.html in browser`,
      '   - Check all sections and links',
      '',
      '4. Deploy your portfolio',
      `   - See ${portfolioDir}/DEPLOYMENT_GUIDE.md`,
      '   - Recommended: Netlify (easiest)',
      '',
      '5. Start applying!',
      '   - Use PDF for job applications',
      '   - Share portfolio URL in applications',
      '',
      '═══════════════════════════════════════════════════',
    ];

    return lines.join('\n');
  }
}

/**
 * Generation result interface
 */
export interface GenerationResult {
  pdfPath: string;
  portfolioDir: string;
  atsValidation: ATSValidation;
  resumeData: ReturnType<typeof transformToResume>;
  portfolioData: ReturnType<typeof transformToPortfolio>;
}

// Export types and utilities for library usage
export * from './types';
export * from './utils/transformers';
export * from './generators/pdf-generator';
export * from './generators/portfolio-generator';
