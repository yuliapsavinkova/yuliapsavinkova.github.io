class Palette extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
        <section id="palette" class="palette">
            <div>
                <h1>Colors</h1>
                <div class="circle primary-dark-circle"></div>
                <div class="circle primary-light-circle"></div>
                <div class="circle neutral-dark-circle"></div>
                <div class="circle neutral-light-circle"></div>
                <div class="circle accent-dark-circle"></div>
                <div class="circle accent-light-circle"></div>
                <div class="circle text-circle"></div>
                <div class="circle white-circle"></div>
                <div class="circle grey-circle"></div>
                <div class="circle black-circle"></div>
            </div>
            <div>
                <h1>Buttons</h1>
                <button class="button button-primary">Primary</button>
                <button class="button button-secondary">Secondary</button>
                <button class="button button-action">Action</button>
                <button class="button button-tertiary">Tertiary</button>
                <a href="#" class="button button-link">Button Link</a>
            </div>
        </section>
        `;
  }
}
customElements.define("palette-component", Palette);
