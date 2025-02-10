class ExpertiseExpandedComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="expertise" class="section expertise">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>

            <div id="expertize-row-web" class="expertize-row">
                <div class="expertize-description">
                    <h4>Web Development</h4>  
                    <p>Need a sleek, high-performing website to showcase your brand? I build modern, responsive sites that look great on any device and provide a seamless user experience. Whether it's a portfolio, business site, or landing page, I'll create a custom solution tailored to your needs. Let's make your online presence shine!</p>
                    <a href="../portfolio/work.html#contact" class="button-link">Get a Quote</a>
                </div>
                <img src="../../assets/images/maintenance-pro.svg" class="card-image" alt="maintenance-image" />
            </div>

            <div id="expertize-row-app" class="expertize-row">
                <img src="../../assets/images/web-development-pro.svg" class="card-image" alt="web-development-image" />            
                <div class="expertize-description">
                    <h4>App Development</h4>
                    <p>Need a powerful, high-performance web application? I build dynamic, user-friendly apps using cutting-edge frameworks like React and Angular. Whether it's a business tool, an e-commerce platform, or a custom solution, I create fast, scalable, and secure applications designed to elevate your brand and streamline your operations. Let’s bring your vision to life!</p>
                    <a href="../portfolio/work.html#contact" class="button-link">Get a Quote</a>
                </div>
            </div>

            <div id="expertize-row-3d" class="expertize-row">
                <div class="expertize-description">
                    <h4>3D Development</h4>  
                    <p>Bring your website to life with stunning 3D experiences! I create interactive, immersive visuals that run smoothly in any modern browser—perfect for showcasing products, engaging users, or adding a unique touch to your site. Whether you need an interactive model, an animated scene, or a full 3D experience, I’ll build a solution that captivates your audience. Let’s make your vision a reality!</p>  
                    <a href="../portfolio/work.html#contact" class="button-link">Get a Quote</a>
                </div>
                <img src="../../assets/images/design-pro.svg" class="card-image" alt="design-image" />
            </div>
        </section>
    `;
  }
}
customElements.define("expertise-expanded-component", ExpertiseExpandedComponent);
