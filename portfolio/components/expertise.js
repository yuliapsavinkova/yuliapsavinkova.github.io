class ExpertiseComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="expertise" class="section expertise">
                <h1>My Expertise</h1>
                <p class="large">Transforming Ideas into Code.</p>
                <div class="gra-separator"></div>
                <div class="expertise-cards-container">
                    <div class="service-card">
                        <h4>Web Development</h4>
                        <img src="../../assets/images/maintenance-pro.svg" class="work-image" alt="maintenance-image" />
                        <p>Build websites from scratch using HTML, CSS, JavaScript, and Web Components.</p>
                        <!--<a href="#expertise"><i class="fa-regular fa-circle-right fa-xl"></i></a>-->
                    </div>
                    <div class="service-card">
                        <h4>App Development</h4>
                        <img src="../../assets/images/web-development-pro.svg" class="work-image" alt="web-development-image" />            
                        <p>Build web applications using modern frameworks such as React and Angular.</p>
                        <!--<a href="#expertise"><i class="fa-regular fa-circle-right fa-xl"></i></a>-->
                    </div>
                    <div class="service-card">
                        <h4>3D Development</h4>
                        <img src="../../assets/images/design-pro.svg" class="work-image" alt="design-image" />
                        <p>Build 3D web experiences using modern web technologies and libraries.</p>
                        <!--<a href="#expertise"><i class="fa-regular fa-circle-right fa-xl"></i></a>-->
                    </div>
                </div>
                <a href="../portfolio/work.html" class="button-link">Learn More</a>
            </section>
        `;
  }
}
customElements.define("expertise-component", ExpertiseComponent);
