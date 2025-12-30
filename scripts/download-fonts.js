// Helper script to download Fredoka font files for GDPR compliance
// Run with: node scripts/download-fonts.js

const https = require('https');
const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, '..', 'public', 'fonts');

// Create fonts directory if it doesn't exist
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Font URLs from Google Fonts (you can also download manually from fonts.google.com)
// Note: For full GDPR compliance, download from fonts.google.com directly
// and convert to woff2 using a tool like: https://cloudconvert.com/

const fontFiles = [
  {
    name: 'Fredoka-Regular.woff2',
    url: 'https://fonts.gstatic.com/s/fredoka/v14/Xnne47acSrffzrg9M2hT3A.woff2'
  },
  {
    name: 'Fredoka-Medium.woff2',
    url: 'https://fonts.gstatic.com/s/fredoka/v14/Xnne47acSrffzrg9M2hT3A.woff2'
  },
  {
    name: 'Fredoka-SemiBold.woff2',
    url: 'https://fonts.gstatic.com/s/fredoka/v14/Xnne47acSrffzrg9M2hT3A.woff2'
  },
  {
    name: 'Fredoka-Bold.woff2',
    url: 'https://fonts.gstatic.com/s/fredoka/v14/Xnne47acSrffzrg9M2hT3A.woff2'
  }
];

console.log('To download Fredoka fonts for GDPR compliance:');
console.log('1. Visit: https://fonts.google.com/specimen/Fredoka');
console.log('2. Click "Download family"');
console.log('3. Extract the files');
console.log('4. Use a converter (like https://cloudconvert.com/) to convert .ttf to .woff2');
console.log('5. Place the converted files in public/fonts/ with the names:');
fontFiles.forEach(font => {
  console.log(`   - ${font.name}`);
});

