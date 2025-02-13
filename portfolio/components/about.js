class AboutComponent extends HTMLElement {
  constructor() {
    super();
    const contactLink = this.getAttribute("contact-link") || "./index.html";

    this.innerHTML = `
            <section id="about" class="section about">
                <section-header 
                    title="About Me"
                    sub-title="Transforming visions into realities">
                </section-header>

                <div class="magic-row">
                    <img src="../assets/images/portrait.png" class="magic-image about-portrait" alt="Portrait - photo of Yulia Savinkova."/>
                    <div class="magic-description">
                        <h4>Bringing Web Ideas to Life</h4>
                        <p>
                            I am a Software Engineer with a Master's degree in Computer Science and 10 years of experience working in a corporate environment, building full-stack applications using frameworks like React and Angular with a Node.js backend.
                        </p>
                        <p>
                            For the past five years, I have been running my own company, helping businesses build and optimize their online presence. I specialize in developing websites and front-end web applications using HTML, CSS, JavaScript, native Web Components, and modern frameworks.
                        </p>
                        <p>
                            I am passionate about web technologies and focused on delivering efficient, high-quality digital solutions. In my free time, I enjoy reading, traveling, and snowboarding.
                        </p>
                        <div>
                            <a href="./resume.pdf" target="_blank" class="button button-primary">Resume</a>
                            <a href="${contactLink}" class="button button-secondary">Contact Me</a>
                        </div>
                    </div>
                </div>              
            </section>
        `;
  }
}
customElements.define("about-component", AboutComponent);
