import './effects-stars.css';

function initStars() {
  const hero = document.querySelector('.hero');
  if (!hero || hero.dataset.starsInit) return;
  hero.dataset.starsInit = '1';

  const canvas = document.createElement('canvas');
  canvas.className = 'stars-canvas';
  hero.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const STATIC_COUNT = 40;

  const statics = Array.from({ length: STATIC_COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * 0.7,
    r: Math.random() * 2 + 0.8,
    phase: Math.random() * Math.PI * 2,
    speed: 0.3 + Math.random() * 0.5,
  }));

  // Only one shooter active at a time, spawned every ~30 frames (0.5s at 60fps)
  let shooter = null;
  let spawnTimer = 0;
  const SPAWN_INTERVAL = 30;

  function spawnShooting() {
    // Always start from top edge, travel downward with slight horizontal drift
    const x = canvas.width * (0.1 + Math.random() * 0.8);
    const y = 0;
    // 70-110deg = mostly downward, slight left or right lean (90deg = straight down)
    const angle = ((70 + Math.random() * 40) * Math.PI) / 180;
    return {
      x,
      y,
      len: 80 + Math.random() * 50,
      speed: 4 + Math.random() * 2,
      angle,
      alpha: 0,
      totalDist: canvas.height * (0.4 + Math.random() * 0.3),
      travelled: 0,
    };
  }

  let frame = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;
    spawnTimer++;

    // Spawn new shooter every SPAWN_INTERVAL frames
    if (!shooter && spawnTimer >= SPAWN_INTERVAL) {
      shooter = spawnShooting();
      spawnTimer = 0;
    }

    // Static stars
    statics.forEach((s) => {
      const alpha = 0.06 + 0.4 * (0.5 + 0.5 * Math.sin(frame * s.speed * 0.02 + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fill();
    });

    // Active shooter
    if (shooter) {
      const vx = Math.cos(shooter.angle) * shooter.speed;
      const vy = Math.sin(shooter.angle) * shooter.speed;
      shooter.x += vx;
      shooter.y += vy;
      shooter.travelled += shooter.speed;

      const ratio = shooter.travelled / shooter.totalDist;
      if (ratio < 0.1) shooter.alpha = ratio / 0.1;
      else if (ratio > 0.8) shooter.alpha = (1 - ratio) / 0.2;
      else shooter.alpha = 1;

      if (shooter.travelled >= shooter.totalDist) {
        shooter = null;
      } else {
        // Trail points opposite to travel direction
        const tx = shooter.x - Math.cos(shooter.angle) * shooter.len;
        const ty = shooter.y - Math.sin(shooter.angle) * shooter.len;

        const grad = ctx.createLinearGradient(tx, ty, shooter.x, shooter.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.6, `rgba(255,255,255,${shooter.alpha * 0.35})`);
        grad.addColorStop(1, `rgba(255,255,255,${shooter.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(shooter.x, shooter.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        const glow = ctx.createRadialGradient(shooter.x, shooter.y, 0, shooter.x, shooter.y, 7);
        glow.addColorStop(0, `rgba(200,240,255,${shooter.alpha})`);
        glow.addColorStop(1, `rgba(200,240,255,0)`);
        ctx.beginPath();
        ctx.arc(shooter.x, shooter.y, 7, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

window.addEventListener('hashchange', () => setTimeout(initStars, 100));
document.addEventListener('DOMContentLoaded', initStars);
setTimeout(initStars, 500);
