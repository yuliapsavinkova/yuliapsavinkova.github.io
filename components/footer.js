class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="footer" class="footer">
                <social-icons></social-icons>
                <div class="footer-copyright">
                    <a href="#" class="logo">
                        <img src="assets/images/logo-white.svg" class="logo-image" alt="logo-image"/>
                    </a>
                    <p>Copyright &copy; 2024 Portfolio. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-component', FooterComponent);
