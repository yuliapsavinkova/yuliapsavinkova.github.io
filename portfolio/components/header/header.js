import { Utils } from "../../../shared/js/utils.js";

class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    // TODO: move logo placeholder to shared folder with header
    const logoSrc = this.getAttribute("logo-src") || "assets/images/logo-colored.svg";
    const links = JSON.parse(this.getAttribute("links") || "[]");
    const buttonLink = JSON.parse(this.getAttribute("button-link") || "{}");

    this.innerHTML =
      `
      <header class="header">
          <a href="./index.html" class="logo">
              <img src="${logoSrc}" alt="Logo - personal portfolio."/>
          </a>
          <nav class="gra-nav">
            <input type="checkbox" id="menu-toggle" class="menu-checkbox">
            <label for="menu-toggle">☰</label>
            <div class="nav-menu">
                <div class="nav-links">${links
                  .map((link) => `<a href="${link.href}" target="${link.target || "_self"}">${link.text}</a>`)
                  .join("")}
                </div>
                <div class="nav-action">
                  <a href="${buttonLink.href}" class="button-link">${buttonLink.text}</a>
                </div>
            </div>
          </nav>
      </header>
    ` + this.innerHTML; // Append existing content;

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

  connectedCallback() {
    window.addEventListener("resize", Utils.throttle(this._handleResize, 200));
    window.addEventListener("scroll", Utils.throttle(this._handleScroll, 300));
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this._handleResize);
    window.removeEventListener("scroll", this._handleScroll);
  }
}

customElements.define("header-component", HeaderComponent);
