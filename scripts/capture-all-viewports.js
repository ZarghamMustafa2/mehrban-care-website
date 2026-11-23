const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'reports', 'final-ui-audit');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const viewports = [
  { name: 'desktop_1440', size: '1440,900' },
  { name: 'laptop_1280', size: '1280,800' },
  { name: 'tablet_768', size: '768,1024' },
  { name: 'mobile_430', size: '430,932' },
  { name: 'mobile_390', size: '390,844' },
  { name: 'mobile_375', size: '375,667' },
  { name: 'small_320', size: '320,568' },
];

const pages = [
  { name: 'home', url: 'http://localhost:3000' },
  { name: 'about', url: 'http://localhost:3000/about' },
  { name: 'services', url: 'http://localhost:3000/services' },
  { name: 'daily_care', url: 'http://localhost:3000/services/daily-care' },
  { name: 'care_plans', url: 'http://localhost:3000/care-plans' },
  { name: 'overseas', url: 'http://localhost:3000/overseas-families' },
  { name: 'how_it_works', url: 'http://localhost:3000/how-it-works' },
  { name: 'careers', url: 'http://localhost:3000/careers' },
  { name: 'faq', url: 'http://localhost:3000/faq' },
  { name: 'book_care', url: 'http://localhost:3000/book-care' },
  { name: 'contact', url: 'http://localhost:3000/contact' },
  { name: 'privacy', url: 'http://localhost:3000/privacy' },
  { name: 'privacy_policy', url: 'http://localhost:3000/privacy-policy' },
];

console.log(`Starting visual audit screenshot capture across ${viewports.length} viewports...`);

// 1. First capture Home across all 7 viewports
for (const vp of viewports) {
  const outFile = path.join(outDir, `home_${vp.name}.png`);
  console.log(`Capturing Home at ${vp.name} (${vp.size})...`);
  try {
    execSync(`npx --yes playwright screenshot --browser=chromium --channel=chrome --full-page --viewport-size="${vp.size}" http://localhost:3000 "${outFile}"`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed ${vp.name}:`, err.message);
  }
}

// 2. Capture all other pages at Desktop 1440, Tablet 768, and Mobile 375
const coreVps = [
  { name: 'desktop_1440', size: '1440,900' },
  { name: 'tablet_768', size: '768,1024' },
  { name: 'mobile_375', size: '375,667' },
];

for (const p of pages) {
  if (p.name === 'home') continue;
  for (const vp of coreVps) {
    const outFile = path.join(outDir, `${p.name}_${vp.name}.png`);
    console.log(`Capturing ${p.name} at ${vp.name}...`);
    try {
      execSync(`npx --yes playwright screenshot --browser=chromium --channel=chrome --full-page --viewport-size="${vp.size}" ${p.url} "${outFile}"`, { stdio: 'inherit' });
    } catch (err) {
      console.error(`Failed ${p.name} ${vp.name}:`, err.message);
    }
  }
}

console.log('Visual audit screenshot capture complete!');
