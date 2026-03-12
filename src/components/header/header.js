import { Utils } from '../../utils.js';

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.lastScrollY = window.scrollY;
    // Throttled at 50ms for smooth but performant scroll tracking
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
                     c0-.948.766-1.714 1.714-1.714h20.572c.948 0 1.714 1.714 1.714 1.714
                     s-.766 1.714-1.714 1.714H1.714A1.712 1.712 0 0 1 0 12Zm24 8.571
                     c0 .949-.766 1.715-1.714 1.715H1.714A1.712 1.712 0 0 1 0 20.57
                     c0-.948.766-1.714 1.714-1.714h20.572c.948 0 1.714 1.714 1.714 1.714z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    `;

    this.headerElement = this.querySelector('.header');

    this.navLinks = [...this.querySelectorAll('.nav-links-full .nav-link')];
  }

  _addEventListeners() {
    window.addEventListener('scroll', this._handleScroll);
    window.addEventListener('hashchange', this._updateActiveLink);
  }

  _removeEventListeners() {
    window.removeEventListener('scroll', this._handleScroll);
    window.removeEventListener('hashchange', this._updateActiveLink);
  }

  _handleScroll() {
    const currentScrollY = window.scrollY;

    // Scroll Down logic
    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      this.headerElement.classList.add('header--hidden');
    }
    // Scroll Up logic
    else {
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
