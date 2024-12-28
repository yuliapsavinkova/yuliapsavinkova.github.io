// TODO: handle of toggle open case.
class HamburgerComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
          <div id="hamburger" class="hamburger">
              <input type="checkbox" id="menu-toggle" class="menu-checkbox">
              <label for="menu-toggle" class="menu-icon">☰</label>
              <nav class="menu-list menu-animate">
                <ul>
                  <li><a href="./index.html">Home</a></li>
                  <li><a href="./about.html">About</a></li>
                  <li><a href="./work.html">Work</a></li>
                  <li><a href="./index.html#working-process">Blog</a></li>
                  <li><a href="./contact.html">Contact</a></li>
                </ul>
              </nav>
          </div>
        `;

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

customElements.define("hamburger-component", HamburgerComponent);
