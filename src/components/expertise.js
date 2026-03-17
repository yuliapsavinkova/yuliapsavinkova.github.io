import './card.css';

class ExpertiseComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="expertise">
        <section-header
          title="My Expertise"
          sub-title="Transforming Ideas into Code">
        </section-header>

        <div class="card-grid">
          <div class="card">
            <div class="card-image">
              <div class="card-image-inner">
                <img
                src="./images/011-600.webp"
                srcset="
                  ./images/011-400.webp  400w,
                  ./images/011-600.webp  600w,
                  ./images/011-900.webp  900w
                "
                sizes="(max-width: 768px) 100vw, 26rem"
                width="600"
                height="600"
                alt="Custom Solutions"
                loading="lazy"
                decoding="async"
              />
              </div>
            </div>
            <div class="card-content">
              <h2>Custom Solutions</h2>
              <p>High-performance sites built with <strong>Next.js</strong>. I deliver SEO-optimized, production-ready experiences that are reliable and easy to update.</p>
              <a href="#/work?section=work-row-web" aria-label="Go to Custom Solutions section">
                <svg class="icon enable-icon-scale" aria-hidden="true">
                  <use href="#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <div class="card-image-inner">
                <img
                src="./images/022-600.webp"
                srcset="
                  ./images/022-400.webp  400w,
                  ./images/022-600.webp  600w,
                  ./images/022-900.webp  900w
                "
                sizes="(max-width: 768px) 100vw, 26rem"
                width="600"
                height="600"
                alt="Web Applications"
                loading="lazy"
                decoding="async"
              />
              </div>
            </div>
            <div class="card-content">
              <h2>Web Applications</h2>
              <p>Dynamic applications built with <strong>React and Angular</strong>. I focus on clean architecture, state management, and long-term maintainability.</p>
              <a href="#/work?section=work-row-app" aria-label="Go to Web Applications section">
                <svg class="icon enable-icon-scale" aria-hidden="true">
                  <use href="#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <div class="card-image-inner">
                <img
                src="./images/033-600.webp"
                srcset="
                  ./images/033-400.webp  400w,
                  ./images/033-600.webp  600w,
                  ./images/033-900.webp  900w
                "
                sizes="(max-width: 768px) 100vw, 26rem"
                width="600"
                height="600"
                alt="Financial Tools"
                loading="lazy"
                decoding="async"
              />
              </div>
            </div>
            <div class="card-content">
              <h2>Financial Tools</h2>
              <p>I integrate web applications with <strong>Excel and Google Sheets</strong> to automate market data syncing, portfolio tracking, and custom strategy analysis.</p>
              <a href="#/work?section=work-row-fin" aria-label="Go to Financial Tools section">
                <svg class="icon enable-icon-scale" aria-hidden="true">
                  <use href="#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <a href="#/work" class="button button-secondary">Learn More</a>
      </section>
    `;
  }
}

customElements.define('expertise-component', ExpertiseComponent);
