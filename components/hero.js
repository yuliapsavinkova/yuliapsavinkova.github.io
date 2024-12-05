class HeroComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="hero" class="hero">
            <icons-component></icons-component>
            <div class="hero-title">
                <h1>Yulia P. Savinkova</h1>
                <h1>Software Engineer</h1>
            </div>
            <p>
                A deep understanding of programming languages, frameworks, and system designs enables me to bring ideas to life
                by blending creativity and technical expertise.
            </p>
            <div><a href="#about-me" class="button">Learn More</a></div>
            </section>
        `;
    }
}
customElements.define('hero-component', HeroComponent);
