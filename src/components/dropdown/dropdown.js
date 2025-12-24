class MenuDropdownComponent extends HTMLElement {
  static get observedAttributes() {
    return ['links', 'button'];
  }

  constructor() {
    super();
    this.links = [];
    this.buttonLink = {};
    this._onInternalClick = this._onInternalClick.bind(this);
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
    this.setAttribute('popover', 'auto');
    this.classList.add('menu-dropdown', 'glass');
    this.render();
    this.addEventListener('click', this._onInternalClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onInternalClick);
  }

  _onInternalClick(event) {
    const link = event.target.closest('a');
    if (!link) return;
    this.hidePopover();
  }

  render() {
    const linksHtml = this.links
      .map(
        (link) => `
          <a class="drop-item large"
             href="${link.href}"
             target="${link.target || '_self'}">
            ${link.text}
          </a>
        `,
      )
      .join('');

    const buttonHtml = this.buttonLink.href
      ? `
        <a href="${this.buttonLink.href}"
           target="${this.buttonLink.target || '_self'}"
           class="button button-action drop-button">
          ${this.buttonLink.text}
        </a>
      `
      : '';

    this.innerHTML = `
      <div class="drop-items">${linksHtml}</div>
      <div class="drop-action">${buttonHtml}</div>
    `;
  }

  toggle() {
    this.matches(':popover-open') ? this.hidePopover() : this.showPopover();
  }

  get linkElements() {
    return this.querySelectorAll('.drop-item');
  }
}

customElements.define('menu-dropdown-component', MenuDropdownComponent);
