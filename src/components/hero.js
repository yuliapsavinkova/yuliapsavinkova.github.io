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
          position: relative; 
          padding: 0 var(--padding-inline);
        }
        .hero-banner {
          display: none;
        }
        .hero-image-portrait {
          width: auto;
          height: 50vh;
          aspect-ratio: 4 / 3;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-lg);
          object-fit: cover;
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
            display: block;
            background-color: var(--color-primary); 
            position: absolute; 
            top: 0;
            left: 0;
            right: 0;
            height: 50%;
            z-index: -1; 
          }

          .hero-banner::before {
            content: '';
            position: absolute;
            inset: 0;
            background: url('/images/banner-bg.png') no-repeat;
            background-size: cover;
            opacity: 0.9;
            mix-blend-mode: luminosity; 
            pointer-events: none;
          }
          .hero-image-portrait {
            border: 4px solid var(--white);
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
          fetchpriority="high"
          loading="eager"
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
