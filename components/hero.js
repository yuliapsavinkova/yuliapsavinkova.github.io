class HeroComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="hero" class="hero">
                <div class="overlay"></div>
                <div class="hero-content">
                    <div class="hero-heading">
                        <h1>Yulia Savinkova</h1>
                        <h2>Software Engineer</h2>
                        <h3>10+ years of experience</h3>
                        <h4>MS in Computer Science</h4>
                        <h5>HTML, CSS, JavaScript, React and Node</h5>
                    </div>
                    <social-icons></social-icons>
                    <a href="#about-me" class="button-link">Learn More</a>
                </div>
                <div class="content-float"></div>
            </section>
            
        `;
    }
}
customElements.define('hero-component', HeroComponent);
