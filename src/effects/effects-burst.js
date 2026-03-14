import './effects-burst.css';

function initBurst() {
  if (document.querySelector('.burst-canvas')) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'burst-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const particles = [];

  function burst(x, y) {
    const count = 8;
    for (let i = 0; i < count; i++) {
      const angle = ((Math.PI * 2) / count) * i;
      const speed = 0.6 + Math.random() * 1.2;
      const amber = Math.random() > 0.5;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 0.7,
        size: 0.8 + Math.random() * 1.2,
        decay: 0.018 + Math.random() * 0.01,
        color: amber ? `rgba(255,185,60,` : `rgba(200,240,255,`,
      });
    }
  }

  document.body.addEventListener(
    'mouseenter',
    (e) => {
      const target = e.target.closest(
        '.logo, .nav-link, .button, .button-action, .button-primary, .button-secondary',
      );
      if (!target) return;
      const rect = target.getBoundingClientRect();
      burst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    },
    true,
  );

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
      glow.addColorStop(0, `${p.color}${p.alpha.toFixed(3)})`);
      glow.addColorStop(1, `${p.color}0)`);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.02;
      p.vx *= 0.96;
      p.vy *= 0.96;
      p.alpha -= p.decay;

      if (p.alpha <= 0) particles.splice(i, 1);
    }

    requestAnimationFrame(draw);
  }

  draw();
}

document.addEventListener('DOMContentLoaded', initBurst);
setTimeout(initBurst, 500);
