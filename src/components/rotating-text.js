class RotatingText extends HTMLElement {
  constructor() {
    super();
    // State for the typewriter effect
    this.titles = [];
    this.titleIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.lastFrameTime = 0;
    this.typeSpeed = 100;
    this.deleteSpeed = 50;
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
            vertical-align: middle;
          }
          .typewriter-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            min-width: 20ch;
          }
          .typewriter-text,
          .cursor {
            white-space: pre;
            font-size: 1.75rem;
            font-weight: 500;
            letter-spacing: 0em;
            line-height: 1.3;
            color: var(--primary-dark-color);
          }

          .cursor {
            display: inline-block;
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            50% {
              opacity: 0;
            }
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
      console.error('Invalid JSON for data-titles attribute on rotating-text component:', e);
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
    const deltaTime = timestamp - this.lastFrameTime;
    const speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (deltaTime > speed) {
      this.lastFrameTime = timestamp;
      const current = this.titles[this.titleIndex];

      if (this.isDeleting) {
        this.textElement.textContent = current.substring(0, this.charIndex--);
        if (this.charIndex < 0) {
          this.isDeleting = false;
          this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        }
      } else {
        this.textElement.textContent = current.substring(0, this.charIndex++);
        if (this.charIndex > current.length) {
          setTimeout(() => {
            this.isDeleting = true;
          }, 1000);
        }
      }
    }
    requestAnimationFrame(this.type);
  }
}
customElements.define('rotating-text', RotatingText);
