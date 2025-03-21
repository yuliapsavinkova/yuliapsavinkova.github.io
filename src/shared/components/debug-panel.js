import { Utils } from "../js/utils.js";

class DebugPanelComponent extends HTMLElement {
  constructor() {
    super();
    this._toggleOutline = this._toggleOutline.bind(this);
    this._closePanel = this._closePanel.bind(this);
    this._updateWidth = this._updateWidth.bind(this);

    // Store throttled event handlers
    this._resizeHandler = Utils.throttle(this._updateWidth, 200);
    this._scrollHandler = Utils.throttle(this._updateWidth, 300);
  }

  // Update screen width x height
  _updateWidth() {
    const debugPanel = this.querySelector("#debugPanel");
    if (!debugPanel) return; // Avoid errors if the component is removed

    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    debugPanel.querySelector(".debug-size").textContent =
      `${width} x ${height}`;
    debugPanel.querySelector(".orientation").textContent = window.matchMedia(
      "(orientation: portrait)",
    ).matches
      ? "Portrait"
      : "Landscape";
  }

  // Toggle debug outlines on body
  _toggleOutline(event) {
    document.body.classList.toggle("debug-outline", event.target.checked);
  }

  // Remove the debug panel from the view
  _closePanel() {
    this.remove();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .debug-panel {
          z-index: 1000;
          position: fixed;
          bottom: 0;
          left: 0;
          margin: 1rem;
          padding: 1rem;
          border-radius: 1.4rem;
          color: hsl(217, 45%, 60%);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
          background: var(--primary-light-color-10);
          backdrop-filter: blur(4rem);
          box-shadow: var(--box-shadow);
          border: 1px solid hsl(217, 45%, 85%);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .debug-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid hsl(217, 45%, 60%);
        }
        .close-btn {
          cursor: pointer;
          align-self: flex-start;
        }
        .debug-outline * {
          outline: 1px solid red;
        }
      </style>

      <div id="debugPanel" class="debug-panel">
        <div class="debug-header">
          <h6>Debug Panel</h6>
          <i class="close-btn fa-solid fa-xmark"></i>
        </div>
        <div>
          <span class="orientation">Loading...</span>:
          <span class="debug-size">Loading...</span>
        </div>
        <div><input type="checkbox" id="toggle-outline"> Show Outlines</div>
        <div><a href="#/palette" target="_blank">Palette</a></div>
      </div>
    `;

    // Bind events
    window.addEventListener("resize", this._resizeHandler);
    window.addEventListener("scroll", this._scrollHandler);
    this.querySelector("#toggle-outline").addEventListener(
      "change",
      this._toggleOutline,
    );
    this.querySelector(".close-btn").addEventListener(
      "click",
      this._closePanel,
    );

    // Initial width update
    this._updateWidth();
  }

  disconnectedCallback() {
    // Cleanup event listeners
    window.removeEventListener("resize", this._resizeHandler);
    window.removeEventListener("scroll", this._scrollHandler);

    const toggleOutline = this.querySelector("#toggle-outline");
    const closeBtn = this.querySelector(".close-btn");

    if (toggleOutline)
      toggleOutline.removeEventListener("change", this._toggleOutline);
    if (closeBtn) closeBtn.removeEventListener("click", this._closePanel);
  }
}

customElements.define("debug-panel-component", DebugPanelComponent);
