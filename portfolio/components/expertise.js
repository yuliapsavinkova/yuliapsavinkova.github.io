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
                    <img src="../../assets/images/maintenance-pro.svg" class="card-image" alt="maintenance-image" />
                    <h4>Web Development</h4>
                    <p>Build websites from scratch using HTML, CSS, JavaScript, and Web Components.</p>
                    <a href="../portfolio/work.html#expertize-row-web"><i class="fa-regular fa-circle-right fa-xl"></i></a>
                </div>
                <div class="card">
                    <img src="../../assets/images/web-development-pro.svg" class="card-image" alt="web-development-image" />            
                    <h4>App Development</h4>
                    <p>Build web applications using modern frameworks such as React and Angular.</p>
                    <a href="../portfolio/work.html#expertize-row-app"><i class="fa-regular fa-circle-right fa-xl"></i></a>
                </div>
                <div class="card">
                    <img src="../../assets/images/design-pro.svg" class="card-image" alt="design-image" />
                    <h4>3D Development</h4>
                    <p>Build 3D web experiences using modern web technologies and libraries.</p>
                    <a href="../portfolio/work.html#expertize-row-3d"><i class="fa-regular fa-circle-right fa-xl"></i></a>
                </div>
            </div>
            <a href="../portfolio/work.html" class="button-link">Learn More</a>
        </section>
    `;
  }
}
customElements.define("expertise-component", ExpertiseComponent);
