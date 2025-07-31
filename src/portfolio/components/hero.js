class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <section id="hero" class="hero bg-texture">
        <div class="hero-container">
          <!--<div class="hero-portrait">
            <svg class="icon hero-icon" focusable="false" role="img" aria-label="Portrait - photo of Yulia Savinkova.">
              <use href="#icon-custom-hero-background"></use>
            </svg>
          </div>-->
          <social-icons></social-icons>
          <div>
            <img src="./images/hero.png" alt="hero image" class="hero-image">
          </div>
          <div class="hero-heading">
            <h1>Yulia Savinkova</h1>
            <h2>Software Engineer</h2>
            <!--<p class="large">10+ years of experience</p>
            <p class="large">MS in Computer Science</p>-->
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
