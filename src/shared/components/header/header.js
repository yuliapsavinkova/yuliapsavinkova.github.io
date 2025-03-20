import { Utils } from "../../js/utils.js";

class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    const logoLink = this.getAttribute("logo-link") || "./";
    const logoSrc =
      this.getAttribute("logo-src") ||
      "../shared/components/header/defaultHeaderLogo.svg";
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
                      }${link.text}</a>`,
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
    ` + this.innerHTML;

    this.checkbox = this.querySelector("#menu-toggle");
    this.navLinks = this.querySelectorAll(".nav-link");

    this._handleResize = this._handleResize.bind(this);
    this._handleScroll = this._handleScroll.bind(this);
    this._updateActiveLink = this._updateActiveLink.bind(this);
    this._closeMenu = this._closeMenu.bind(this);
    this._handleOutsideClick = this._handleOutsideClick.bind(this);

    document.addEventListener("click", this._handleOutsideClick);
  }

  _handleOutsideClick(event) {
    if (!this.contains(event.target)) {
      this._closeMenu();
    }
  }

  _handleResize() {
    this._closeMenu();
  }

  _handleScroll() {
    this._closeMenu();
  }

  _updateActiveLink() {
    const links = this.querySelectorAll(".nav-link");
    const currentPath = window.location.hash || "#";

    links.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  _closeMenu() {
    if (this.checkbox) {
      this.checkbox.checked = false;
    }
  }

  connectedCallback() {
    window.addEventListener("resize", Utils.throttle(this._handleResize, 200));
    window.addEventListener("scroll", Utils.throttle(this._handleScroll, 300));
    window.addEventListener("hashchange", this._updateActiveLink);

    // Close menu when clicking a navigation link
    this.navLinks.forEach((link) => {
      link.addEventListener("click", this._closeMenu);
    });

    // Update active link when component is loaded
    this._updateActiveLink();
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this._handleResize);
    window.removeEventListener("scroll", this._handleScroll);
    window.removeEventListener("hashchange", this._updateActiveLink);
    document.removeEventListener("click", this._handleOutsideClick);

    // Remove event listeners for nav links
    this.navLinks.forEach((link) => {
      link.removeEventListener("click", this._closeMenu);
    });
  }
}

customElements.define("header-component", HeaderComponent);
