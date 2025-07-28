class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <section id="hero" class="hero bg-texture">
        <div class="hero-container">
          <div class="hero-portrait">
            <svg class="icon hero-icon" focusable="false" role="img" aria-label="Portrait - photo of Yulia Savinkova.">
              <use href="#icon-custom-hero-background"></use>
            </svg>
          </div>
          <social-icons></social-icons>
          <div class="hero-heading">
            <h1>Yulia Savinkova</h1>
            <h2>Software Engineer</h2>
            <h3>10+ years of experience</h3>
            <h4>MS in Computer Science</h4>
          </div>
          <div>
            <a href="#/about" class="button button-primary">Learn More</a>
            <a href="#/contact" class="button button-action">Contact</a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-component', HeroComponent);
