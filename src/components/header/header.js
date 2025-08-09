import { Utils } from '../../utils.js';

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this._handleResize = Utils.throttle(this._handleResize.bind(this), 200);
    this._handleScroll = Utils.throttle(this._handleScroll.bind(this), 300);
    this._updateActiveLink = this._updateActiveLink.bind(this);
    this._toggleMenu = this._toggleMenu.bind(this);
    this._closeMenu = this._closeMenu.bind(this);
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
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
    const links = JSON.parse(this.getAttribute('links') || '[]');
    const buttonLink = JSON.parse(this.getAttribute('button') || '{}');

    this.innerHTML = /*html*/ `
      <header class="header">
          <a href="${logoLink}" class="logo" aria-label="Home">
              <svg aria-hidden="true">
                <use href="#${logoSvgId}"></use>
              </svg>
              <span class="logo-name">${logoName}</span>
          </a>
          <nav class="main-nav">
            <button class="menu-toggle-button" aria-label="Open Menu">
              <svg viewBox="0 0 24 24" class="icon enable-icon-scale" aria-hidden="true">
                <path fill="currentColor"
                    d="M0 3.429c0-.949.766-1.715 1.714-1.715h20.572c.948 0 1.714.766 1.714 1.715 0 .948-.766 1.714-1.714 1.714H1.714A1.712 1.712 0 0 1 0 3.429ZM0 12c0-.948.766-1.714 1.714-1.714h20.572c.948 0 1.714.766 1.714 1.714s-.766 1.714-1.714 1.714H1.714A1.712 1.712 0 0 1 0 12Zm24 8.571c0 .949-.766 1.715-1.714 1.715H1.714A1.712 1.712 0 0 1 0 20.57c0-.948.766-1.714 1.714-1.714h20.572c.948 0 1.714.766 1.714 1.714z" />
              </svg>
            </button>
            <div class="nav-menu glass-effect">
                <div class="nav-links">
                    ${links
                      .map(
                        (link) => `
                      <a class="nav-link large" href="${link.href}" target="${
                          link.target || '_self'
                        }">${link.text}</a>
                    `,
                      )
                      .join('')}
                </div>
                <div class="nav-action">
                  <a href="${buttonLink.href}" target="${
      buttonLink.target || '_self'
    }" class="button button-action">${buttonLink.text}</a>
                </div>
            </div>
          </nav>
      </header>
    `;

    this.menuToggleButton = this.querySelector('.menu-toggle-button');
    this.navLinks = this.querySelectorAll('.nav-link');
  }

  _addEventListeners() {
    this.menuToggleButton.addEventListener('click', this._toggleMenu);
    document.addEventListener('click', this._handleOutsideClick);
    window.addEventListener('resize', this._handleResize);
    window.addEventListener('scroll', this._handleScroll);
    window.addEventListener('hashchange', this._updateActiveLink);
    this.navLinks.forEach((link) => link.addEventListener('click', this._closeMenu));
  }

  _removeEventListeners() {
    this.menuToggleButton.removeEventListener('click', this._toggleMenu);
    document.removeEventListener('click', this._handleOutsideClick);
    window.removeEventListener('resize', this._handleResize);
    window.removeEventListener('scroll', this._handleScroll);
    window.removeEventListener('hashchange', this._updateActiveLink);
    this.navLinks.forEach((link) => link.removeEventListener('click', this._closeMenu));
  }

  // --- State Management for Mobile Menu ---
  _toggleMenu() {
    this.classList.toggle('is-menu-open');
  }

  _closeMenu() {
    this.classList.remove('is-menu-open');
  }

  // --- Event Handlers ---
  _handleOutsideClick(event) {
    // Close the menu if the click is outside the header component itself
    if (!this.contains(event.target)) {
      this._closeMenu();
    }
  }

  _handleResize() {
    this._closeMenu();
  }

  _handleScroll() {
    this._closeMenu();
  }

  _updateActiveLink() {
    const currentPath = window.location.hash || '#';
    this.querySelectorAll('.nav-link').forEach((link) => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

customElements.define('header-component', HeaderComponent);
