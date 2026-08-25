/* empty css             */class e extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="about">
        <section-header
          title="About Me"
          sub-title="Bringing Ideas to Life">
        </section-header>

        <div class="feature-card about-me">
          <div class="feature-media">
            <img
              src="./images/about-me-900.webp"
              srcset="
                ./images/about-me-400.webp 400w,
                ./images/about-me-900.webp 900w
              "
              sizes="(max-width: 768px) 100vw, 24rem"
              width="900"
              height="1200"
              alt="Yulia working on engineering challenges"
              loading="lazy"
              decoding="async"
            >
          </div>

          <div class="card-content">
            <h2>Code & Beyond</h2>
            <p>
              I am a Software Engineer with over a decade of experience building for the web, ranging from the high-growth startup environment at <strong>MuleSoft</strong> to the large-scale enterprise systems of <strong>Bloomberg and Yahoo</strong>. I focus on creating clean, responsive, and functional software solutions for complex data environments.
            </p>
            <p>
              Currently, I design tools for market analysis and portfolio management. I integrate market data with custom web applications and automate workflows between Excel, Google Sheets, and the browser to simplify day-to-day operations.
            </p>
            <p>
              I stay current on how AI transforms engineering workflows, integrating modern tooling to improve efficiency. Outside of work, I enjoy reading, traveling, and continuous learning.
            </p>
            <div class="button-group">
              <a href="./Yulia_Savinkova_Resume.pdf" target="_blank" class="button button-primary">Resume</a>
              <a href="#/about?section=work-experience" class="button button-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    `}}customElements.define("about-component",e);
