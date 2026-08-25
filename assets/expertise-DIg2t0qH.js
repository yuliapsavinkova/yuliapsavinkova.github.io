/* empty css             */class a extends HTMLElement{connectedCallback(){this.innerHTML=`
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
                sizes="(max-width: 768px) 100vw, 24rem"
                width="600"
                height="600"
                alt="Custom Solutions"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="card-content">
              <h2>Custom Solutions</h2>
              <span class="card-tag">
                High-performance sites built with <strong>Next.js</strong>
              </span>
              <p>
                SEO-optimized, production-ready experiences built for speed, responsiveness, and clear brand identity.
              </p>
              <div class="card-chips">
                <span class="card-chip">Next.js</span>
                <span class="card-chip">TypeScript</span>
                <span class="card-chip">SEO 100</span>
                <span class="card-chip">Tailwind</span>
              </div>
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
                sizes="(max-width: 768px) 100vw, 24rem"
                width="600"
                height="600"
                alt="Web Applications"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="card-content">
              <h2>Web Applications</h2>
              <span class="card-tag">
                Dynamic applications built with <strong>React & TypeScript</strong>
              </span>
              <p>
                Modular frontend architecture, intuitive user experiences, and scalable state management.
              </p>
              <div class="card-chips">
                <span class="card-chip">React</span>
                <span class="card-chip">TypeScript</span>
                <span class="card-chip">State Architecture</span>
                <span class="card-chip">REST APIs</span>
              </div>
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
                sizes="(max-width: 768px) 100vw, 24rem"
                width="600"
                height="600"
                alt="Financial Tools"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="card-content">
              <h2>Financial Tools</h2>
              <span class="card-tag">
                Automation integrated with <strong>Excel & Google Sheets</strong>
              </span>
              <p>
                Automated market data syncing, real-time portfolio dashboards, and custom strategy analysis.
              </p>
              <div class="card-chips">
                <span class="card-chip">Excel & Sheets</span>
                <span class="card-chip">Data Pipelines</span>
                <span class="card-chip">Live Analytics</span>
                <span class="card-chip">Automation</span>
              </div>
              <svg class="icon enable-icon-scale" aria-hidden="true">
                <use href="#icon-arrow-right"></use>
              </svg>
            </div>
          </a>

        </div>

        <div style="display: flex; justify-content: center; margin-top: var(--space-4);">
          <a href="#/work" class="button button-secondary">Learn More</a>
        </div>
      </section>
    `}}customElements.define("expertise-component",a);
