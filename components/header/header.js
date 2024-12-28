class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.smallScreenTemplate = `
            <header class="header">
                <a href="./index.html" class="logo">
                    <img src="assets/images/logo-colored.svg" alt="logo"/>
                </a>
                <hamburger-component></hamburger-component>
            </header>
        `;
    this.largeScreenTemplate = `
            <header class="header">
                <a href="./index.html" class="logo">
                    <img src="assets/images/logo-colored.svg" alt="logo"/>
                </a>
                <nav>
                    <ul class="nav-links">
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="./about.html">About</a></li>
                        <li><a href="./work.html">Work</a></li>
                        <li><a href="./index.html#working-process">Blog</a></li>
                    </ul>
                </nav>
                <a href="./contact.html" class="button-link" part="button-link">Contact Me</a>
            </header>
        `;
    this._handleResize = this._handleResize.bind(this);
  }

  _handleResize() {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
      this.innerHTML = this.smallScreenTemplate;
    } else {
      this.innerHTML = this.largeScreenTemplate;
    }
  }

  connectedCallback() {
    window.addEventListener("resize", this._handleResize);
    this._handleResize();
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this._handleResize);
  }
}

customElements.define("header-component", HeaderComponent);
