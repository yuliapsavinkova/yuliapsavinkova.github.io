import './effects-cursor.css';

function initCursor() {
  if (document.querySelector('.cursor-canvas')) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'cursor-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  let mx = -100,
    my = -100;
  let angle = 0;
  let clicking = false;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });
  document.addEventListener('mousedown', () => (clicking = true));
  document.addEventListener('mouseup', () => (clicking = false));

  const MARS_R = 8;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = clicking ? 0.85 : 1;
    const r = MARS_R * scale;

    // Atmosphere rim glow
    const atmo = ctx.createRadialGradient(mx, my, r * 0.7, mx, my, r * 1.6);
    atmo.addColorStop(0, `rgba(200,80,40,0)`);
    atmo.addColorStop(0.6, `rgba(180,60,30,0.12)`);
    atmo.addColorStop(1, `rgba(180,60,30,0)`);
    ctx.beginPath();
    ctx.arc(mx, my, r * 1.6, 0, Math.PI * 2);
    ctx.fillStyle = atmo;
    ctx.fill();

    // Sphere shading — light source top-left
    const sphere = ctx.createRadialGradient(
      mx - r * 0.35,
      my - r * 0.35,
      r * 0.1, // light source
      mx,
      my,
      r,
    );
    sphere.addColorStop(0, `rgba(235,130,85,0.95)`); // lit
    sphere.addColorStop(0.4, `rgba(190,75,45,0.95)`); // mid
    sphere.addColorStop(0.8, `rgba(130,40,20,0.95)`); // dark
    sphere.addColorStop(1, `rgba(80,20,10,0.95)`); // edge

    ctx.beginPath();
    ctx.arc(mx, my, r, 0, Math.PI * 2);
    ctx.fillStyle = sphere;
    ctx.fill();

    // Valles Marineris — dark horizontal canyon stripe
    ctx.save();
    ctx.clip();
    ctx.beginPath();
    ctx.ellipse(mx + r * 0.1, my + r * 0.05, r * 0.55, r * 0.08, -0.2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(80,25,10,0.35)`;
    ctx.fill();
    ctx.restore();

    // Clip to circle for clean edge
    ctx.save();
    ctx.beginPath();
    ctx.arc(mx, my, r, 0, Math.PI * 2);
    ctx.clip();

    // Polar ice cap — white top
    const pole = ctx.createRadialGradient(mx, my - r * 0.75, 0, mx, my - r * 0.75, r * 0.4);
    pole.addColorStop(0, `rgba(240,230,220,0.6)`);
    pole.addColorStop(1, `rgba(240,230,220,0)`);
    ctx.beginPath();
    ctx.arc(mx, my - r * 0.75, r * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = pole;
    ctx.fill();

    ctx.restore();

    requestAnimationFrame(draw);
  }

  draw();
}

document.addEventListener('DOMContentLoaded', initCursor);
setTimeout(initCursor, 300);
