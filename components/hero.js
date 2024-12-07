class HeroComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="hero" class="hero">
                <div class="hero-left">
                    <icons-component></icons-component>
                    <h1>Yulia P. Savinkova</h1>
                    <h5>Software Engineer with 10+ years of experience.</h5>
                    <h5>Specializes in HTML, CSS, JavaScript, React and Node.js.</h5>
                    <h5>Holds a Master’s degree in Computer Science.</h5>
                    <a href="#about-me" class="button">Learn More</a>
                </div>
                <div class="hero-right">
                    <img src="../../assets/images/hero-background.svg" class="hero-image" alt="portrait-image"/>
                </div>
            </section>
        `;
    }
}
customElements.define('hero-component', HeroComponent);
