class RotatingText extends HTMLElement {
  constructor() {
    super();
    this.titles = [];
    this.titleIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.lastFrameTime = 0;
    this.typeSpeed = 75;
    this.deleteSpeed = 35;
  }

  connectedCallback() {
    this.render();
    this.init();
  }

  render() {
    this.innerHTML = `
      <style>
        rotating-text {
          display: inline-block;
          width: 100%;
        }

        .typewriter-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 2.5rem;
        }

        .typewriter-text {
          font-family: var(--font-sans);
          font-weight: var(--weight-bold);
          font-size: clamp(1.4rem, 3.2vw, 2.25rem);
          letter-spacing: var(--tracking-tight);
          color: var(--text-primary);
          white-space: pre;
          line-height: var(--leading-tight);
        }

        .cursor {
          font-family: var(--font-sans);
          font-size: clamp(1.4rem, 3.2vw, 2.25rem);
          font-weight: 300;
          color: var(--accent-primary);
          line-height: var(--leading-tight);
          margin-left: 2px;
          animation: twBlink 1s step-end infinite;
        }

        @keyframes twBlink {
          50% { opacity: 0; }
        }
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
          }, 1500);
        }
      }
    }
    requestAnimationFrame(this.type);
  }
}

customElements.define('rotating-text', RotatingText);
