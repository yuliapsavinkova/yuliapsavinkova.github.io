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

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

async function generateOgPreview() {
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 1. Clean, deep navy canvas background (matching the sweater & theme #0b1223)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#070d1a');
  bgGrad.addColorStop(1, '#020617');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle ambient glow in center
  const centerGlow = ctx.createRadialGradient(width / 2, 220, 0, width / 2, 220, 360);
  centerGlow.addColorStop(0, 'rgba(80, 196, 217, 0.12)');
  centerGlow.addColorStop(1, 'rgba(80, 196, 217, 0)');
  ctx.fillStyle = centerGlow;
  ctx.fillRect(0, 0, width, height);

  // 2. Clean Center Portrait (Circular Frame)
  const centerX = width / 2;
  const centerY = 210;
  const radius = 145;

  // Portrait glowing accent ring
  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + 5, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(80, 196, 217, 0.45)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Draw circular portrait
  const portraitPath = path.resolve(__dirname, '../public/images/portrait-1200.webp');
  if (fs.existsSync(portraitPath)) {
    const portraitImg = await loadImage(portraitPath);
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.clip();

    // Fill background
    ctx.fillStyle = '#0b1223';
    ctx.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);

    // Aspect slice centering
    const size = radius * 2;
    const imgAspect = portraitImg.width / portraitImg.height;
    let sW, sH, sX, sY;

    if (imgAspect > 1) {
      sH = portraitImg.height;
      sW = portraitImg.height;
      sX = (portraitImg.width - sW) / 2;
      sY = 0;
    } else {
      sW = portraitImg.width;
      sH = portraitImg.width;
      sX = 0;
      sY = (portraitImg.height - sH) / 2;
    }

    ctx.drawImage(portraitImg, sX, sY, sW, sH, centerX - radius, centerY - radius, size, size);
  }
  ctx.restore();

  // Subtle inner ring highlight on the portrait
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(248, 250, 252, 0.2)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // 3. Simple text under portrait
  // "Yulia | Portfolio"
  ctx.textAlign = 'center';
  ctx.fillStyle = '#f8fafc';
  ctx.font = '700 50px PlusJakartaSansBold, sans-serif';
  ctx.fillText('Yulia | Portfolio', centerX, 440);

  // "yuliapsavinkova.github.io"
  ctx.fillStyle = '#50c4d9';
  ctx.font = '500 24px PlusJakartaSansMedium, sans-serif';
  ctx.fillText('yuliapsavinkova.github.io', centerX, 495);

  // Save generated images
  const outPngPath = path.resolve(__dirname, '../public/images/og-preview.png');
  const outJpgPath = path.resolve(__dirname, '../public/images/og-preview.jpg');
  
  const pngBuffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outPngPath, pngBuffer);

  const jpgBuffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outJpgPath, jpgBuffer);

  console.log(`Generated simple OG image: ${outPngPath}`);
}

generateOgPreview().catch(console.error);
