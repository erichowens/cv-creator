/**
 * Example: Generate CV and Portfolio from Sample Data
 * Run with: npm run example
 */

import { CVCreator } from '../src';
import { sampleCareerProfile, samplePositioningStrategy } from './sample-data';

async function main() {
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║           CV Creator - Example Generation           ║');
  console.log('╚══════════════════════════════════════════════════════╝\n');

  try {
    // Create CV Creator instance
    const cvCreator = new CVCreator();

    // Generate resume and portfolio
    const result = await cvCreator.generate(
      sampleCareerProfile,
      samplePositioningStrategy,
      {
        outputDir: './output',
        pdf: {
          filename: 'alex-chen-resume.pdf',
          format: 'A4',
          margin: '0.75in',
        },
        portfolio: {
          dirname: 'portfolio',
          includeAnalytics: false,
        },
      }
    );

    // Show results
    console.log('\n📊 GENERATION RESULTS:\n');
    console.log(`✅ PDF Resume: ${result.pdfPath}`);
    console.log(`✅ Portfolio: ${result.portfolioDir}/index.html`);
    console.log(`✅ ATS Score: ${result.atsValidation.score}/100`);

    // Show warnings and recommendations
    if (result.atsValidation.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      result.atsValidation.warnings.forEach((w) => console.log(`   - ${w}`));
    }

    if (result.atsValidation.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS:');
      result.atsValidation.recommendations.forEach((r) => console.log(`   - ${r}`));
    }

    // Show resume data summary
    console.log('\n📄 RESUME SUMMARY:');
    console.log(`   Name: ${result.resumeData.header.name}`);
    console.log(`   Skills: ${result.resumeData.skills.length} technical skills`);
    console.log(`   Experience: ${result.resumeData.experience.length} positions`);
    console.log(`   Education: ${result.resumeData.education.length} degrees`);

    // Show portfolio data summary
    console.log('\n🌐 PORTFOLIO SUMMARY:');
    console.log(`   Projects: ${result.portfolioData.projects.length} featured projects`);
    console.log(`   Skill Categories: ${result.portfolioData.skills.length} categories`);
    console.log(`   Experience Entries: ${result.portfolioData.experience.length} positions`);

    console.log('\n✨ Generation complete! Check the output/ directory.\n');

  } catch (error) {
    console.error('\n❌ ERROR:', error);
    process.exit(1);
  }
}

// Run the example
main();
