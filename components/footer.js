class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <footer id="footer" class="footer">
                <social-icons></social-icons>
                <div class="footer-copyright">
                    <p>&copy; 2024 Yulia Savinkova</p>
                </div>
            </footer>
        `;
  }
}
customElements.define("footer-component", FooterComponent);
