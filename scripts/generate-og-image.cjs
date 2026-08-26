const { createCanvas, loadImage, GlobalFonts } = require('@napi-rs/canvas');
const fs = require('fs');
const path = require('path');

// Register Fonts
const fontRegular = path.resolve(__dirname, '../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-400-normal.woff');
const fontMedium = path.resolve(__dirname, '../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-500-normal.woff');
const fontSemiBold = path.resolve(__dirname, '../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-600-normal.woff');
const fontBold = path.resolve(__dirname, '../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-700-normal.woff');

if (fs.existsSync(fontRegular)) GlobalFonts.registerFromPath(fontRegular, 'PlusJakartaSansRegular');
if (fs.existsSync(fontMedium)) GlobalFonts.registerFromPath(fontMedium, 'PlusJakartaSansMedium');
if (fs.existsSync(fontSemiBold)) GlobalFonts.registerFromPath(fontSemiBold, 'PlusJakartaSansSemiBold');
if (fs.existsSync(fontBold)) GlobalFonts.registerFromPath(fontBold, 'PlusJakartaSansBold');

async function generateOgPreview() {
  // 600 x 900 Vertical Card (Square 600x600 portrait on top, clean text section on bottom)
  const width = 600;
  const height = 900;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 1. Top Section: 600x600 square image
  let portraitPath = path.resolve(__dirname, '../public/images/portrait-orig.png');
  if (!fs.existsSync(portraitPath) || fs.statSync(portraitPath).size === 0) {
    portraitPath = path.resolve(__dirname, '../public/images/portrait-1200.webp');
  }

  if (fs.existsSync(portraitPath)) {
    const portraitImg = await loadImage(portraitPath);
    
    // Crop 1:1 square from center/top of portrait
    const sSize = Math.min(portraitImg.width, portraitImg.height);
    const sX = (portraitImg.width - sSize) / 2;
    const sY = 0; // top aligned to frame face & sweater perfectly

    ctx.drawImage(portraitImg, sX, sY, sSize, sSize, 0, 0, 600, 600);
  }

  // 2. Bottom Section: 600x300 clean background
  const bgGrad = ctx.createLinearGradient(0, 600, 0, 900);
  bgGrad.addColorStop(0, '#0b1223'); // Seamless match with sweater & theme
  bgGrad.addColorStop(1, '#030712');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 600, 600, 300);

  // Clean accent divider line between portrait and text
  ctx.strokeStyle = '#50c4d9';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 600);
  ctx.lineTo(600, 600);
  ctx.stroke();

  // 3. Text directly under the square image
  ctx.textAlign = 'center';

  // Primary Title: "Yulia | Portfolio"
  ctx.fillStyle = '#f8fafc';
  ctx.font = '700 38px PlusJakartaSansBold, sans-serif';
  ctx.fillText('Yulia | Portfolio', 300, 720);

  // Subtitle / Link: "yuliapsavinkova.github.io"
  ctx.fillStyle = '#50c4d9';
  ctx.font = '600 22px PlusJakartaSansSemiBold, sans-serif';
  ctx.fillText('yuliapsavinkova.github.io', 300, 780);

  // Save generated images
  const outPngPath = path.resolve(__dirname, '../public/images/og-preview.png');
  const outJpgPath = path.resolve(__dirname, '../public/images/og-preview.jpg');

  const pngBuffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outPngPath, pngBuffer);

  const jpgBuffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outJpgPath, jpgBuffer);

  console.log(`Generated 600x900 thumbnail: ${outPngPath}`);
}

generateOgPreview().catch(console.error);
