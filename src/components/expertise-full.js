import './card.css';

class ExpertiseFullComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="work" class="expertise-full">
        <section-header
          title="My Expertise"
          sub-title="Transforming Ideas into Code">
        </section-header>

        <div class="feature-list">

          <div id="work-row-web" class="feature-card">
            <div class="feature-media">
              <img
                src="./images/011-600.webp"
                srcset="
                  ./images/011-400.webp  400w,
                  ./images/011-600.webp  600w,
                  ./images/011-900.webp  900w
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
              <span class="card-tag">Performance, SEO & Brand Identity</span>
              <p>
                I create high-performance, responsive web solutions with a "right-tool-for-the-job" approach. For simple projects, I write clean, efficient HTML, CSS, and modern JavaScript.
              </p>
              <p class="card-mono">
                For complex, SEO-focused business sites and portfolios, I use Next.js to deliver scalable, production-ready web experiences. My solutions rank well, convert visitors, and remain reliable, maintainable, and easy to update.
              </p>
              <div class="card-chips">
                <span class="card-chip">Next.js</span>
                <span class="card-chip">TypeScript</span>
                <span class="card-chip">Lighthouse 100</span>
                <span class="card-chip">Responsive UI</span>
                <span class="card-chip">Vercel / Cloud</span>
              </div>
              <div class="button-group">
                <a href="#/contact" class="button button-primary">Start a Project</a>
              </div>
            </div>
          </div>

          <div id="work-row-app" class="feature-card">
            <div class="feature-media">
              <img
                src="./images/022-600.webp"
                srcset="
                  ./images/022-400.webp  400w,
                  ./images/022-600.webp  600w,
                  ./images/022-900.webp  900w
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
              <span class="card-tag">Logic, State Management & Utility</span>
              <p>
                I engineer dynamic web applications designed to solve complex functional problems. Specializing in React, TypeScript, and modern state architectures, I build everything from interactive dashboards to robust customer-facing tools.
              </p>
              <p class="card-mono">
                My focus is on clean architecture, ensuring state management and performance remain seamless as the product scales. I deliver maintainable, "clean-code" solutions prioritizing intuitive user experiences and long-term flexibility.
              </p>
              <div class="card-chips">
                <span class="card-chip">React</span>
                <span class="card-chip">TypeScript</span>
                <span class="card-chip">Redux / Context</span>
                <span class="card-chip">REST APIs</span>
                <span class="card-chip">Modern Tooling</span>
              </div>
              <div class="button-group">
                <a href="#/contact" class="button button-primary">Start a Project</a>
              </div>
            </div>
          </div>

          <div id="work-row-fin" class="feature-card">
            <div class="feature-media">
              <img
                src="./images/033-600.webp"
                srcset="
                  ./images/033-400.webp  400w,
                  ./images/033-600.webp  600w,
                  ./images/033-900.webp  900w
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
              <span class="card-tag">Automation, Data Integrity & Workflow</span>
              <p>
                I develop specialized tools that empower traders and investors to automate their workflows and data analysis. Whether it's tracking portfolios, backtesting strategies, or setting real-time alerts, I bridge the gap between platforms.
              </p>
              <p class="card-mono">
                By integrating Excel and Google Sheets with custom web apps, I create automated systems that sync market data and eliminate manual entry, delivering high-accuracy data pipelines tailored to your needs.
              </p>
              <div class="card-chips">
                <span class="card-chip">Google Sheets API</span>
                <span class="card-chip">Excel Automation</span>
                <span class="card-chip">Real-Time Data</span>
                <span class="card-chip">Data Pipelines</span>
              </div>
              <div class="button-group">
                <a href="#/contact" class="button button-primary">Start a Project</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }
}

customElements.define('expertise-full-component', ExpertiseFullComponent);

