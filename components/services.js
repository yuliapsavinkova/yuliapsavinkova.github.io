class ServicesComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="services" class="section services">
                <h2>Services</h2>
                <p class="large">My services revolve around making digital products visually appealing, functional, and responsive.</p>
                <div class="gra-separator"></div>
                <div class="services-cards-container">
                    <div class="service-card">
                        <h3>Web Development</h3>
                        <img src="assets/images/web-development-pro.svg" class="work-image" alt="web-development-image" />
                        <p>Build websites from scratch using HTML, CSS, JavaScript, and modern frameworks (React, Angular).</p>
                        <a href="#services" class="link-icon"><i class="fa-regular fa-circle-right fa-2xl"></i></a>
                    </div>
                    <div class="service-card">
                        <h3>UI/UX Design</h3>
                        <img src="assets/images/design-pro.svg" class="work-image" alt="design-image" />
                        <p>Building responsive and visually appealing layouts that work across all devices (desktop, tablet, mobile).</p>
                        <a href="#services" class="link-icon"><i class="fa-regular fa-circle-right fa-2xl"></i></a>
                    </div>
                    <div class="service-card">
                        <h3>Maintenance</h3>
                        <img src="assets/images/maintenance-pro.svg" class="work-image" alt="maintenance-image" />
                        <p>Provide ongoing maintenance, monitor performance and ensure smooth functioning of all features.</p>
                        <a href="#services" class="link-icon"><i class="fa-regular fa-circle-right fa-2xl"></i></a>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('services-component', ServicesComponent);
