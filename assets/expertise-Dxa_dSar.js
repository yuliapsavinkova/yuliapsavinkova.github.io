/* empty css             */class e extends HTMLElement{connectedCallback(){this.innerHTML=`
        <section id="expertise">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>
            <div class="card-grid">
                <div class="card">
                    <div class="card-image bg-texture">
                      <img src="./images/work-web.webp" loading="lazy" alt="maintenance-image" />
                    </div>
                    <div class="card-content">
                      <h2>Custom Websites</h2>
                      <p>High-performance, professional responsive sites built with plain HTML/JS or Next.js. I skip the bloat of site-builders to deliver clean code, fast load times, and superior SEO.</p>
                      <a href="#/work?section=work-row-web" aria-label="Go to Web Applications section">
                        <svg class="icon enable-icon-scale" aria-hidden="true">
                          <use href="#icon-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image bg-texture">
                      <img src="./images/work-app.webp" class="card-image" loading="lazy" alt="web-application-image" />            
                    </div>
                    <div class="card-content">
                      <h2>Web Applications</h2>
                      <p>Feature-rich applications built with React and Angular. I develop interactive dashboards and internal tools focused on scalable architecture and seamless user logic.</p>
                      <a href="#/work?section=work-row-app" aria-label="Go to App Development section">
                        <svg class="icon enable-icon-scale" aria-hidden="true">
                          <use href="#icon-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image bg-texture">
                      <img src="./images/work-fin.webp" class="card-image" loading="lazy" alt="web-development-image" />            
                    </div>
                    <div class="card-content">
                      <h2>Financial Tools</h2>
                      <p>Custom automation for traders and investors. I integrate web apps with Excel and Google Sheets to streamline market data, portfolio tracking, and strategy analysis.</p>
                      <a href="#/work?section=work-row-fin" aria-label="Go to App Development section">
                        <svg class="icon enable-icon-scale" aria-hidden="true">
                          <use href="#icon-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                </div>
            </div>
            <a href="#/work" class="button button-secondary">Learn More</a>
        </section>
    `}}customElements.define("expertise-component",e);
