class ServicesComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="services" class="section services">
                <h2>Services</h2>
                <p class="large">Making products visually appealing, functional, and responsive.</p>
                <div class="gra-separator"></div>
                <div class="services-cards-container">
                    <div class="service-card">
                        <h4>Web Development</h4>
                        <img src="assets/images/web-development-pro.svg" class="work-image" alt="web-development-image" />
                        <p>Build websites from scratch using HTML, CSS, JavaScript, and modern frameworks (React, Angular).</p>
                        <a href="#services"><i class="fa-regular fa-circle-right fa-xl"></i></a>
                    </div>
                    <div class="service-card">
                        <h4>UI/UX Design</h4>
                        <img src="assets/images/design-pro.svg" class="work-image" alt="design-image" />
                        <p>Building responsive and visually appealing layouts that work across all devices (desktop, tablet, mobile).</p>
                        <a href="#services"><i class="fa-regular fa-circle-right fa-xl"></i></a>
                    </div>
                    <div class="service-card">
                        <h4>Maintenance</h4>
                        <img src="assets/images/maintenance-pro.svg" class="work-image" alt="maintenance-image" />
                        <p>Provide maintenance, monitor performance and ensure smooth functioning of all features.</p>
                        <a href="#services"><i class="fa-regular fa-circle-right fa-xl"></i></a>
                    </div>
                </div>
            </section>
        `;
  }
}
customElements.define("services-component", ServicesComponent);
