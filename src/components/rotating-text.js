class RotatingText extends HTMLElement {
  constructor() {
    super();
    this.titles = [];
    this.titleIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.lastFrameTime = 0;
    this.typeSpeed = 90;
    this.deleteSpeed = 40;
  }

  connectedCallback() {
    this.render();
    this.init();
  }

  render() {
    this.innerHTML = `
      <style>
        rotating-text { display: inline-block; }

        .typewriter-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(var(--font-size-typewriter) * 1.4);
          min-width: 20ch;
        }

        .typewriter-text {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 200;
          font-size: var(--font-size-typewriter);
          letter-spacing: var(--tracking-tight);
          color: var(--color-text-90);
          white-space: pre;
          line-height: 1.3;
        }

        /* Amber cursor — the one warm spark in the hero */
        .cursor {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: var(--font-size-typewriter);
          font-weight: 200;
          color: var(--color-accent);
          line-height: 1.3;
          animation: twBlink 1.1s step-end infinite;
        }

        @keyframes twBlink { 50% { opacity: 0; } }
      </style>

      <div class="typewriter-container">
        <span class="typewriter-text"></span>
        <span class="cursor">|</span>
      </div>
    `;
  }

  init() {
    this.textElement = this.querySelector('.typewriter-text');
    try {
      this.titles = JSON.parse(this.getAttribute('data-titles')) || [];
    } catch (e) {
      console.error('rotating-text: invalid data-titles JSON', e);
      this.titles = [];
    }
    if (this.titles.length > 0) {
      this.type = this.type.bind(this);
      requestAnimationFrame(this.type);
    }
  }

  type(timestamp) {
    if (!this.textElement) return;
    if (!this.lastFrameTime) this.lastFrameTime = timestamp;
    const delta = timestamp - this.lastFrameTime;
    const speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (delta > speed) {
      this.lastFrameTime = timestamp;
      const current = this.titles[this.titleIndex];

      if (this.isDeleting) {
        this.textElement.textContent = current.substring(0, this.charIndex--);
        if (this.charIndex < 0) {
          this.isDeleting = false;
          this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        }
      } else {
        this.textElement.textContent = current.substring(0, this.charIndex);
        if (this.charIndex < current.length) {
          this.charIndex++;
        } else if (!this.deleteTimer) {
          this.deleteTimer = setTimeout(() => {
            this.isDeleting = true;
            this.deleteTimer = null;
          }, 1400);
        }
      }
    }
    requestAnimationFrame(this.type);
  }
}

customElements.define('rotating-text', RotatingText);
