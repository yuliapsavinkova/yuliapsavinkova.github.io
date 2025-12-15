class MenuDropdownComponent extends HTMLElement {
  static get observedAttributes() {
    return ['links', 'button'];
  }

  constructor() {
    super();
    this.links = [];
    this.buttonLink = {};
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'links') {
      this.links = JSON.parse(newValue || '[]');
    }
    if (name === 'button') {
      this.buttonLink = JSON.parse(newValue || '{}');
    }
    this.render();
  }

  connectedCallback() {
    this.render();
    this.classList.add('menu-dropdown');
  }

  render() {
    const linksHtml = this.links
      .map(
        (link) => `
            <a class="drop-item large" href="${link.href}" target="${link.target || '_self'}">${
          link.text
        }</a>
        `,
      )
      .join('');

    const buttonHtml = this.buttonLink.href
      ? `
            <a href="${this.buttonLink.href}" target="${
          this.buttonLink.target || '_self'
        }" class="button button-action drop-button">${this.buttonLink.text}</a>
            `
      : '';

    this.innerHTML = `
            <div class="drop-items">
                ${linksHtml}
            </div>
            <div class="drop-action">
                ${buttonHtml}
            </div>
        `;
  }

  open() {
    this.classList.add('is-menu-open');
  }

  close() {
    this.classList.remove('is-menu-open');
  }

  toggle() {
    this.classList.toggle('is-menu-open');
  }

  get isOpen() {
    return this.classList.contains('is-menu-open');
  }

  get linkElements() {
    return this.querySelectorAll('.drop-item');
  }
}
customElements.define('menu-dropdown-component', MenuDropdownComponent);
