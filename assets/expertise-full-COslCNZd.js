/* empty css             */class e extends HTMLElement{connectedCallback(){this.innerHTML=`
        <section id="work" class="expertise-full">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>

            <div class="feature-list">

                <div id="work-row-web" class="feature-card">
                    <div class="card-content">
                        <h2>Web Development</h2>  
                        <p>I build modern, responsive websites that work well on any device and are easy for your visitors to use. Whether you need a portfolio, business site, or landing page, I create custom solutions that fit your goals. I pay attention to speed and SEO to help your site perform better and reach more people.</p>
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
                        <p>I build fast, user-friendly web applications using modern tools like React and Angular. Whether it’s a business dashboard, an e-commerce platform, or something entirely custom, I focus on clean design, solid performance, and features that make your day-to-day easier. I design apps to be reliable and flexible, so they can grow and adapt alongside your business.</p>
                        <a href="#/contact" class="button button-secondary" aria-label="Go to contact form">Get a Quote</a>
                    </div>
                </div>

                <div id="work-row-3d" class="feature-card">
                    <div class="card-content">
                        <h2>Financial Tools</h2>  
                        <p>I create tools to help traders and investors manage everyday tasks like tracking portfolios, analyzing strategies, setting up alerts, or pulling in market data. I work with Excel, Google Sheets, and web apps—and can connect them so your data moves easily between platforms. You describe your workflow, and I help turn it into something more streamlined and automated—so it's easier, faster, and tailored to how you work.</p>  
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
    `}}customElements.define("expertise-full-component",e);
