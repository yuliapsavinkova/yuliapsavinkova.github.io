class DebugPanelComponent extends HTMLElement {
  // Screen width x height
  _updateWidth() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    document.getElementById("debugPanel").innerHTML = width + " x " + height;
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
                .debug-panel {
                    z-index: 1000;
                    position: fixed;
                    top: 50%;
                    left: 0;
                    background-color: var(--gra-grey);
                    opacity: 0.9;
                    margin: 10px;
                    padding: 10px;
                    border-radius: 25px;
                    border: 1px solid var(--primary-color-light);
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
