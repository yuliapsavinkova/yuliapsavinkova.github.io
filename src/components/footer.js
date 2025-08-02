import './social-icons.js';

class FooterComponent extends HTMLElement {
  connectedCallback() {
    const copyrightName = this.getAttribute('copyright-name') || 'All rights reserved.';
    const year = new Date().getFullYear(); // Get current year
    this.innerHTML = `
        <style>
          .footer {
            height: var(--footer-size);
            min-width: 16rem;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            .footer-copyright {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 1rem;
              height: var(--logo-size);
            }
          }
        </style>
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
