import { Utils } from "../js/utils.js";

class DebugPanelComponent extends HTMLElement {
  constructor() {
    super();
    this._toggleOutline = this._toggleOutline.bind(this);
    this._closePanel = this._closePanel.bind(this);
  }

  // Update screen width x height
  _updateWidth() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.getElementById("debugPanel").querySelector(".debug-size").textContent = `${width} x ${height}`;
    document.getElementById("debugPanel").querySelector(".orientation").textContent = window.matchMedia(
      "(orientation: portrait)"
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
          backdrop-filter: blur(1rem);
          box-shadow: var(--box-shadow);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .debug-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(45, 74, 119, 0.1);
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
      </div>
    `;

    // Bind events
    window.addEventListener("resize", Utils.throttle(this._updateWidth, 200));
    window.addEventListener("scroll", Utils.throttle(this._updateWidth, 300));
    document.getElementById("toggle-outline").addEventListener("change", this._toggleOutline);
    this.querySelector(".close-btn").addEventListener("click", this._closePanel);

    // Initial width update
    this._updateWidth();
  }

  disconnectedCallback() {
    // Cleanup event listeners to avoid memory leaks
    window.removeEventListener("resize", Utils.throttle(this._updateWidth, 200));
    window.removeEventListener("scroll", Utils.throttle(this._updateWidth, 300));
    document.getElementById("toggle-outline").removeEventListener("change", this._toggleOutline);
    this.querySelector(".close-btn").removeEventListener("click", this._closePanel);
  }
}

customElements.define("debug-panel-component", DebugPanelComponent);
