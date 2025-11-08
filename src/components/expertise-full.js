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
                        <p>I build modern, responsive websites that work well on any device and are intuitive for your visitors. Whether you need a portfolio, business site, or landing page, I create custom solutions tailored to your goals. I focus on performance, speed, and SEO to help your site run smoothly, reach more people, and make a strong impact.</p>
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
                        <p>I build fast, user-friendly web applications using modern frameworks like React and Angular. I work on customer-facing products, internal tools, and interactive dashboards, focusing on clean design, strong performance, and seamless user experiences. Each application is designed to be flexible and easy to maintain as products evolve.</p>
                        <a href="#/contact" class="button button-secondary" aria-label="Go to contact form">Get a Quote</a>
                    </div>
                </div>

                <div id="work-row-3d" class="feature-card">
                    <div class="card-content">
                        <h2>Financial Tools</h2>  
                        <p>I create tools that help traders and investors manage tasks like tracking portfolios, analyzing strategies, setting alerts, and pulling market data. I work with Excel, Google Sheets, and web apps, integrating them to keep your data in sync. You describe your workflow, and I turn it into a streamlined, automated solution that's faster, easier, and tailored to your work.</p>  
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
