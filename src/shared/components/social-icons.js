class SocialIcons extends HTMLElement {
  connectedCallback() {
    let icons = [];
    if (this.getAttribute('icons')) {
      icons = JSON.parse(this.getAttribute('icons'));
    } else {
      // Default icons for demonstration
      icons = [
        {
          href: 'https://github.com/yuliapsavinkova',
          target: '_blank',
          title: 'GitHub',
          faIconClass: 'fab fa-github fa-xl',
        },
        {
          href: 'https://www.linkedin.com/in/juliia',
          target: '_blank',
          title: 'LinkedIn',
          faIconClass: 'fab fa-linkedin fa-xl',
        },
        {
          href: 'https://codepen.io/star5/pens/public',
          target: '_blank',
          title: 'CodePen',
          faIconClass: 'fab fa-codepen fa-xl',
        },
        {
          href: 'https://codepen.io/star5/pens/public',
          target: '_blank',
          title: 'Blog',
          faIconClass: 'fa-solid fa-blog fa-xl',
        },
        // {
        //   href: 'https://yuliapsavinkova.github.io/#/blog',
        //   target: '_blank',
        //   title: "Yulia's Blog",
        //   svgId: 'web-bites',
        // },
        // {
        //   href: 'https://yoursite.com/portfolio',
        //   target: '_blank',
        //   title: 'Portfolio',
        //   svgId: 'ys-logo',
        // },
      ];
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
          color: inherit;
        }

        .social-icons i,
        .social-icons svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.2s ease-in-out;
          fill: currentColor; 
        }

        .social-icons a:hover i,
        .social-icons a:hover svg {
          transform: translate(-50%, -50%) scale(1.1);
        }

      </style>
      <div class="social-icons">
        ${icons
          .map((icon) => {
            const titleAttr = icon.title ? ` title="${icon.title}"` : '';
            let content = '';

            if (icon.faIconClass) {
              // Render Font Awesome icon
              content = `<i class="${icon.faIconClass}" aria-hidden="true"></i>`;
            } else if (icon.svgId) {
              // Render custom SVG from sprite
              content = `<svg role="img" aria-labelledby="${icon.svgId}-title">
                           <title id="${icon.svgId}-title">${icon.title || ''}</title>
                           <use href="#${icon.svgId}"></use>
                         </svg>`;
            } else {
              console.warn('Icon configuration missing faIconClass or svgId:', icon);
              return ''; // Skip rendering this icon
            }

            return `<a href="${icon.href}" target="${icon.target || '_self'}" aria-label="${
              icon.title
            }"${titleAttr}>${content}</a>`;
          })
          .join('')}
      </div>
    `;
  }
}

customElements.define('social-icons', SocialIcons);
