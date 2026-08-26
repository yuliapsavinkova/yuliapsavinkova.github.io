const { createCanvas, loadImage } = require('@napi-rs/canvas');
const fs = require('fs');
const path = require('path');

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
  // Vertical format: 800 × 1200 (2:3 vertical aspect ratio)
  const width = 800;
  const height = 1200;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 1. Deep midnight navy background (matching theme #0b1223)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#070d1a');
  bgGrad.addColorStop(0.5, '#0b1223');
  bgGrad.addColorStop(1, '#020617');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Soft ambient radial glow
  const aura = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, 420);
  aura.addColorStop(0, 'rgba(80, 196, 217, 0.15)');
  aura.addColorStop(0.7, 'rgba(80, 196, 217, 0.03)');
  aura.addColorStop(1, 'rgba(80, 196, 217, 0)');
  ctx.fillStyle = aura;
  ctx.fillRect(0, 0, width, height);

  // Subtle outer framing border
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.12)';
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, 24, 24, width - 48, height - 48, 24);
  ctx.stroke();

  // 2. Centered Square Portrait
  const pSize = 680;
  const pX = (width - pSize) / 2;
  const pY = (height - pSize) / 2;
  const pRadius = 24;

  // Outer glowing accent stroke for the square portrait
  ctx.strokeStyle = 'rgba(80, 196, 217, 0.45)';
  ctx.lineWidth = 3;
  drawRoundedRect(ctx, pX - 3, pY - 3, pSize + 6, pSize + 6, pRadius + 3);
  ctx.stroke();

  // Load portrait (prefer portrait-orig.png if available, else portrait-1200.webp)
  let portraitPath = path.resolve(__dirname, '../public/images/portrait-orig.png');
  if (!fs.existsSync(portraitPath) || fs.statSync(portraitPath).size === 0) {
    portraitPath = path.resolve(__dirname, '../public/images/portrait-1200.webp');
  }

  if (fs.existsSync(portraitPath)) {
    const portraitImg = await loadImage(portraitPath);

    ctx.save();
    drawRoundedRect(ctx, pX, pY, pSize, pSize, pRadius);
    ctx.clip();

    // Fill background behind image
    ctx.fillStyle = '#0b1223';
    ctx.fillRect(pX, pY, pSize, pSize);

    // Square crop calculation (centered horizontally, top-aligned to preserve head and sweater)
    const sSize = Math.min(portraitImg.width, portraitImg.height);
    const sX = (portraitImg.width - sSize) / 2;
    const sY = 0;

    ctx.drawImage(portraitImg, sX, sY, sSize, sSize, pX, pY, pSize, pSize);
    ctx.restore();

    // Inner subtle highlight border on portrait
    ctx.strokeStyle = 'rgba(248, 250, 252, 0.2)';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, pX, pY, pSize, pSize, pRadius);
    ctx.stroke();
  }

  // Save generated images to public/images
  const outPngPath = path.resolve(__dirname, '../public/images/og-preview.png');
  const outJpgPath = path.resolve(__dirname, '../public/images/og-preview.jpg');

  const pngBuffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outPngPath, pngBuffer);

  const jpgBuffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outJpgPath, jpgBuffer);

  console.log(`Generated vertical OG preview without text: ${outPngPath} (${width}x${height})`);
}

generateOgPreview().catch(console.error);
