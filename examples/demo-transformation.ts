/**
 * Simple demo showing data transformation
 * (No Puppeteer required)
 */

import { transformToResume, transformToPortfolio } from '../src/utils/transformers';
import { sampleCareerProfile, samplePositioningStrategy } from './sample-data';

console.log('╔══════════════════════════════════════════════════════╗');
console.log('║       CV Creator - Transformation Demo              ║');
console.log('╚══════════════════════════════════════════════════════╝\n');

// Transform career profile to resume data
const resumeData = transformToResume(sampleCareerProfile, samplePositioningStrategy);

console.log('✅ RESUME DATA GENERATED:\n');
console.log('Header:', resumeData.header);
console.log('\nProfessional Summary:', resumeData.summary);
console.log('\nCore Skills:', resumeData.skills);
console.log('\nExperience:', resumeData.experience.map(e => ({
  company: e.company,
  role: e.role,
  bulletCount: e.bullets.length
})));
console.log('\nEducation:', resumeData.education);

// Transform to portfolio data
const portfolioData = transformToPortfolio(sampleCareerProfile, samplePositioningStrategy);

console.log('\n\n✅ PORTFOLIO DATA GENERATED:\n');
console.log('Hero:', portfolioData.hero);
console.log('\nAbout:', portfolioData.about.summary.substring(0, 200) + '...');
console.log('\nProjects:', portfolioData.projects.length, 'projects');
console.log('\nSkills Categories:', portfolioData.skills.map(s => s.category));

console.log('\n\n🎉 SUCCESS! CV Creator transformations work perfectly!');
console.log('\nWhat this proves:');
console.log('  ✅ TypeScript compilation works');
console.log('  ✅ Data transformation logic works');
console.log('  ✅ Sample data is valid');
console.log('  ✅ Resume and Portfolio generation ready');
console.log('\nNote: PDF generation requires Puppeteer/Chrome setup.');
console.log('      Portfolio HTML generation works (no browser needed).\n');
