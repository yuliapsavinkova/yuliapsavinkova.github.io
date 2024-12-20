class ExpertiseComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="expertise" class="section expertise">
                <h2>My Expertise</h2>
                <p class="large">Making products visually appealing, functional, and responsive.</p>
                <div class="gra-separator"></div>
                <div class="expertise-cards-container">
                    <div class="service-card">
                        <h4>App Development</h4>
                        <img src="assets/images/web-development-pro.svg" class="work-image" alt="web-development-image" />            
                        <p>Build applications using modern frameworks such as React and Angular.</p>
                        <a href="#expertise"><i class="fa-regular fa-circle-right fa-xl"></i></a>
                    </div>
                    <div class="service-card">
                        <h4>Web Development</h4>
                        <img src="assets/images/maintenance-pro.svg" class="work-image" alt="maintenance-image" />
                        <p>Build websites from scratch using HTML, CSS, JavaScript, and Web Components.</p>
                        <a href="#expertise"><i class="fa-regular fa-circle-right fa-xl"></i></a>
                    </div>
                    <div class="service-card">
                        <h4>UI/UX Design</h4>
                        <img src="assets/images/design-pro.svg" class="work-image" alt="design-image" />
                        <p>Building responsive layouts that work across all devices (desktop, tablet, mobile).</p>
                        <a href="#expertise"><i class="fa-regular fa-circle-right fa-xl"></i></a>
                    </div>
                </div>
            </section>
        `;
  }
}
customElements.define("expertise-component", ExpertiseComponent);
