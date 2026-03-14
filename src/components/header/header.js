import { Utils } from '../../utils.js';

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.lastScrollY = window.scrollY;
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
      <header class="header">
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

          <a
            href="${buttonLink.href}"
            target="${buttonLink.target || '_self'}"
            class="button button-action"
          >
            ${buttonLink.text}
          </a>
        </nav>
      </header>
    `;

    this.headerElement = this.querySelector('.header');
    this.navLinks = [...this.querySelectorAll('.nav-links-full .nav-link')];
  }

  _addEventListeners() {
    window.addEventListener('scroll', this._handleScroll, { passive: true });
    window.addEventListener('hashchange', this._updateActiveLink);
  }

  _removeEventListeners() {
    window.removeEventListener('scroll', this._handleScroll);
    window.removeEventListener('hashchange', this._updateActiveLink);
  }

  _handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 80) {
      this.headerElement.classList.add('header--scrolled');
    } else {
      this.headerElement.classList.remove('header--scrolled');
    }

    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      this.headerElement.classList.add('header--hidden');
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
