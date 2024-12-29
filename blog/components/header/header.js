class BlogHeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="blog-header">
            <a href="./" class="logo">
                <img src="../assets/images/logo-colored.svg" alt="logo"/>
            </a>
            <nav>
                <ul class="nav-links">
                    <li><a href="./">HTML</a></li>
                    <li><a href="./">CSS</a></li>
                    <li><a href="./">JavaScript</a></li>
                </ul>
            </nav>
            <a href="./" class="button-link" part="button-link">Subscribe</a>
        </header>
    `;
  }
}

customElements.define("blog-header-component", BlogHeaderComponent);
