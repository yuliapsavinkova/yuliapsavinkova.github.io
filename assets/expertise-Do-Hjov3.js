/* empty css             */class e extends HTMLElement{connectedCallback(){this.innerHTML=`
        <section id="expertise">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>

            <div class="card-grid">

                <div class="card">
                    <div class="card-image bg-texture">
                      <img src="./images/web-dev.webp" loading="lazy" alt="maintenance-image" />
                    </div>
                    <div class="card-content">
                      <h2>Custom Websites</h2>
                      <p>I build custom websites for portfolios, freelancers, and small businesses.</p>
                      <a href="#/work?section=work-row-web" aria-label="Go to Web Development section">
                        <svg class="icon icon-stroke enable-icon-scale" aria-hidden="true">
                          <use href="#icon-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-image bg-texture">
                      <img src="./images/app-dev.webp" class="card-image" loading="lazy" alt="web-development-image" />            
                    </div>
                    <div class="card-content">
                      <h2>Web Applications</h2>
                      <p>I develop web applications with user logins, forms, and dashboards.</p>
                      <a href="#/work?section=work-row-app" aria-label="Go to App Development section">
                        <svg class="icon icon-stroke enable-icon-scale" aria-hidden="true">
                          <use href="#icon-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-image bg-texture">
                      <img src="./images/fin-tools.webp" class="card-image" loading="lazy" alt="web-development-image" />            
                    </div>
                    <div class="card-content">
                      <h2>Financial Tools</h2>
                      <p>I create financial tools that help traders and investors make financial decisions.</p>
                      <a href="#/work?section=work-row-app" aria-label="Go to App Development section">
                        <svg class="icon icon-stroke enable-icon-scale" aria-hidden="true">
                          <use href="#icon-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                </div>

                <!--<div class="card bg-texture">
                    <div class="card-image">
                      <img src="./images/three-d-dev.webp" class="card-image" loading="lazy" alt="design-image" />
                    </div>
                    <div class="card-content">
                      <h2>3D Development</h2>
                      <p>Build 3D web experiences using modern web technologies and libraries.</p>
                      <a href="#/work?section=work-row-3d" aria-label="Go to 3D web experiences section">
                        <svg class="icon icon-stroke enable-icon-scale" aria-hidden="true">
                          <use href="#icon-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                </div>-->

            </div>
            
            <a href="#/work" class="button button-secondary">Learn More</a>
        </section>
    `}}customElements.define("expertise-component",e);
