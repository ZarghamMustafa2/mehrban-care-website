const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'reports', 'transformed-audit');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const artifactDir = 'C:\\Users\\NEW PC TECH\\.gemini\\antigravity\\brain\\f1bf0c3c-7f76-4e23-8e13-fdd92d1e1674';

const targets = [
  { name: '01_desktop_home', url: 'http://localhost:3000', size: '1440,900' },
  { name: '02_desktop_about', url: 'http://localhost:3000/about', size: '1440,900' },
  { name: '03_desktop_services', url: 'http://localhost:3000/services', size: '1440,900' },
  { name: '04_desktop_service_detail', url: 'http://localhost:3000/services/overseas-support', size: '1440,900' },
  { name: '05_desktop_care_plans', url: 'http://localhost:3000/care-plans', size: '1440,900' },
  { name: '06_desktop_overseas_families', url: 'http://localhost:3000/overseas-families', size: '1440,900' },
  { name: '07_desktop_careers', url: 'http://localhost:3000/careers', size: '1440,900' },
  { name: '08_desktop_contact', url: 'http://localhost:3000/contact', size: '1440,900' },
  { name: '09_mobile_home', url: 'http://localhost:3000', size: '390,844' },
  { name: '10_mobile_about', url: 'http://localhost:3000/about', size: '390,844' },
  { name: '11_mobile_services', url: 'http://localhost:3000/services', size: '390,844' },
  { name: '12_mobile_overseas', url: 'http://localhost:3000/overseas-families', size: '390,844' },
  { name: '13_mobile_contact', url: 'http://localhost:3000/contact', size: '390,844' },
];

for (const t of targets) {
  const outFile = path.join(outDir, `${t.name}.png`);
  console.log(`[${t.name}] Capturing ${t.url} (${t.size})...`);
  try {
    execSync(`npx --yes playwright screenshot --browser=chromium --channel=chrome --full-page --viewport-size="${t.size}" "${t.url}" "${outFile}"`, { stdio: 'inherit', timeout: 45000 });
    const artFile = path.join(artifactDir, `${t.name}.png`);
    fs.copyFileSync(outFile, artFile);
    console.log(`Successfully captured and copied to artifact: ${t.name}.png`);
  } catch (err) {
    console.error(`Error capturing ${t.name}:`, err.message);
  }
}

console.log('All captures finished!');
