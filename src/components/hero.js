import './rotating-text.js';

class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .hero {
          width: 100%;
          min-width: 20rem;
          min-height: calc(100svh - var(--header-size));
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: var(--gap-small);
        }

        .hero-heading {
          text-align: center;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--gap-tiny);
        }

        .hero-image-portrait {
          height: 50%;
          aspect-ratio: 1 / 1;
          border-radius: var(--border-radius-lg);
        }
      </style>
      <section id="hero" class="hero bg-texture">
        <img src="./images/portrait-900.webp"
            srcset="./images/portrait-400.webp 400w, 
                    ./images/portrait-600.webp 600w, 
                    ./images/portrait-900.webp 900w, 
                    ./images/portrait-1200.webp 1200w"
            sizes="(max-width: 600px) 90vw, 50vh"
            alt="Portrait of Yulia"
            class="hero-image-portrait"
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
