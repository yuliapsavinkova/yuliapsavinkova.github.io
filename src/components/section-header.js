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
          gap: var(--gap-small);
          text-align: center;
        }

        .section-header .subtitle {
          font-family: var(--font-family);
          font-size: var(--font-size-label);
          font-weight: 400;
          letter-spacing: var(--tracking-widest);
          text-transform: uppercase;
          color: var(--color-text-55);
          text-align: center;
        }

        .section-header .gra-separator {
          margin-top: var(--gap-tiny);
          height: 1px;
          width: 8rem;
          background: linear-gradient(
            to right,
            transparent 0%,
            var(--color-accent-30) 50%,
            transparent 100%
          );
        }
      </style>

      <div class="section-header">
        <h1>${title}</h1>
        <p class="subtitle">${subTitle}</p>
        <div class="gra-separator"></div>
      </div>
    `;
  }
}

customElements.define('section-header', SectionHeader);
