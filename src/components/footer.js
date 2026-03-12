import './footer.css';
import './social-icons.js';

class FooterComponent extends HTMLElement {
  connectedCallback() {
    const copyrightName = this.getAttribute('copyright-name') || 'All rights reserved.';
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer id="footer" class="footer">
        <social-icons mode="default"></social-icons>
        <p class="footer-copyright">&copy; ${year} ${copyrightName}</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
