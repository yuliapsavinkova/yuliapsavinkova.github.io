/* empty css             */class e extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="work" class="expertise-full">
        <section-header
          title="My Expertise"
          sub-title="Transforming Ideas into Code">
        </section-header>

        <div class="feature-list">

          <div id="work-row-web" class="feature-card">
            <div class="card-image card-image--circle card-image--contain">
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
              <p class="card-tag">Performance, SEO, and Brand Identity</p>
              <p>
                I create high-performance, responsive web solutions with a "right-tool-for-the-job" approach. For simple projects, I write clean, efficient HTML, CSS, and JavaScript.
              </p>
              <p class="card-mono">
                For complex, SEO-focused business sites and portfolios, I use Next.js to deliver scalable, production-ready web experiences. My solutions are built to rank well, convert visitors, and remain reliable, maintainable, and easy to update.
              </p>
              <a href="#/contact" class="button button-secondary">Contact Me</a>
            </div>
          </div>

          <div id="work-row-app" class="feature-card">
            <div class="card-image card-image--circle card-image--contain">
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
              <p class="card-tag">Logic, State Management, and Utility</p>
              <p>
                I engineer dynamic web applications designed to solve complex functional problems. Specializing in React and Angular, I build everything from interactive dashboards and internal tools to robust customer-facing products.
              </p>
              <p class="card-mono">
                My focus is on clean architecture, ensuring that state management and performance remain seamless as the product grows. I deliver maintainable, "clean-code" solutions that prioritize intuitive user experiences and long-term flexibility.
              </p>
              <a href="#/contact" class="button button-secondary">Contact Me</a>
            </div>
          </div>

          <div id="work-row-fin" class="feature-card">
            <div class="card-image card-image--circle card-image--contain">
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
              <p class="card-tag">Automation, Data Integrity, and Workflow</p>
              <p>
                I develop specialized tools that empower traders and investors to automate their workflows and data analysis. Whether it's tracking portfolios, backtesting strategies, or setting real-time alerts, I bridge the gap between platforms.
              </p>
              <p class="card-mono">
                By integrating Excel and Google Sheets with custom web apps, I create automated systems that sync market data and eliminate manual entry. You describe your strategy — I turn it into a streamlined, high-accuracy solution tailored to your edge.
              </p>
              <a href="#/contact" class="button button-secondary">Contact Me</a>
            </div>
          </div>

        </div>
      </section>
    `}}customElements.define("expertise-full-component",e);
