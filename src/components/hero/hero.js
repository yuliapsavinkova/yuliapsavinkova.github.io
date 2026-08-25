import '../rotating-text.js';
import '../social-icons.js';

class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="hero" class="hero">
        <div class="hero-container container">
          <div class="hero-content">
            <div class="hero-social-wrap">
              <social-icons mode="default"></social-icons>
            </div>

            <div class="hero-status-wrap">
              <div class="status-pill">
                <span class="status-dot"></span>
                <span>Available for new opportunities</span>
              </div>
            </div>

            <h1 class="hero-greeting">Hi, I'm Yulia</h1>
            <rotating-text data-titles='[
              "Staff Software Engineer",
              "Full-Stack Architect",
              "Design Systems Enthusiast",
              "Open Source Builder"
            ]'></rotating-text>
            
            <p class="hero-bio">
              Building performant, accessible web applications and robust digital experiences with modern JavaScript & TypeScript. Over a decade of engineering experience across Bloomberg, Yahoo, and MuleSoft.
            </p>

            <div class="hero-actions">
              <div class="hero-buttons">
                <a href="#/work" class="button button-primary">Explore Work</a>
                <a href="#/contact" class="button button-secondary">Contact Me</a>
              </div>
            </div>
          </div>

          <div class="hero-portrait-card">
            <div class="hero-portrait-media">
              <img
                src="./images/portrait-900.webp"
                srcset="
                  ./images/portrait-400.webp  400w,
                  ./images/portrait-600.webp  600w,
                  ./images/portrait-900.webp  900w,
                  ./images/portrait-1200.webp 1200w
                "
                sizes="(max-width: 600px) 90vw, (max-width: 899px) 24rem, 30rem"
                width="900"
                height="1200"
                alt="Portrait of Yulia"
                fetchpriority="high"
                decoding="async"
              >
            </div>
          </div>
        </div>

        <button class="hero-scroll" aria-label="Scroll down">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </section>
    `;

    this.querySelector('.hero-scroll')?.addEventListener('click', () => {
      document.querySelector('main > section:nth-of-type(2)')?.scrollIntoView({ behavior: 'smooth' }) ||
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    });
  }
}

customElements.define('hero-component', HeroComponent);

