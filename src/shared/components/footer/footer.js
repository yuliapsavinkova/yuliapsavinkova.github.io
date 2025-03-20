class FooterComponent extends HTMLElement {
  connectedCallback() {
    const copyrightName =
      this.getAttribute("copyright-name") || "All rights reserved.";
    const year = new Date().getFullYear(); // Get current year
    this.innerHTML = `
        <footer id="footer" class="footer">
            <social-icons></social-icons>
            <div class="footer-copyright">
                <p>&copy; ${year} ${copyrightName}</p>
            </div>
        </footer>
    `;
  }
}
customElements.define("footer-component", FooterComponent);
