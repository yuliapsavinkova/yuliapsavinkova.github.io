import './rotating-text.js';
import './social-icons.js';

class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .hero {
          width: 100%;
          min-height: calc(100svh - var(--header-size));
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center; 
          align-items: center;
          gap: var(--gap-small);
          padding: 0 var(--padding-inline);
        }

        .hero-banner, .hero-banner::before {
            border-radius: var(--border-radius-lg);
        }
        .hero-banner {
            display: block;
            background-color: var(--color-primary); 
            position: absolute; 
            top: 3rem;
            left: 0;
            right: 0;
            height: 50%;
            z-index: -1; 
        }

        .hero-banner::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url('/images/banner-bg-mobile.webp'); /* Mobile (Vertical) Image */
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0.9;
            mix-blend-mode: luminosity; 
            pointer-events: none;
        }

        .hero-image-portrait {
          width: auto;
          height: 45vh;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          border-radius: var(--border-radius-lg);
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

        @media (min-width: 768px) {
          .hero {
            padding: var(--gap-large) 0;
          }

          .hero-banner {
            margin: 0 1rem;
          }

          .hero-banner::before {
              background-image: url('/images/banner-bg-tablet.webp');
          }
        }

        @media (min-width: 1025px) {
          .hero-banner::before {
              background-image: url('/images/banner-bg-desktop.webp');
          }
        }
      </style>
      <section id="hero" class="hero">
        <div class="hero-banner"></div> 
        <img
          src="./images/portrait-900.webp"
          srcset="
            ./images/portrait-400.webp 400w,
            ./images/portrait-600.webp 600w,
            ./images/portrait-900.webp 900w,
            ./images/portrait-1200.webp 1200w
          "
          sizes="(max-width: 600px) 90vw, 50vw"
          width="900"
          height="1200"
          alt="Portrait of Yulia"
          class="hero-image-portrait"
        >
        <social-icons></social-icons>
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
