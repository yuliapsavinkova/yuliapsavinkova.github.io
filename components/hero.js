class HeroComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="hero" class="hero">
                <div class="overlay"></div>
                <div class="hero-content">
                    <social-icons></social-icons>
                    <h1>Yulia Savinkova</h1>
                    <div>
                        <p class="large">Software Engineer with 10+ years of experience.</p>
                        <p class="large">Specializes in HTML, CSS, JavaScript, React and Node.js.</p>
                        <p class="large">Holds a Master’s degree in Computer Science.</p>
                    </div>
                    <a href="#about-me" class="button-link">Learn More</a>
                </div>
            </section>
        `;
    }
}
customElements.define('hero-component', HeroComponent);
