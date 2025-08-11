import './rotating-text.js';

class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .hero {
          width: 100%;
          min-width: 20rem;
          height: calc(100dvh - var(--header-size));
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: var(--gap-small);
        }

        .hero-heading,
        .hero-buttons {
          text-align: center;
        }

        .hero-image {
          width: 100%;
          max-width: 40rem;
          height: auto;
          aspect-ratio: 2 / 1;
          object-fit: contain;
        }
      </style>
      <section id="hero" class="hero bg-texture">
        <img src="./images/hero-small.webp"
              alt="hero image"
              class="hero-image"
              fetchpriority="high"
              decoding="async">
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
      </section>
    `;
  }
}

customElements.define('hero-component', HeroComponent);
