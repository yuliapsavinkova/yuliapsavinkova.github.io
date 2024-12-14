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
                    <a href="#about" class="button-link">Learn More</a>
                </div>
                <div class="hero-portrait">
                    <img src="../assets/images/hero-background.svg" />
                </div>
            </section>
        `;
    }
}
customElements.define('hero-component', HeroComponent);
