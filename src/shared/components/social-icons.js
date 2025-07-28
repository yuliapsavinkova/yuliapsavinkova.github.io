const DEFAULT_ICONS = [
  {
    href: 'https://github.com/yuliapsavinkova',
    target: '_blank',
    title: 'GitHub',
    svgId: 'icon-fa-github',
  },
  {
    href: 'https://www.linkedin.com/in/juliia',
    target: '_blank',
    title: 'LinkedIn',
    svgId: 'icon-fa-linkedin',
  },
  {
    href: 'https://codepen.io/star5/pens/public',
    target: '_blank',
    title: 'CodePen',
    svgId: 'icon-fa-codepen',
  },
  {
    href: 'https://codepen.io/star5/pens/public',
    target: '_blank',
    title: 'Blog',
    svgId: 'icon-fa-blog',
  },
];

class SocialIcons extends HTMLElement {
  connectedCallback() {
    let icons = [];
    if (this.getAttribute('icons')) {
      icons = JSON.parse(this.getAttribute('icons'));
    } else {
      // Default icons for demonstration
      icons = DEFAULT_ICONS;
    }

    this.innerHTML = `
      <style>
        .social-icons {
          align-items: center;
          display: flex;
          width: fit-content;
          gap: 2rem;
        }

        .social-icons a {
          display: inline-block;
          position: relative;
          width: 2rem;
          height: 2rem;
        }
      </style>
      <div class="social-icons">
        ${icons
          .map((icon) => {
            const titleAttr = icon.title ? ` title="${icon.title}"` : '';

            if (!icon.svgId) {
              console.warn('Icon configuration is missing:', icon);
              return '';
            }

            return `<a href="${icon.href}" target="${icon.target || '_self'}" aria-label="${
              icon.title
            }"${titleAttr}><svg class="icon icon-lg icon-fill enable-icon-scale" aria-hidden="true"><use href="#${
              icon.svgId
            }"></use></svg></a>`;
          })
          .join('')}
      </div>
    `;
  }
}

customElements.define('social-icons', SocialIcons);
