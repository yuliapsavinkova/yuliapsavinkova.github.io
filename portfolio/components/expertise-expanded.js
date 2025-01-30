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
                    <p>I specialize in building modern, high-performance websites from the ground up using fundamental web technologies such as HTML, CSS, and JavaScript. My approach ensures clean, maintainable, and scalable code tailored to your specific needs.</p>
                    <a href="" class="button-link">Learn More</a>
                </div>
                <img src="../../assets/images/maintenance-pro.svg" class="card-image" alt="maintenance-image" />
            </div>

            <div id="expertize-row-app" class="expertize-row">
                <img src="../../assets/images/web-development-pro.svg" class="card-image" alt="web-development-image" />            
                <div class="expertize-description">
                    <h4>App Development</h4>
                    <p>Building web applications involves creating interactive, user-friendly, and dynamic software that runs in a web browser. With the advancements in front-end technologies, frameworks like React and Angular have become some of the most popular choices for developing modern web apps. These frameworks provide a structure for building fast, scalable, and maintainable applications.</p>
                    <a href="" class="button-link">Learn More</a>
                </div>
            </div>

            <div id="expertize-row-3d" class="expertize-row">
                <div class="expertize-description">
                    <h4>3D Development</h4>
                    <p>Building 3D web experiences involves creating interactive, immersive environments directly within a web browser. This is made possible by leveraging powerful 3D technologies and libraries, enabling developers to integrate 3D models, animations, and real-time interactions seamlessly into websites and web applications. By using these tools, developers can create everything from virtual product displays and interactive 3D models to complex 3D games and simulations.</p>
                    <a href="" class="button-link">Learn More</a>
                </div>
                <img src="../../assets/images/design-pro.svg" class="card-image" alt="design-image" />
            </div>
        </section>
    `;
  }
}
customElements.define("expertise-expanded-component", ExpertiseExpandedComponent);
