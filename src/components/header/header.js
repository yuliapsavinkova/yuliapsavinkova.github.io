import { Utils } from '../../utils.js';
import './../dropdown/dropdown.js';

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this._handleResize = Utils.throttle(this._handleResize.bind(this), 200);
    this._handleScroll = Utils.throttle(this._handleScroll.bind(this), 50);
    this._updateActiveLink = this._updateActiveLink.bind(this);
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
          <a class="nav-link large" href="${link.href}" target="${link.target || '_self'}">
            ${link.text}
          </a>
        `,
      )
      .join('');

    this.innerHTML = /* html */ `
      <header class="header glass">
        <a href="${logoLink}" class="logo" aria-label="Home">
          <svg aria-hidden="true">
            <use href="#${logoSvgId}"></use>
          </svg>
          <span class="logo-name">${logoName}</span>
        </a>

        <nav class="main-nav">
          <div class="nav-links-full">
            ${fullLinksHtml}
            <a
              href="${buttonLink.href}"
              target="${buttonLink.target || '_self'}"
              class="button button-action"
            >
              ${buttonLink.text}
            </a>
          </div>

          <div class="nav-controls-condensed">
            <button
              class="menu-toggle-button"
              aria-label="Open Menu"
              popovertarget="main-menu"
            >
              <svg viewBox="0 0 24 24" class="icon enable-icon-scale" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M0 3.429c0-.949.766-1.715 1.714-1.715h20.572c.948 0 1.714.766 1.714 1.715
                     0 .948-.766 1.714-1.714 1.714H1.714A1.712 1.712 0 0 1 0 3.429ZM0 12
                     c0-.948.766-1.714 1.714-1.714h20.572c.948 0 1.714.766 1.714 1.714
                     s-.766 1.714-1.714 1.714H1.714A1.712 1.712 0 0 1 0 12Zm24 8.571
                     c0 .949-.766 1.715-1.714 1.715H1.714A1.712 1.712 0 0 1 0 20.57
                     c0-.948.766-1.714 1.714-1.714h20.572c.948 0 1.714.766 1.714 1.714z"
                />
              </svg>
            </button>

            <menu-dropdown-component
              id="main-menu"
              links='${linksAttr}'
              button='${buttonAttr}'
            ></menu-dropdown-component>
          </div>
        </nav>
      </header>
    `;

    this.menuDropdown = this.querySelector('#main-menu');

    this.navLinks = [
      ...this.querySelectorAll('.nav-links-full .nav-link'),
      ...(this.menuDropdown?.linkElements || []),
    ];
  }

  _addEventListeners() {
    window.addEventListener('resize', this._handleResize);
    window.addEventListener('scroll', this._handleScroll);
    window.addEventListener('hashchange', this._updateActiveLink);

    this.navLinks.forEach((link) =>
      link.addEventListener('click', () => this.menuDropdown.hidePopover()),
    );
  }

  _removeEventListeners() {
    window.removeEventListener('resize', this._handleResize);
    window.removeEventListener('scroll', this._handleScroll);
    window.removeEventListener('hashchange', this._updateActiveLink);
  }

  _handleResize() {
    this.menuDropdown.hidePopover();
  }

  _handleScroll() {
    this.menuDropdown.hidePopover();
  }

  _updateActiveLink() {
    const currentPath = window.location.hash || '#';
    this.navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === currentPath);
    });
  }
}

customElements.define('header-component', HeaderComponent);
