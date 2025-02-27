class ExpertiseComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="expertise" class="section expertise">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>
            <div class="cards-container">
                <div class="card bg-texture">
                    <img src="./images/web-dev.png" class="card-image" alt="maintenance-image" />
                    <h4>Web Development</h4>
                    <p>Build websites from scratch using HTML, CSS, JavaScript, and Web Components.</p>
                    <a href="/work#work-row-web">
                      <svg class="icon">
                        <use href="/icons.svg#arrow-icon"></use>
                      </svg>
                    </a>
                </div>
                <div class="card bg-texture">
                    <img src="./images/app-dev.png" class="card-image" alt="web-development-image" />            
                    <h4>App Development</h4>
                    <p>Build web applications using modern frameworks such as React and Angular.</p>
                    <a href="/work#work-row-app">
                      <svg class="icon">
                        <use href="/icons.svg#arrow-icon"></use>
                      </svg>
                    </a>
                </div>
                <div class="card bg-texture">
                    <img src="./images/three-d-dev.png" class="card-image" alt="design-image" />
                    <h4>3D Development</h4>
                    <p>Build 3D web experiences using modern web technologies and libraries.</p>
                    <a href="/work#work-row-3d">
                      <svg class="icon">
                        <use href="/icons.svg#arrow-icon"></use>
                      </svg>
                    </a>
                </div>
            </div>
            <a href="/work" class="button button-secondary">Learn More</a>
        </section>
    `;
  }
}
customElements.define("expertise-component", ExpertiseComponent);
