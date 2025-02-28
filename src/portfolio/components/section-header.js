class SectionHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "";
    const subTitle = this.getAttribute("sub-title") || "";
    this.innerHTML = `
      <div class="section-header">
        <h1>${title}</h1>
        <p class="subtitle large">${subTitle}</p>
        <div class="gra-separator"></div>
      </div>
    `;
  }
}
customElements.define("section-header", SectionHeader);
