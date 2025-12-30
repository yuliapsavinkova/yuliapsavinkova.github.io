/* empty css             */class e extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="work" class="expertise-full">
        <section-header 
          title="My Expertise"
          sub-title="Transforming Ideas into Code">
        </section-header>

        <div class="feature-list">

          <div id="work-row-web" class="feature-card">
            <div class="card-image">
              <img
                src="./images/work-web.webp"
                class="bg-texture"
                loading="lazy"
                alt="maintenance-image"
              />
            </div>
            <div class="card-content">
              <h2>Custom Websites</h2>
              <h3>Focus: Performance, SEO, and Brand Identity</h3>  
              <p>
                I build high-performance, responsive websites using a "right-tool-for-the-job" approach. By avoiding bloated site-builders and rigid templates, I ensure every project is lightweight, secure, and lightning-fast. For streamlined landing pages, I write clean, efficient HTML, CSS, and JavaScript. For complex, SEO-driven business sites and portfolios, I leverage Next.js to deliver scalable, production-ready web experiences that rank well and convert visitors.
              </p>
              <a
                href="#/contact"
                class="button button-secondary"
                aria-label="Go to contact form"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div id="work-row-app" class="feature-card">
            <div class="card-image">
              <img
                src="./images/work-app.webp"
                class="bg-texture"
                loading="lazy"
                alt="web-development-image"
              />            
            </div>
            <div class="card-content">
              <h2>Web Applications</h2>
              <h3>Focus: Logic, State Management, and Utility</h3>  
              <p>
                I engineer dynamic web applications designed to solve complex functional problems. Specializing in React and Angular, I build everything from interactive dashboards and internal tools to robust customer-facing products. My focus is on clean architecture, ensuring that state management and performance remain seamless as the product grows. I deliver maintainable, "clean-code" solutions that prioritize intuitive user experiences and long-term flexibility.
              </p>
              <a
                href="#/contact"
                class="button button-secondary"
                aria-label="Go to contact form"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div id="work-row-fin" class="feature-card">
            <div class="card-image">
              <img
                src="./images/work-fin.webp"
                class="bg-texture"
                loading="lazy"
                alt="design-image"
              />
            </div>
            <div class="card-content">
              <h2>Financial Tools</h2>  
              <h3>Focus: Automation, Data Integrity, and Workflow</h3>  
              <p>
                I develop specialized tools that empower traders and investors to automate their workflows and data analysis. Whether it’s tracking portfolios, backtesting strategies, or setting real-time alerts, I bridge the gap between platforms. By integrating Excel and Google Sheets with custom web apps, I create automated systems that sync market data and eliminate manual entry. You describe your strategy; I turn it into a streamlined, high-accuracy solution tailored to your edge.
              </p>  
              <a
                href="#/contact"
                class="button button-secondary"
                aria-label="Go to contact form"
              >
                Get a Quote
              </a>
            </div>
          </div>

        </div>
      </section>
    `}}customElements.define("expertise-full-component",e);
