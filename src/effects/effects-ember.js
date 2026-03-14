import './effects-ember.css';

/* ═══════════════════════════════════════════════════════════
   EMBER PARTICLES — spawns rising amber dots on hover
   Isolated: remove this import from main.js to disable.
═══════════════════════════════════════════════════════════ */

function spawnEmbers(target) {
  const count = 5;
  const rect = target.getBoundingClientRect();

  for (let i = 0; i < count; i++) {
    const ember = document.createElement('span');
    ember.className = 'ember-particle';

    const x = Math.random() * rect.width;
    const drift = (Math.random() - 0.5) * 1.5;
    const dur = 0.8 + Math.random() * 0.8;
    const del = Math.random() * 0.3;

    ember.style.cssText = `
      left: ${x}px;
      bottom: 0;
      --drift: ${drift}rem;
      --dur: ${dur}s;
      --del: ${del}s;
    `;

    target.appendChild(ember);
    ember.addEventListener('animationend', () => ember.remove());
  }
}

function initEmbers() {
  // Use event delegation on body so it works regardless of render timing
  document.body.addEventListener(
    'mouseenter',
    (e) => {
      const target = e.target.closest(
        '.button-primary, .button-secondary, .button-action, .nav-link.active',
      );
      if (target) spawnEmbers(target);
    },
    true,
  );
}

document.addEventListener('DOMContentLoaded', initEmbers);
