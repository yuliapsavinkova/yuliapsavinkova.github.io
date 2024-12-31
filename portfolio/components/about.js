class AboutComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="about" class="section about">
                <h1>About Me</h1>
                <p class="large">Bringing Web Ideas to Life</p>
                <div class="gra-separator"></div>
                <div class="about-me-container">
                    <div>
                        <img src="../assets/images/portrait.png" alt="Portrait - photo of Yulia Savinkova." class="about-me-image"/>
                    </div>
                    <div class="about-me-content">
                        <h3>Transforming visions into realities.</h3>
                        <p>
                            I am a Software Engineer with 10+ years of experience and a Master's degree in Computer Science.
                            I specialize in developing front-end web applications using HTML, CSS, JavaScript, native Web Components, and frameworks like React and Angular.
                            In my free time I like to read, travel and snowboard.
                        </p>
                        <div class="work-experience-technologies">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Web Components</span>
                            <span>Angular</span>
                            <span>React</span>
                            <span>Node</span>
                            <span>Git</span>
                            <span>Webpack</span>
                        </div>
                        <a href="./portfolio/resume.pdf" target="_blank" class="button-link">Resume</a>

                    </div>
                </div>
            </section>
        `;
  }
}
customElements.define("about-component", AboutComponent);
