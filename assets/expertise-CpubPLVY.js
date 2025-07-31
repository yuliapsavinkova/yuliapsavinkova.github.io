class e extends HTMLElement{connectedCallback(){this.innerHTML=`
        <section id="expertise" class="section">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>

            <div class="card-grid">

                <div class="card bg-texture">
                    <div class="card-image">
                      <img src="./images/web-dev.png" loading="lazy" alt="maintenance-image" />
                    </div>
                    <div class="card-content">
                      <h2>Web Development</h2>
                      <p>Build websites from scratch using HTML, CSS, JavaScript, and Web Components.</p>
                      <a href="#/work?section=work-row-web" aria-label="Go to Web Development section">
                        <svg class="icon icon-stroke enable-icon-scale" aria-hidden="true">
                          <use href="#icon-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                </div>

                <div class="card bg-texture">
                    <div class="card-image">
                      <img src="./images/app-dev.png" class="card-image" loading="lazy" alt="web-development-image" />            
                    </div>
                    <div class="card-content">
                      <h2>App Development</h2>
                      <p>Build web applications using modern frameworks such as React and Angular.</p>
                      <a href="#/work?section=work-row-app" aria-label="Go to App Development section">
                        <svg class="icon icon-stroke enable-icon-scale" aria-hidden="true">
                          <use href="#icon-arrow-right"></use>
                        </svg>
                      </a>
                    </div>
                </div>

                <div class="card bg-texture">
                    <div class="card-image">
                      <img src="./images/three-d-dev.png" class="card-image" loading="lazy" alt="design-image" />
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
                </div>

            </div>
            
            <a href="#/work" class="button button-secondary">Learn More</a>
        </section>
    `}}customElements.define("expertise-component",e);
