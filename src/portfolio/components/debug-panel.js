import { Utils } from "../../shared/js/utils.js";
class DebugPanelComponent extends HTMLElement {
  // Screen width x height
  _updateWidth() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.getElementById("debugPanel").innerHTML = width + " x " + height;
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
                .debug-panel {
                    z-index: 1000;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    margin: 0.7rem;
                    padding: 0.7rem;
                    border-radius: 1.4rem;

                    background: hsl(var(--accent-light-color) / 0.9);
                    backdrop-filter: blur(1rem);
                    box-shadow: var(--box-shadow);
                    border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
                }
            </style>
            <div id="debugPanel" class="debug-panel"></div>
        `;

    window.addEventListener("resize", Utils.throttle(this._updateWidth, 200));
    window.addEventListener("scroll", Utils.throttle(this._updateWidth, 300));
    this._updateWidth();
  }

  // disconnectedCallback() {
  //     window.removeEventListener('resize', this._updateWidth);
  //     window.removeEventListener('scroll', this._updateWidth);
  // }
}
customElements.define("debug-panel-component", DebugPanelComponent);
