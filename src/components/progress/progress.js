import './progress.css';

class ScrollProgressRing extends HTMLElement {
  constructor() {
    super();

    const R = 20;
    const CIRC = 2 * Math.PI * R;
    this.CIRC = CIRC;
    this.R = R;

    this.innerHTML = `
      <div class="progress-container" id="progress-container">
        <div class="progress-ring" id="progress-ring">
          <svg class="orbit-track" viewBox="0 0 44 44" aria-hidden="true">
            <circle class="track" cx="22" cy="22" r="${R}"/>
            <circle class="fill" cx="22" cy="22" r="${R}"
              stroke-dasharray="${CIRC.toFixed(3)}"
              stroke-dashoffset="${CIRC.toFixed(3)}"
            />
          </svg>
          <div class="progress-sun" id="progress-sun"></div>
          <div class="progress-arrow">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M10.588 5.587c.781-.781 2.05-.781 2.83 0l9.996 9.996a2.002 2.002 0 0 1-2.83 2.83L12 9.83l-8.584 8.578a2.002 2.002 0 0 1-2.83-2.83l9.996-9.996Z"/>
            </svg>
          </div>
        </div>
      </div>
    `;

    this.progressContainer = this.querySelector('#progress-container');
    this.progressRing = this.querySelector('#progress-ring');
    this.sun = this.querySelector('#progress-sun');
    this.fillCircle = this.querySelector('.fill');
    this.updateProgress = this.updateProgress.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  connectedCallback() {
    window.addEventListener('scroll', this.updateProgress, { passive: true });
    this.progressContainer.addEventListener('click', this.scrollToTop);
    this.updateProgress();
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.updateProgress);
    this.progressContainer.removeEventListener('click', this.scrollToTop);
  }

  updateProgress() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;

    this.progressContainer.classList.toggle('visible', scrollTop > 80);

    // SVG arc progress
    this.fillCircle.style.strokeDashoffset = (this.CIRC * (1 - pct)).toFixed(3);

    // Calculate sun position directly from ring pixel size
    const ringSize = this.progressRing.offsetWidth;
    const cx = ringSize / 2;
    const cy = ringSize / 2;
    // Arc radius in pixels: r=20 in viewBox=44, scaled to actual ring size
    const arcR = (this.R / 22) * cx;
    const sunSize = 8;
    // Angle: start at top (-90deg), travel clockwise
    const angle = -Math.PI / 2 + pct * Math.PI * 2;
    const sx = cx + Math.cos(angle) * arcR - sunSize / 2;
    const sy = cy + Math.sin(angle) * arcR - sunSize / 2;

    this.sun.style.left = `${sx}px`;
    this.sun.style.top = `${sy}px`;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

if (!customElements.get('scroll-progress-ring')) {
  customElements.define('scroll-progress-ring', ScrollProgressRing);
}
