import './effects-cursor.css';

function initCursor() {
  if (document.querySelector('.cursor-canvas')) return;

  // Disable on touch devices
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

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

  let mx = -200,
    my = -200;
  let angle = 0;
  let clicking = false;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });
  document.addEventListener('mousedown', () => (clicking = true));
  document.addEventListener('mouseup', () => (clicking = false));

  // Cursor dot — small crosshair centre
  const CURSOR_R = 3;
  // Mars orbit around cursor
  const ORBIT_R = 18;
  const ORBIT_SPD = 0.055;
  const MARS_R = 7;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle += ORBIT_SPD;

    const scale = clicking ? 0.85 : 1;

    // Crosshair at exact cursor position
    const cs = 5 * scale; // arm length
    const cw = clicking ? 0.8 : 0.5;
    ctx.strokeStyle = `rgba(255,255,255,${clicking ? 1 : 0.75})`;
    ctx.lineWidth = cw;
    ctx.beginPath();
    ctx.moveTo(mx - cs, my);
    ctx.lineTo(mx + cs, my);
    ctx.moveTo(mx, my - cs);
    ctx.lineTo(mx, my + cs);
    ctx.stroke();
    // Centre dot
    ctx.beginPath();
    ctx.arc(mx, my, 1.5 * scale, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${clicking ? 1 : 0.9})`;
    ctx.fill();

    // Mars position — orbits around cursor
    const marsX = mx + Math.cos(angle) * ORBIT_R * scale;
    const marsY = my + Math.sin(angle) * ORBIT_R * scale;
    const r = MARS_R * scale;

    // Atmosphere rim glow
    const atmo = ctx.createRadialGradient(marsX, marsY, r * 0.7, marsX, marsY, r * 1.6);
    atmo.addColorStop(0, `rgba(200,80,40,0)`);
    atmo.addColorStop(0.6, `rgba(180,60,30,0.12)`);
    atmo.addColorStop(1, `rgba(180,60,30,0)`);
    ctx.beginPath();
    ctx.arc(marsX, marsY, r * 1.6, 0, Math.PI * 2);
    ctx.fillStyle = atmo;
    ctx.fill();

    // Sphere shading
    const sphere = ctx.createRadialGradient(
      marsX - r * 0.35,
      marsY - r * 0.35,
      r * 0.1,
      marsX,
      marsY,
      r,
    );
    sphere.addColorStop(0, `rgba(235,130,85,0.95)`);
    sphere.addColorStop(0.4, `rgba(190,75,45,0.95)`);
    sphere.addColorStop(0.8, `rgba(130,40,20,0.95)`);
    sphere.addColorStop(1, `rgba(80,20,10,0.95)`);

    ctx.beginPath();
    ctx.arc(marsX, marsY, r, 0, Math.PI * 2);
    ctx.fillStyle = sphere;
    ctx.fill();

    // Canyon stripe
    ctx.save();
    ctx.beginPath();
    ctx.arc(marsX, marsY, r, 0, Math.PI * 2);
    ctx.clip();
    ctx.beginPath();
    ctx.ellipse(marsX + r * 0.1, marsY + r * 0.05, r * 0.55, r * 0.08, -0.2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(80,25,10,0.35)`;
    ctx.fill();

    // Polar ice cap
    const pole = ctx.createRadialGradient(
      marsX,
      marsY - r * 0.75,
      0,
      marsX,
      marsY - r * 0.75,
      r * 0.4,
    );
    pole.addColorStop(0, `rgba(240,230,220,0.6)`);
    pole.addColorStop(1, `rgba(240,230,220,0)`);
    ctx.beginPath();
    ctx.arc(marsX, marsY - r * 0.75, r * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = pole;
    ctx.fill();
    ctx.restore();

    requestAnimationFrame(draw);
  }

  draw();
}

document.addEventListener('DOMContentLoaded', initCursor);
setTimeout(initCursor, 300);
