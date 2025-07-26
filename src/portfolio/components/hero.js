class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.getTemplate();
    this.loadParticles();
  }

  getTemplate() {
    return `
      <section id="hero" class="hero bg-texture">
        <div id="particles-js"></div>
        <div class="hero-container">
          <div class="hero-portrait">  
            <img src="./images/hero-background.svg" alt="Portrait - photo of Yulia Savinkova." />
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

  loadParticles() {
    if (!window.particlesJS) {
      // Create a script element for particles.js
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js';
      script.onload = () => {
        this.initParticles();
      };
      document.body.appendChild(script);
    } else {
      this.initParticles();
    }
  }

  initParticles() {
    import('../../portfolio/components/particles.js')
      .then(({ particlesConfig }) => {
        particlesJS('particles-js', particlesConfig);
      })
      .catch((err) => console.error('Particles.js config loading failed', err));
  }
}

customElements.define('hero-component', HeroComponent);
