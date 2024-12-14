class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.smallScreenTemplate = `
            <header class="header">
                <a href="#" class="logo">
                    <img src="assets/images/logo-colored.svg" alt="logo"/>
                </a>
                <hamburger-component></hamburger-component>
            </header>
        `;
        this.largeScreenTemplate = `
            <header class="header">
                <a href="#" class="logo">
                    <img src="assets/images/logo-colored.svg" alt="logo"/>
                </a>
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <a href="#contact" class="button-link" part="button-link">Contact Me</a>
            </header>
        `;
        this._handleResize = this._handleResize.bind(this);
        this._handleScroll = this._handleScroll.bind(this);
    }

    _handleResize() {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        if (mediaQuery.matches) {
            this.innerHTML = this.smallScreenTemplate;
        } else {
            this.innerHTML = this.largeScreenTemplate;
        }
    }

    _handleScroll() {
        const viewportHeight = window.innerHeight - 100;
        // adds sticky to host - maybe need to add to header itself?
        (window.scrollY > viewportHeight) ? this.classList.add("sticky") : this.classList.remove("sticky");
    }

    connectedCallback() {
        window.addEventListener('resize', this._handleResize);
        window.addEventListener('scroll', Utils.throttle(this._handleScroll, 200));
        this._handleResize();
    }

    disconnectedCallback() {
        window.removeEventListener('resize', this._handleResize);
        window.removeEventListener('scroll', this._handleScroll);
    }
}

customElements.define('header-component', HeaderComponent);
