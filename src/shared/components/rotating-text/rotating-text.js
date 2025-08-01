import './rotating-text.css';

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
      console.error('Invalid JSON for data-titles attribute on rotating-text component.');
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
