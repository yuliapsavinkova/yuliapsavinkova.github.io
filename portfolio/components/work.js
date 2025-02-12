class WorkComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="work" class="section work">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>

            <div id="work-row-web" class="work-row">
                <div class="work-description">
                    <h4>Web Development</h4>  
                    <p>Need a sleek, high-performing website to showcase your brand? I specialize in building modern, responsive websites that look great on any device and deliver a seamless user experience. Whether you need a portfolio, business site, or landing page, I provide custom solutions tailored to your needs. With a focus on speed, SEO, and user-friendly design, I’ll help create a site that not only looks amazing but also drives results. Let's work together to make your online presence shine!</p>
                    <a href="../portfolio/work.html#contact" class="button button-secondary">Get a Quote</a>
                </div>
                <img src="../../assets/images/web-dev.png" class="work-image vertical" alt="maintenance-image" />
            </div>

            <div id="work-row-app" class="work-row">
                <img src="../../assets/images/app-dev.png" class="work-image" alt="web-development-image" />            
                <div class="work-description">
                    <h4>App Development</h4>
                    <p>Need a powerful, high-performance web application? I build dynamic, user-friendly apps using cutting-edge frameworks like React and Angular. Whether it's a business tool, an e-commerce platform, or a custom solution, I create fast, scalable, and secure applications designed to elevate your brand and streamline your operations. Let’s bring your vision to life!</p>
                    <a href="../portfolio/work.html#contact" class="button button-secondary">Get a Quote</a>
                </div>
            </div>

            <div id="work-row-3d" class="work-row">
                <div class="work-description">
                    <h4>3D Development</h4>  
                    <p>Bring your website to life with stunning 3D experiences! I create interactive, immersive visuals that run smoothly in any modern browser—perfect for showcasing products, engaging users, or adding a unique touch to your site. Whether you need an interactive model, an animated scene, or a full 3D experience, I’ll build a solution that captivates your audience. Let’s make your vision a reality!</p>  
                    <a href="../portfolio/work.html#contact" class="button button-secondary">Get a Quote</a>
                </div>
                <img src="../../assets/images/three-d-dev.png" class="work-image" alt="design-image" />
            </div>
        </section>
    `;
  }
}
customElements.define("work-component", WorkComponent);
