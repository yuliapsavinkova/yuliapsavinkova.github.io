class ExpertiseComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="expertise" class="section expertise">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>
            <div class="cards-container">
                <div class="card">
                    <img src="../../assets/images/web-dev.png" class="card-image" alt="maintenance-image" />
                    <h4>Web Development</h4>
                    <p>Build websites from scratch using HTML, CSS, JavaScript, and Web Components.</p>
                    <a href="/public/work.html#work-row-web">
                    
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                    </a>
                </div>
                <div class="card">
                    <img src="../../assets/images/app-dev.png" class="card-image" alt="web-development-image" />            
                    <h4>App Development</h4>
                    <p>Build web applications using modern frameworks such as React and Angular.</p>
                    <a href="/public/work.html#work-row-app">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>                    </a>
                </div>
                <div class="card">
                    <img src="../../assets/images/three-d-dev.png" class="card-image" alt="design-image" />
                    <h4>3D Development</h4>
                    <p>Build 3D web experiences using modern web technologies and libraries.</p>
                    <a href="/public/work.html#work-row-3d">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                    </a>
                </div>
            </div>
            <a href="/public/work.html" class="button button-secondary">Learn More</a>
        </section>
    `;
  }
}
customElements.define("expertise-component", ExpertiseComponent);
