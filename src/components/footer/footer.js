import './footer.css';
import '../../components/social-icons.js';

class FooterComponent extends HTMLElement {
  connectedCallback() {
    const copyrightName = this.getAttribute('copyright-name') || 'All rights reserved.';
    const year = new Date().getFullYear(); // Get current year
    this.innerHTML = `
        <footer id="footer" class="footer">
            <social-icons></social-icons>
            <div class="footer-copyright">
                <p class="large">&copy; ${year} ${copyrightName}</p>
            </div>
        </footer>
    `;
  }
}
customElements.define('footer-component', FooterComponent);
