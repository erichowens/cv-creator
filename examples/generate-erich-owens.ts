import { CVCreator } from '../src';
import { erichOwensCareerProfile, erichOwensPositioning } from './erich-owens-data';

async function main() {
  console.log('🎯 Generating CV for Erich Owens...\n');

  try {
    const creator = new CVCreator();

    const result = await creator.generate(
      erichOwensCareerProfile,
      erichOwensPositioning,
      {
        outputDir: './output'
      }
    );

    console.log('\n✅ Generation complete!');
    console.log('\n📦 Quick access:');
    console.log(`  • Open PDF: open ${result.pdfPath}`);
    console.log(`  • View portfolio: open ${result.portfolioDir}/index.html`);
    console.log(`  • ATS Score: ${result.atsValidation.score}/100`);
  } catch (error) {
    console.error('❌ Error generating CV:', error);
    process.exit(1);
  }
}

main();
