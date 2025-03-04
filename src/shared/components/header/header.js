import { Utils } from "../../js/utils.js";

class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    const logoLink = this.getAttribute("logo-link") || "./";
    const logoSrc = this.getAttribute("logo-src") || "../shared/components/header/defaultHeaderLogo.svg";
    const logoName = this.getAttribute("logo-name") || "";
    const links = JSON.parse(this.getAttribute("links") || "[]");
    const buttonLink = JSON.parse(this.getAttribute("button") || "{}");

    this.innerHTML =
      `
      <header class="header">
          <a href="${logoLink}" class="logo">
              <img src="${logoSrc}" alt="Logo - personal portfolio."/>
              <span class="logo-name">${logoName}</span>
          </a>
          <nav class="gra-nav">
            <label for="menu-toggle">
              <i class="fa-solid fa-bars fa-2x"></i>
            </label>
            <input type="checkbox" id="menu-toggle" class="menu-checkbox">
            <div class="nav-menu glass-effect">
                <div class="nav-links">${links
                  .map(
                    (link) =>
                      `<a class="nav-link large" href="${link.href}" target="${link.target || "_self"}">${
                        link.image ? `<img src="${link.image}" />` : ""
                      }${link.text}</a>`
                  )
                  .join("")}
                </div>
                <div class="nav-action">
                  <a href="${buttonLink.href}" target="${buttonLink.target || "_self"}" class="button button-action">${
        buttonLink.text
      }</a>
                </div>
            </div>
          </nav>
      </header>
    ` + this.innerHTML; // Append existing content

    this.checkbox = document.getElementById("menu-toggle");
    this._handleResize = this._handleResize.bind(this);
    this._handleScroll = this._handleScroll.bind(this);
    document.addEventListener("click", (e) => this._handleOutsideClick(e));
  }

  _handleOutsideClick(event) {
    if (!this.contains(event.target)) {
      this.checkbox.checked = false;
    }
  }

  _handleResize() {
    this.checkbox.checked = false;
  }

  _handleScroll() {
    this.checkbox.checked = false;
  }

  _updateActiveLink() {
    const links = this.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname;

    links.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  connectedCallback() {
    window.addEventListener("resize", Utils.throttle(this._handleResize, 200));
    window.addEventListener("scroll", Utils.throttle(this._handleScroll, 300));

    // Update active link when component is loaded
    this._updateActiveLink();

    // Listen for navigation changes if using a custom router
    window.addEventListener("popstate", () => this._updateActiveLink());
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this._handleResize);
    window.removeEventListener("scroll", this._handleScroll);
    window.removeEventListener("popstate", () => this._updateActiveLink());
  }
}

customElements.define("header-component", HeaderComponent);
