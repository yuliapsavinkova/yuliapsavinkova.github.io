class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.getTemplate();
    this.initTypewriterEffect();
  }

  getTemplate() {
    return `
      <section id="hero" class="hero bg-texture">
        <div class="hero-container">
          <div>
            <img src="./images/hero.png" alt="hero image" class="hero-image">
          </div>
          <div class="hero-heading">
            <h1>Yulia Savinkova</h1>
            <h2 class="rotating-subtitle">
              <span id="subtitle"></span>
              <span class="cursor">|</span>
            </h2>
          </div>
          <div>
            <a href="#/about" class="button button-primary">Learn More</a>
            <a href="#/contact" class="button button-action">Contact</a>
          </div>
        </div>
      </section>
    `;
  }

  initTypewriterEffect() {
    const titles = [
      'Software Engineer',
      'Web Developer',
      'Frontend Specialist',
      'UI/UX Enthusiast',
      'Creative Coder',
      'Animal Lover',
    ];

    const subtitleEl = this.querySelector('#subtitle');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = titles[titleIndex];
      const visibleText = isDeleting
        ? current.substring(0, charIndex--)
        : current.substring(0, charIndex++);

      subtitleEl.textContent = visibleText;

      if (!isDeleting && charIndex === current.length + 1) {
        setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }

      const speed = isDeleting ? 50 : 100;
      setTimeout(type, speed);
    };

    type();
  }
}

customElements.define('hero-component', HeroComponent);
