class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.smallScreenTemplate = `
            <header class="header mobile">
                <a href="#" class="logo">
                    <img src="assets/images/logo-colored.svg" alt="logo"/>
                </a>
                <div id="hamburger" class="hamburger">
                    <i class="fa-solid fa-bars fa-2x hamburger-bars"></i>
                    <i class="fa-solid fa-xmark fa-2x hamburger-x"></i>
                </div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about-me">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </header>
        `;
        this.largeScreenTemplate = `
            <header class="header">
                <a href="#" class="logo">
                    <img src="assets/images/logo-colored.svg" alt="logo"/>
                </a>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about-me">About</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <a href="#contact" class="button-link" part="button-link">Contact Me</a>
            </header>
        `;
        this._handleResize = this._handleResize.bind(this);
        this._handleScroll = this._handleScroll.bind(this);
        this._handleMenuClick = this._handleMenuClick.bind(this);
    }

    _handleResize() {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        if (mediaQuery.matches) {
            this.innerHTML = this.smallScreenTemplate;

            // TODO: refactor this
            this.menuButton = document.getElementById('hamburger');
            if (this.menuButton) {
                this.menuButton.addEventListener('click', this._handleMenuClick);
            }

        } else {
            this.innerHTML = this.largeScreenTemplate;
        }
        this.classList.remove("open");
    }

    _handleScroll() {
        const viewportHeight = window.innerHeight - 100;
        // adds sticky to host - maybe need to add to header itself?
        (window.scrollY > viewportHeight) ? this.classList.add("sticky") : this.classList.remove("sticky");
        this.classList.remove("open");
    }

    _handleMenuClick() {
        this.classList.toggle('open');
    }

    connectedCallback() {
        window.addEventListener('resize', this._handleResize);
        window.addEventListener('scroll', Utils.throttle(this._handleScroll, 200));
        // this.menuButton.addEventListener('click', this._handleMenuClick);

        this._handleResize();
    }

    disconnectedCallback() {
        window.removeEventListener('resize', this._handleResize);
        window.removeEventListener('scroll', this._handleScroll);
        // this.menuButton.removeEventListener('click', this._handleMenuClick);
    }
}

customElements.define('header-component', HeaderComponent);
