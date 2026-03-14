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

  const ORBIT_R = 14; // orbit radius
  const ORBIT_SPD = 0.06; // radians per frame
  const SUN_R = 4; // sun dot radius
  const PLANET_R = 2.5; // planet dot radius

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle += ORBIT_SPD;

    const scale = clicking ? 0.75 : 1;

    // Sun glow
    const sunGlow = ctx.createRadialGradient(mx, my, 0, mx, my, SUN_R * 4 * scale);
    sunGlow.addColorStop(0, `rgba(255,185,60,${clicking ? 0.9 : 0.7})`);
    sunGlow.addColorStop(1, `rgba(255,185,60,0)`);
    ctx.beginPath();
    ctx.arc(mx, my, SUN_R * 4 * scale, 0, Math.PI * 2);
    ctx.fillStyle = sunGlow;
    ctx.fill();

    // Sun core
    ctx.beginPath();
    ctx.arc(mx, my, SUN_R * scale, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,210,90,${clicking ? 1 : 0.9})`;
    ctx.fill();

    // Orbit trail — faint dashed ring
    ctx.beginPath();
    ctx.arc(mx, my, ORBIT_R * scale, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(120,210,200,0.12)`;
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Planet position
    const px = mx + Math.cos(angle) * ORBIT_R * scale;
    const py = my + Math.sin(angle) * ORBIT_R * scale;

    // Planet glow
    const planetGlow = ctx.createRadialGradient(px, py, 0, px, py, PLANET_R * 3);
    planetGlow.addColorStop(0, `rgba(100,220,210,0.6)`);
    planetGlow.addColorStop(1, `rgba(100,220,210,0)`);
    ctx.beginPath();
    ctx.arc(px, py, PLANET_R * 3, 0, Math.PI * 2);
    ctx.fillStyle = planetGlow;
    ctx.fill();

    // Planet core
    ctx.beginPath();
    ctx.arc(px, py, PLANET_R * scale, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(150,235,225,0.95)`;
    ctx.fill();

    requestAnimationFrame(draw);
  }

  draw();
}

document.addEventListener('DOMContentLoaded', initCursor);
setTimeout(initCursor, 300);
