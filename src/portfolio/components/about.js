class AboutComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
            <section id="about" class="section about">
                <section-header 
                    title="About Me"
                    sub-title="Bringing Web Ideas to Life">
                </section-header>

                <div class="magic-row">
                    <img src="./images/portrait.png" class="magic-image about-portrait" alt="Portrait - photo of Yulia Savinkova."/>
                    <div class="magic-description">
                        <h4>My Journey</h4>
                        <p>
                            I'm a freelance Software Engineer with a Master's degree in Computer Science and over a decade of experience building websites and web applications. After working in the corporate tech world, I transitioned to freelance work to collaborate more closely with clients and help bring their ideas to life.
                        </p>
                        <p>
                            I create clean, responsive, and user-friendly digital experiences using a variety of modern tools and best practices. Whether it's a simple website or a more complex web application, I focus on building solutions that are fast, reliable, and tailored to each client's needs.
                        </p>
                        <p>
                            I'm passionate about great design, thoughtful user experience, and efficient code. Outside of work, I enjoy reading, traveling, and spending time with animals.                        
                        </p>
                        <div>
                            <a href="./resume.pdf" target="_blank" class="button button-primary">Resume</a>
                            <a href="#/work" class="button button-secondary">Learn More</a>
                        </div>
                    </div>
                </div>              
            </section>
        `;
  }
}
customElements.define('about-component', AboutComponent);
