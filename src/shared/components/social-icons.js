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
          faIconClass: 'fab fa-github fa-xl', // Font Awesome icon
        },
        {
          href: 'https://www.linkedin.com/in/juliia',
          target: '_blank',
          title: 'LinkedIn',
          faIconClass: 'fab fa-linkedin fa-xl', // Font Awesome icon
        },
        {
          href: 'https://codepen.io/star5/pens/public',
          target: '_blank',
          title: 'CodePen',
          faIconClass: 'fab fa-codepen fa-xl', // Font Awesome icon
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
          display: flex;
          width: fit-content;
          gap: 2rem;
        }

        /* Base styling for both Font Awesome <i> and custom <svg> icons */
        .social-icons i,
        .social-icons svg {
          width: 2rem;
          height: 2rem;
          display: inline-block;
          transition: transform 0.3s ease;
          fill: currentColor; /* Allows coloring SVG with text color */
          flex-shrink: 0; /* Prevents shrinking in flex container */
        }

        .social-icons a:hover i,
        .social-icons a:hover svg {
          transform: scale(1.1);
        }
      </style>
      <div class="social-icons">
        ${icons
          .map((icon) => {
            const titleAttr = icon.title ? ` title="${icon.title}"` : '';
            let content = '';

            if (icon.faIconClass) {
              // Render Font Awesome icon
              content = `<i class="${icon.faIconClass}"></i>`;
            } else if (icon.svgId) {
              // Render custom SVG from sprite
              // IMPORTANT: Reference the ID directly with a '#'
              content = `<svg class="custom-social-icon" role="img" aria-labelledby="${
                icon.svgId
              }-title">
                           <title id="${icon.svgId}-title">${icon.title || ''}</title>
                           <use href="#${icon.svgId}"></use>
                         </svg>`;
            } else {
              // Fallback or error handling for icons without a display method
              console.warn('Icon configuration missing faIconClass or svgId:', icon);
              return ''; // Skip rendering this icon
            }

            return `<a href="${icon.href}" target="${
              icon.target || '_self'
            }"${titleAttr}>${content}</a>`;
          })
          .join('')}
      </div>
    `;
  }
}

customElements.define('social-icons', SocialIcons);
