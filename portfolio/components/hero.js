class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="hero" class="hero">
                <div class="hero-content">
                    <social-icons></social-icons>
                    <div class="hero-heading">
                        <h1>Yulia Savinkova</h1>
                        <h2>Software Engineer</h2>
                        <h3>10+ years of experience</h3>
                        <h4>MS in Computer Science</h4>
                    </div>
                    <div>
                        <a href="./portfolio/about.html" class="button button-primary">Learn More</a>
                        <a href="./portfolio/resume.pdf" target="_blank" class="button button-action">Resume</a>
                    </div>
                </div>
                <div class="hero-portrait">
                    <img src="../assets/images/hero-background.svg" alt="Portrait - photo of Yulia Savinkova."/>
                </div>
            </section>
        `;
  }
}
customElements.define("hero-component", HeroComponent);
