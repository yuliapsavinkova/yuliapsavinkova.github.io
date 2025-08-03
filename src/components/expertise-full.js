import './card.css';

class ExpertiseFullComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="work" class="expertise-full">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>

            <div class="feature-list">

                <div id="work-row-web" class="feature-card">
                    <div class="card-content">
                        <h2>Web Development</h2>  
                        <p>Need a sleek, high-performing website to showcase your brand? I specialize in building modern, responsive websites that look great on any device and deliver a seamless user experience. Whether you need a portfolio, business site, or landing page, I provide custom solutions tailored to your needs. With a focus on speed, SEO, and user-friendly design, I’ll help create a site that not only looks amazing but also drives results. Let's work together to make your online presence shine!</p>
                        <a href="#/contact" class="button button-secondary" aria-label="Go to contact form">Get a Quote</a>
                    </div>
                    <div class="card-image">
                        <img src="./images/web-dev.webp" class="bg-texture" loading="lazy" alt="maintenance-image" />
                    </div>
                </div>

                <div id="work-row-app" class="feature-card">
                    <div class="card-image">
                        <img src="./images/app-dev.webp" class="bg-texture" loading="lazy" alt="web-development-image" />            
                    </div>
                    <div class="card-content">
                        <h2>App Development</h2>
                        <p>Need a powerful, high-performance web application? I build dynamic, user-friendly apps using cutting-edge frameworks like React and Angular. Whether it's a business tool, an e-commerce platform, or a custom solution, I create fast, scalable, and secure applications designed to elevate your brand and streamline your operations. Let’s bring your vision to life!</p>
                        <a href="#/contact" class="button button-secondary" aria-label="Go to contact form">Get a Quote</a>
                    </div>
                </div>

                <div id="work-row-3d" class="feature-card">
                    <div class="card-content">
                        <h2>Financial Tools</h2>  
                        <p> I build custom tools for traders and investors — including Excel-style portfolio trackers and options strategy visualizers (like payout charts). I use React and D3.js for the frontend, FastAPI for backend logic, and store data in PostgreSQL or Google Sheets.</p>  
                        <a href="#/contact" class="button button-secondary" aria-label="Go to contact form">Get a Quote</a>
                    </div>
                    <div class="card-image">
                        <img src="./images/fin-tools.webp" class="bg-texture" loading="lazy" alt="design-image" />
                    </div>
                </div>

                <!--<div id="work-row-3d" class="feature-card">
                    <div class="card-content">
                        <h2>3D Development</h2>  
                        <p>Bring your website to life with stunning 3D experiences! I create interactive, immersive visuals that run smoothly in any modern browser—perfect for showcasing products, engaging users, or adding a unique touch to your site. Whether you need an interactive model, an animated scene, or a full 3D experience, I’ll build a solution that captivates your audience. Let’s make your vision a reality!</p>  
                        <a href="#/contact" class="button button-secondary" aria-label="Go to contact form">Get a Quote</a>
                    </div>
                    <div class="card-image">
                        <img src="./images/three-d-dev.webp" class="bg-texture" loading="lazy" alt="design-image" />
                    </div>
                </div>-->

            </div>

        </section>
    `;
  }
}
customElements.define('expertise-full-component', ExpertiseFullComponent);
