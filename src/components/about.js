import './card.css';

class AboutComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="about">
        <section-header
          title="About Me"
          sub-title="Bringing Ideas to Life">
        </section-header>

        <div class="feature-card about-me">

            <div class="card-image card-image--circle">
              <div class="card-image-inner">
                <img
                  style="object-position: top center;"
                  src="./images/about-me-600.webp"
                  srcset="
                    ./images/about-me-400.webp 400w,
                    ./images/about-me-600.webp 600w,
                    ./images/about-me-900.webp 900w
                  "
                  sizes="(max-width: 768px) 18rem, 22rem"
                  width="600"
                  height="800"
                  alt="Yulia is working on the computer."
                  loading="lazy"
                  decoding="async"
                >
              </div>
            </div>

            <div class="card-content">
              <h2>Code & Beyond</h2>
              <p>
                I am a Software Engineer with over a decade of experience building for the web, ranging from the high-growth startup environment at <strong>MuleSoft</strong> to the large-scale corporate systems of <strong>Yahoo and Bloomberg</strong>. I focus on creating clean, responsive, and functional software solutions for complex data environments.
              </p>
              <p>
                Currently, I work on designing tools related to market analysis and portfolio management. I integrate market data with custom web applications and automate workflows between Excel, Google Sheets, and the browser to simplify day to day tasks.
              </p>
              <p>
                I stay current on how AI is transforming engineering and integrate it into my workflow to improve productivity and efficiency. Outside of work, I enjoy reading, traveling, and spending time with animals.
              </p>
              <div class="button-group">
                <a href="./Yulia_Savinkova_Resume.pdf" target="_blank" class="button button-primary">Resume</a>
                <a href="#/about?section=work-experience" class="button button-secondary">Learn More</a>
              </div>
            </div>

          </div>
      </section>
    `;
  }
}

customElements.define('about-component', AboutComponent);
