import './progress.css';

class ScrollProgressRing extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class="progress-container" id="progress-container">
        <div class="progress-ring" id="progress-ring">
          <div class="progress-arrow">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M10.588 5.587c.781-.781 2.05-.781 2.83 0l9.996 9.996a2.002 2.002 0 0 1-2.83 2.83L12 9.83l-8.584 8.578a2.002 2.002 0 0 1-2.83-2.83l9.996-9.996Z" />
            </svg>
          </div>
        </div>
      </div>
    `;

    this.progressContainer = this.querySelector('#progress-container');
    this.progressRing = this.querySelector('#progress-ring');

    this.updateProgress = this.updateProgress.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  connectedCallback() {
    window.addEventListener('scroll', this.updateProgress);
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
    const scrollPercent = Math.min((scrollTop / scrollHeight) * 100, 100);

    // Show the progress container only after some scrolling
    this.progressContainer.classList.toggle('visible', scrollTop > 80);

    this.progressRing.style.setProperty('--scroll-progress', `${scrollPercent}%`);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

customElements.define('scroll-progress-ring', ScrollProgressRing);
