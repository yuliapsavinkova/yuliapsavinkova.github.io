class SocialIcons extends HTMLElement {
  connectedCallback() {
    let icons = [];
    if (this.getAttribute("icons")) {
      icons = JSON.parse(this.getAttribute("icons"));
    } else {
      icons = [
        { href: "https://github.com/yuliapsavinkova", target: "_blank", display: "fab fa-github fa-xl" },
        { href: "https://www.linkedin.com/in/juliia", target: "_blank", display: "fab fa-linkedin fa-xl" },
        { href: "https://codepen.io/star5/pens/public", target: "_blank", display: "fab fa-codepen fa-xl" },
        { href: "https://codepen.io/star5/pens/public", target: "_blank", display: "fa-solid fa-blog fa-xl" },
      ];
    }
    this.innerHTML = `
            <style>
            .social-icons {
                display: flex;
                width: fit-content;
                gap: 2rem;
            }
            </style>
            <div class="social-icons"">${icons
              .map(
                (icon) =>
                  `<a href="${icon.href}" target="${icon.target || "_self"}"><i class="${
                    icon.display
                  } tilt-effect"></i></a>`
              )
              .join("")}
            </div>
        `;
  }
}
customElements.define("social-icons", SocialIcons);
