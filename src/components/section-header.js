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
          gap: var(--space-2);
          text-align: center;
          max-width: 38rem;
          margin: 0 auto var(--space-6);
        }

        .section-header .subtitle {
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          font-weight: var(--weight-normal);
          letter-spacing: var(--tracking-normal);
          color: var(--text-secondary);
          margin: 0;
        }

        .section-header h1 {
          font-size: clamp(1.85rem, 3.5vw, 2.65rem);
          font-weight: var(--weight-bold);
          letter-spacing: var(--tracking-tighter);
          color: var(--text-primary);
          line-height: var(--leading-tight);
          margin: 0;
        }
      </style>

      <div class="section-header">
        <h1>${title}</h1>
        ${subTitle ? `<span class="subtitle">${subTitle}</span>` : ''}
      </div>
    `;
  }
}

customElements.define('section-header', SectionHeader);

