import{U as n}from"./index-DQZkyPgd.js";import"./theme-toggle-9PDmT22X.js";class o extends HTMLElement{constructor(){super(),this._toggleOutline=this._toggleOutline.bind(this),this._closePanel=this._closePanel.bind(this),this._updateWidth=this._updateWidth.bind(this),this._resizeHandler=n.throttle(this._updateWidth,200)}_updateWidth(){const e=this.querySelector("#debugPanel");if(!e)return;const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;e.querySelector(".debug-size").textContent=`${t} x ${i}`,e.querySelector(".orientation").textContent=window.matchMedia("(orientation: portrait)").matches?"Portrait":"Landscape"}_toggleOutline(e){document.body.classList.toggle("debug-outline",e.target.checked)}_closePanel(){this.remove()}connectedCallback(){this.innerHTML=`
      <style>
        .debug-panel {
          z-index: 1000;
          position: fixed;
          bottom: 0;
          left: 0;
          margin: 1rem;
          padding: 1rem;
          border-radius: var(--border-radius-lg);
          color: var(--color-primary);
          background-color: var(--color-surface);          
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          gap: var(--gap-tiny);
        }
        .debug-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--color-primary);
        }
        .debug-outline * {
          outline: 1px solid red;
        }
        .close-btn {
          all: unset;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          margin: 0;
          width: 2rem;
          height: 2rem;
        }
        .close-btn svg {
          width: 1rem;
          height: 1rem;
          padding: 1px;
        }
        .theme-toggle-inline .theme-toggle-btn {
          width: 2rem;
          height: 2rem;
          color: var(--color-primary);
        }
      </style>

      <div id="debugPanel" class="debug-panel">
        <div class="debug-header">
          <h2>Debug Panel</h2>
          <button class="close-btn" aria-label="Close Debug Panel">
            <svg class="enable-icon-scale" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill="currentColor"
                d="M3.416.592a2.002 2.002 0 0 0-2.83 2.83L9.17 12 .592 20.584a2.002 2.002 0 0 0 2.83 2.83L12 14.83l8.584 8.578a2.002 2.002 0 0 0 2.83-2.83L14.83 12l8.578-8.584a2.002 2.002 0 0 0-2.83-2.83L12 9.17z" />
            </svg>
          </button>
        </div>
        <div>
          <span class="orientation">Loading...</span>:
          <span class="debug-size">Loading...</span>
        </div>
        <div><input type="checkbox" id="toggle-outline"> Show Outlines</div>
        <div><a href="#/palette" target="_blank">Palette</a></div>
        <span class="theme-toggle-inline">
          <theme-toggle-button></theme-toggle-button>
        </span> 
      </div>
    `,window.addEventListener("resize",this._resizeHandler),this.querySelector("#toggle-outline").addEventListener("change",this._toggleOutline),this.querySelector(".close-btn").addEventListener("click",this._closePanel),this._updateWidth()}disconnectedCallback(){window.removeEventListener("resize",this._resizeHandler);const e=this.querySelector("#toggle-outline");e&&e.removeEventListener("change",this._toggleOutline);const t=this.querySelector(".close-btn");t&&t.removeEventListener("click",this._closePanel)}}customElements.define("debug-panel-component",o);
