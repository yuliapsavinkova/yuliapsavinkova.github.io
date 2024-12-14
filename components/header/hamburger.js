class HamburgerComponent extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `
            <div id="hamburger" class="hamburger">
                <div id="nav-btn" class="nav-btn">
                    <i class="fa-solid fa-bars fa-2x hamburger-bars"></i>
                    <i class="fa-solid fa-xmark fa-2x hamburger-x"></i>
                </div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
        `;

        this.menuButton = document.getElementById('nav-btn');
        this._handleMenuClick = this._handleMenuClick.bind(this);
        this._handleResize = this._handleResize.bind(this);
        this._handleScroll = this._handleScroll.bind(this);
        document.addEventListener('click', (e) => this._handleOutsideClick(e));
    }

    _handleMenuClick () {
        console.log("clickeddddd");
        this.classList.toggle('open');
    }

    _handleOutsideClick(event) {
        if (!this.contains(event.target)) {
            this.classList.remove('open');
        }
    }

    _handleResize () {
        console.log("resizeddddd");
        this.classList.remove("open");
    }

    _handleScroll () {
        console.log("scrolleddddd");
        this.classList.remove("open");
    }
    
    connectedCallback() {
        window.addEventListener('resize', Utils.throttle(this._handleResize, 200));
        window.addEventListener('scroll', Utils.throttle(this._handleScroll, 300));
        this.menuButton.addEventListener('click', this._handleMenuClick);
    }

    disconnectedCallback() {
        window.removeEventListener('resize', this._handleResize);
        window.removeEventListener('scroll', this._handleScroll);
        this.menuButton.removeEventListener('click', this._handleMenuClick);
    }
}

customElements.define('hamburger-component', HamburgerComponent);
