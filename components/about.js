class AboutComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="about-me" class="section about-me">
                <h2>About Me</h2>
                <p class="large">Bringing Web Ideas to Life</p>
                <div class="gra-separator"></div>
                <div class="aboutme-container">
                    <img src="assets/images/portrait.png" class="aboutme-image"/>
                    <div class="aboutme-content">
                        <h3>Transforming visions into realities.</h3>
                        <p>
                            I am a Software Engineer with 10+ years of experience and a Master's degree in Computer Science.
                            I specialize in developing complex, feature-rich web applications using HTML, CSS, JavaScript, native Web Components, and frameworks like React and Angular.
                            My tech stack includes Git, VS Code, and modern build tools, ensuring efficient and scalable development workflows.
                        </p>
                        <a href="#" class="button-link">Resume</a>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('about-component', AboutComponent);
