class SectionHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const subTitle = this.getAttribute('sub-title') || '';
    this.innerHTML = `
      <style>
        .section-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: var(--gap);
          
          .subtitle {
            text-align: center;
          }

          .gra-separator {
            height: 2px;
            width: 20rem;
            background: linear-gradient(to right, 
              var(--color-background) 0%, 
              var(--color-accent) 50%, 
              var(--color-background) 100%
            );
          }
        }
      </style>
      <div class="section-header">
        <h1>${title}</h1>
        <p class="subtitle large">${subTitle}</p>
        <div class="gra-separator"></div>
      </div>
    `;
  }
}
customElements.define('section-header', SectionHeader);
