const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'reports', 'prompt11-audit');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const artifactDir = 'C:\\Users\\NEW PC TECH\\.gemini\\antigravity\\brain\\f1bf0c3c-7f76-4e23-8e13-fdd92d1e1674';

const targets = [
  { name: 'p11_01_desktop_hero_1440', url: 'http://localhost:3000', size: '1440,900', fullPage: false },
  { name: 'p11_02_desktop_home_full_1440', url: 'http://localhost:3000', size: '1440,900', fullPage: true },
  { name: 'p11_03_laptop_header_1024', url: 'http://localhost:3000', size: '1024,768', fullPage: false },
  { name: 'p11_04_mobile_hero_390', url: 'http://localhost:3000', size: '390,844', fullPage: false },
  { name: 'p11_05_mobile_home_full_390', url: 'http://localhost:3000', size: '390,844', fullPage: true },
  { name: 'p11_06_mobile_small_320', url: 'http://localhost:3000', size: '320,568', fullPage: false },
];

for (const t of targets) {
  const outFile = path.join(outDir, `${t.name}.png`);
  console.log(`[${t.name}] Capturing ${t.url} (${t.size}, fullPage=${t.fullPage})...`);
  try {
    const fullPageFlag = t.fullPage ? '--full-page' : '';
    execSync(`npx --yes playwright screenshot --browser=chromium --channel=chrome ${fullPageFlag} --viewport-size="${t.size}" "${t.url}" "${outFile}"`, { stdio: 'inherit', timeout: 35000 });
    const artFile = path.join(artifactDir, `${t.name}.png`);
    fs.copyFileSync(outFile, artFile);
    console.log(`Successfully captured and copied: ${t.name}.png`);
  } catch (err) {
    console.error(`Error capturing ${t.name}:`, err.message);
  }
}

console.log('Prompt 11 visual captures complete!');
