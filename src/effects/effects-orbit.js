import './effects-orbit.css';

function initOrbit() {
  const cluster = document.querySelector('.hero-portrait-cluster');
  if (!cluster || cluster.dataset.orbitInit) return;

  const frame = cluster.querySelector('.hero-portrait-frame');
  if (!frame) return;

  // Wait for layout so offsetWidth is accurate
  requestAnimationFrame(() => {
    cluster.dataset.orbitInit = '1';
    const size = frame.offsetWidth;
    const ringSize = size + 64;
    const coronaSize = size + 140;

    // Make cluster the positioning parent
    cluster.style.position = 'relative';

    // Corona
    const corona = document.createElement('div');
    corona.className = 'orbit-corona';
    corona.style.cssText = `
      width: ${coronaSize}px;
      height: ${coronaSize}px;
      background: radial-gradient(circle,
        hsla(38, 90%, 55%, 0.18) 0%,
        hsla(32, 85%, 45%, 0.08) 45%,
        transparent 70%
      );
    `;

    // Ring — centred on the frame, not the cluster
    const frameRect = frame.getBoundingClientRect();
    const clusterRect = cluster.getBoundingClientRect();
    const offsetTop = frameRect.top - clusterRect.top + frame.offsetHeight / 2;
    const offsetLeft = frameRect.left - clusterRect.left + frame.offsetWidth / 2;

    const ring = document.createElement('div');
    ring.className = 'orbit-ring';
    ring.style.cssText = `
      width: ${ringSize}px;
      height: ${ringSize}px;
      top: ${offsetTop}px;
      left: ${offsetLeft}px;
    `;

    corona.style.top = `${offsetTop}px`;
    corona.style.left = `${offsetLeft}px`;

    cluster.appendChild(corona);
    cluster.appendChild(ring);

    // Sparks around portrait edge on hover
    frame.addEventListener('mouseenter', () => {
      const rect = frame.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const r = rect.width / 2;
      const count = 12;

      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          // Random point on circle edge
          const angle = Math.random() * Math.PI * 2;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;

          // Dispatch a custom burst event picked up by effects-burst.js
          // or draw directly on burst canvas if available
          const burstCanvas = document.querySelector('.burst-canvas');
          if (!burstCanvas) return;
          const ctx = burstCanvas.getContext('2d');

          const amber = Math.random() > 0.4;
          const color = amber ? `rgba(255,185,60,` : `rgba(200,240,255,`;
          const size = 0.8 + Math.random() * 1.5;
          const speed = 0.5 + Math.random() * 1.2;
          // Spark flies outward from edge
          const vx = Math.cos(angle) * speed;
          const vy = Math.sin(angle) * speed;

          let alpha = 0.8;
          let px = x,
            py = y;

          function drawSpark() {
            if (alpha <= 0) return;
            const glow = ctx.createRadialGradient(px, py, 0, px, py, size * 3);
            glow.addColorStop(0, `${color}${alpha.toFixed(3)})`);
            glow.addColorStop(1, `${color}0)`);
            ctx.beginPath();
            ctx.arc(px, py, size * 3, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();
            px += vx;
            py += vy;
            alpha -= 0.025;
            requestAnimationFrame(drawSpark);
          }
          drawSpark();
        }, i * 30);
      }
    });
  });
}

window.addEventListener('hashchange', () => setTimeout(initOrbit, 300));
document.addEventListener('DOMContentLoaded', () => setTimeout(initOrbit, 300));
setTimeout(initOrbit, 800);
