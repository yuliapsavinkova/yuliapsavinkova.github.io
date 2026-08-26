const { createCanvas, loadImage } = require('@napi-rs/canvas');
const fs = require('fs');
const path = require('path');

async function generateOgPreview() {
  // Pure square portrait image only (600x600), no background canvas, no text
  const size = 600;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  let portraitPath = path.resolve(__dirname, '../public/images/portrait-orig.png');
  if (!fs.existsSync(portraitPath) || fs.statSync(portraitPath).size === 0) {
    portraitPath = path.resolve(__dirname, '../public/images/portrait-1200.webp');
  }

  if (fs.existsSync(portraitPath)) {
    const portraitImg = await loadImage(portraitPath);
    const sSize = Math.min(portraitImg.width, portraitImg.height);
    const sX = (portraitImg.width - sSize) / 2;
    const sY = 0;

    // Draw square crop directly to fill 100% of the image
    ctx.drawImage(portraitImg, sX, sY, sSize, sSize, 0, 0, size, size);
  }

  const outPngPath = path.resolve(__dirname, '../public/images/og-preview.png');
  const outJpgPath = path.resolve(__dirname, '../public/images/og-preview.jpg');

  fs.writeFileSync(outPngPath, canvas.toBuffer('image/png'));
  fs.writeFileSync(outJpgPath, canvas.toBuffer('image/jpeg'));

  console.log(`Saved clean square portrait as OG preview (${size}x${size}): ${outPngPath}`);
}

generateOgPreview().catch(console.error);
