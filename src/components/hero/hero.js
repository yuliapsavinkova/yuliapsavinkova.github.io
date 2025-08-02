import './hero.css';
import '../rotating-text.js';

class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="hero" class="hero bg-texture">
        <div class="hero-container">
          <div>
            <img
              src="./images/hero-small.webp"
              alt="hero image"
              class="hero-image"
              fetchpriority="high"
              decoding="async"
            >
          </div>
          <div class="hero-heading">
            <h1>Hello, I'm Yulia</h1>
            <rotating-text data-titles='[
                "Software Engineer",
                "Web Developer",
                "Animal Lover"
            ]'></rotating-text>
          </div>
          <div class="hero-buttons">
            <a href="#/about" class="button button-primary">Learn More</a>
            <a href="#/contact" class="button button-action">Contact</a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-component', HeroComponent);
