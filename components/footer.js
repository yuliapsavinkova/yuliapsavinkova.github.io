class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="footer" class="footer">
                <icons-component></icons-component>
                <div class="footer-copyright">
                    <a href="index.html" class="logo">
                        <img src="assets/images/logo-white.svg" class="logo-image" alt="logo-image"/>
                    </a>
                    <p>Copyright &copy; 2024 Portfolio. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-component', FooterComponent);
