import './effects-stars.css';

function initStars() {
  if (document.querySelector('.stars-canvas')) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'stars-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Keep stars in top strip and side margins to avoid content
  function starPosition() {
    const zone = Math.random();
    if (zone < 0.6) {
      return { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight * 0.3 };
    } else if (zone < 0.8) {
      return { x: Math.random() * window.innerWidth * 0.15, y: Math.random() * window.innerHeight };
    } else {
      return {
        x: window.innerWidth * 0.85 + Math.random() * window.innerWidth * 0.15,
        y: Math.random() * window.innerHeight,
      };
    }
  }

  const STATIC_COUNT = 20;
  const statics = Array.from({ length: STATIC_COUNT }, () => {
    const pos = starPosition();
    return {
      x: pos.x,
      y: pos.y,
      r: 0.8 + Math.random() * 2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.5,
    };
  });

  let shooter = null;
  let lastSpawn = 0;
  const INTERVAL = 1000; // one star per second

  function newShooter() {
    return {
      x: window.innerWidth * (0.05 + Math.random() * 0.5),
      y: Math.random() * window.innerHeight * 0.15,
      len: 18 + Math.random() * 12, // short tail
      speed: 0.9 + Math.random() * 0.6, // slow
      angle: ((30 + Math.random() * 15) * Math.PI) / 180, // 30-45deg diagonal
      alpha: 0,
      travelled: 0,
      total: window.innerHeight * (0.18 + Math.random() * 0.12),
    };
  }

  let lastTime = 0;

  function draw(ts) {
    const dt = Math.min(ts - lastTime, 32);
    lastTime = ts;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Passive twinkling stars
    statics.forEach((s) => {
      const a = 0.06 + 0.4 * (0.5 + 0.5 * Math.sin(ts * 0.001 * s.speed + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
      ctx.fill();
    });

    // Spawn shooter
    if (!shooter && ts - lastSpawn >= INTERVAL) {
      shooter = newShooter();
      lastSpawn = ts;
    }

    if (shooter) {
      const px = shooter.speed * (dt / 16);
      shooter.x += Math.cos(shooter.angle) * px;
      shooter.y += Math.sin(shooter.angle) * px;
      shooter.travelled += px;

      const ratio = shooter.travelled / shooter.total;
      shooter.alpha = ratio < 0.1 ? ratio / 0.1 : ratio > 0.8 ? (1 - ratio) / 0.2 : 1;

      if (shooter.travelled >= shooter.total) {
        shooter = null;
      } else {
        const tx = shooter.x - Math.cos(shooter.angle) * shooter.len;
        const ty = shooter.y - Math.sin(shooter.angle) * shooter.len;

        const g = ctx.createLinearGradient(tx, ty, shooter.x, shooter.y);
        g.addColorStop(0, `rgba(255,255,255,0)`);
        g.addColorStop(1, `rgba(255,255,255,${(shooter.alpha * 0.85).toFixed(3)})`);
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(shooter.x, shooter.y);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Head glow
        const glow = ctx.createRadialGradient(shooter.x, shooter.y, 0, shooter.x, shooter.y, 4);
        glow.addColorStop(0, `rgba(200,240,255,${shooter.alpha.toFixed(3)})`);
        glow.addColorStop(1, `rgba(200,240,255,0)`);
        ctx.beginPath();
        ctx.arc(shooter.x, shooter.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

document.addEventListener('DOMContentLoaded', initStars);
setTimeout(initStars, 500);
