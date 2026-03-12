import '../rotating-text.js';
import '../social-icons.js';

class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="hero" class="hero">
        <div class="hero-portrait-cluster">
          <div class="hero-portrait-frame">
            <div class="hero-portrait-inner">
              <img
                src="./images/portrait-900.webp"
                srcset="
                  ./images/portrait-400.webp  400w,
                  ./images/portrait-600.webp  600w,
                  ./images/portrait-900.webp  900w,
                  ./images/portrait-1200.webp 1200w
                "
                sizes="(max-width: 600px) 240px, 416px"
                width="900"
                height="1200"
                alt="Portrait of Yulia"
                fetchpriority="high"
                decoding="async"
              >
            </div>
          </div>

          <div class="hero-social-dock" aria-label="Social links">
            <social-icons mode="dock"></social-icons>
          </div>
        </div>

        <div class="hero-text">
          <p class="hero-greeting">Hello, I'm Yulia</p>
          <rotating-text data-titles='[
            "Software Engineer",
            "Web Developer",
            "Animal Lover"
          ]'></rotating-text>
        </div>

        <div class="hero-buttons">
          <a href="#/about"   class="button button-primary">Learn More</a>
          <a href="#/contact" class="button button-secondary">Contact</a>
        </div>

        <button class="hero-scroll" aria-label="Scroll to next section">
          <svg viewBox="0 0 16 16" fill="none"
               stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <polyline points="2,5 8,11 14,5"/>
          </svg>
        </button>
      </section>
    `;
    this.querySelector('.hero-scroll').addEventListener('click', () => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

customElements.define('hero-component', HeroComponent);
