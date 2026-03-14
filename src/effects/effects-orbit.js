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
  });
}

window.addEventListener('hashchange', () => setTimeout(initOrbit, 300));
document.addEventListener('DOMContentLoaded', () => setTimeout(initOrbit, 300));
setTimeout(initOrbit, 800);
