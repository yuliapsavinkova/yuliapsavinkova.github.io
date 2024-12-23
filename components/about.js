class AboutComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="about" class="section about">
                <h2>About Me</h2>
                <p class="large">Bringing Web Ideas to Life</p>
                <div class="gra-separator"></div>
                <div class="about-me-container">
                    <img src="assets/images/portrait.png" class="about-me-image"/>
                    <div class="about-me-content">
                        <h3>Transforming visions into realities.</h3>
                        <p>
                            I am a Software Engineer with 10+ years of experience and a Master's degree in Computer Science.
                            I specialize in developing complex, feature-rich web applications using HTML, CSS, JavaScript, native Web Components, and frameworks like React and Angular.
                            My tech stack includes Git, VS Code, and modern build tools, ensuring efficient and scalable development workflows.
                        </p>
                        <a href="../resume.pdf" target="_blank" class="button-link">Resume</a>
                    </div>
                </div>
            </section>
        `;
  }
}
customElements.define("about-component", AboutComponent);
