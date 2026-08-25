import { Utils } from '../../utils.js';
import '../theme-toggle.js';

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.lastScrollY = window.scrollY;
    this._handleScroll = Utils.throttle(this._handleScroll.bind(this), 50);
    this._updateActiveLink = this._updateActiveLink.bind(this);
    this._toggleMobileMenu = this._toggleMobileMenu.bind(this);
  }

  connectedCallback() {
    this.render();
    this._addEventListeners();
    this._updateActiveLink();
  }

  disconnectedCallback() {
    this._removeEventListeners();
  }

  render() {
    const logoLink = this.getAttribute('logo-link') || './';
    const logoSvgId = this.getAttribute('logo-svg-id');
    const logoName = this.getAttribute('logo-name') || '';
    const linksAttr = this.getAttribute('links') || '[]';
    const buttonAttr = this.getAttribute('button') || '{}';

    const links = JSON.parse(linksAttr);
    const buttonLink = JSON.parse(buttonAttr);

    const fullLinksHtml = links
      .map(
        (link) => `
          <a class="nav-link" href="${link.href}" target="${link.target || '_self'}">
            ${link.text}
          </a>
        `,
      )
      .join('');

    this.innerHTML = /* html */ `
      <header class="header">
        <div class="header-inner container">
          <a href="${logoLink}" class="logo" aria-label="Home">
            <svg aria-hidden="true">
              <use href="#${logoSvgId}"></use>
            </svg>
            <span class="logo-name">${logoName}</span>
          </a>

          <nav class="main-nav">
            <div class="nav-links-full">
              ${fullLinksHtml}
            </div>

            <div class="header-actions">
              <theme-toggle-button></theme-toggle-button>

              ${
                buttonLink.text
                  ? `
                <a
                  href="${buttonLink.href}"
                  target="${buttonLink.target || '_self'}"
                  class="button button-action"
                >
                  ${buttonLink.text}
                </a>
              `
                  : ''
              }

              <button class="mobile-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </nav>
        </div>

        <div class="mobile-drawer" id="mobile-drawer">
          <div class="mobile-links">
            ${fullLinksHtml}
          </div>
        </div>
      </header>
    `;

    this.headerElement = this.querySelector('.header');
    this.navLinks = [...this.querySelectorAll('.nav-link')];
    this.mobileMenuBtn = this.querySelector('.mobile-menu-btn');
    this.mobileDrawer = this.querySelector('#mobile-drawer');

    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener('click', this._toggleMobileMenu);
    }
  }

  _toggleMobileMenu() {
    const isOpen = this.mobileDrawer.classList.toggle('is-open');
    this.mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  _addEventListeners() {
    window.addEventListener('scroll', this._handleScroll, { passive: true });
    window.addEventListener('hashchange', this._updateActiveLink);
    window.addEventListener('hashchange', () => {
      if (this.mobileDrawer) this.mobileDrawer.classList.remove('is-open');
    });
  }

  _removeEventListeners() {
    window.removeEventListener('scroll', this._handleScroll);
    window.removeEventListener('hashchange', this._updateActiveLink);
  }

  _handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 40) {
      this.headerElement.classList.add('header--scrolled');
    } else {
      this.headerElement.classList.remove('header--scrolled');
    }

    if (currentScrollY > this.lastScrollY && currentScrollY > 120) {
      this.headerElement.classList.add('header--hidden');
      if (this.mobileDrawer) this.mobileDrawer.classList.remove('is-open');
    } else {
      this.headerElement.classList.remove('header--hidden');
    }

    this.lastScrollY = currentScrollY;
  }

  _updateActiveLink() {
    const currentPath = window.location.hash || '#';
    this.navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === currentPath);
    });
  }
}

customElements.define('header-component', HeaderComponent);

