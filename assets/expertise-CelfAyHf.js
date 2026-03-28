/* empty css             */class e extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="expertise">
        <section-header
          title="My Expertise"
          sub-title="Transforming Ideas into Code">
        </section-header>

        <div class="card-grid">

          <a href="#/work?section=work-row-web" class="card" aria-label="Go to Custom Solutions section">
            <div class="card-image">
              <img
                src="./images/011-600.webp"
                srcset="
                  ./images/011-400.webp 400w,
                  ./images/011-600.webp 600w,
                  ./images/011-900.webp 900w
                "
                sizes="(max-width: 768px) 100vw, 26rem"
                width="600"
                height="600"
                alt="Custom Solutions"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="card-content">
              <h2>Custom Solutions</h2>
              <div class="card-tag">
                High-performance sites built with <strong>Next.js</strong>.
              </div>
              <p>
                SEO-optimized, production-ready experiences that work across all screen sizes.
              </p>
              <svg class="icon enable-icon-scale" aria-hidden="true">
                <use href="#icon-arrow-right"></use>
              </svg>
            </div>
          </a>

          <a href="#/work?section=work-row-app" class="card" aria-label="Go to Web Applications section">
            <div class="card-image">
              <img
                src="./images/022-600.webp"
                srcset="
                  ./images/022-400.webp 400w,
                  ./images/022-600.webp 600w,
                  ./images/022-900.webp 900w
                "
                sizes="(max-width: 768px) 100vw, 26rem"
                width="600"
                height="600"
                alt="Web Applications"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="card-content">
              <h2>Web Applications</h2>
              <div class="card-tag">
                Dynamic applications built with <strong>React and Angular</strong>.
              </div>
              <p>
                Clean architecture, scalable state management, and long-term maintainability.
              </p>
              <svg class="icon enable-icon-scale" aria-hidden="true">
                <use href="#icon-arrow-right"></use>
              </svg>
            </div>
          </a>

          <a href="#/work?section=work-row-fin" class="card" aria-label="Go to Financial Tools section">
            <div class="card-image">
              <img
                src="./images/033-600.webp"
                srcset="
                  ./images/033-400.webp 400w,
                  ./images/033-600.webp 600w,
                  ./images/033-900.webp 900w
                "
                sizes="(max-width: 768px) 100vw, 26rem"
                width="600"
                height="600"
                alt="Financial Tools"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="card-content">
              <h2>Financial Tools</h2>
              <div class="card-tag">
                Web apps integrated with <strong>Excel and Google Sheets</strong>.
              </div>
              <p>
                Automated market data syncing, portfolio tracking, and custom strategy analysis.
              </p>
              <svg class="icon enable-icon-scale" aria-hidden="true">
                <use href="#icon-arrow-right"></use>
              </svg>
            </div>
          </a>

        </div>

        <a href="#/work" class="button button-secondary">Learn More</a>
      </section>
    `}}customElements.define("expertise-component",e);
