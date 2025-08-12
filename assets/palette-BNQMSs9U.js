class r extends HTMLElement{constructor(){super(),this._toggleTheme=this._toggleTheme.bind(this)}_toggleTheme(){const e=document.documentElement,o=e.dataset.theme==="dark"?"light":"dark";e.dataset.theme=o,localStorage.setItem("theme",o),this._updateIcon(o)}_updateIcon(e){const o=this.querySelector(".sun"),t=this.querySelector(".moon");e==="light"?(o.style.display="block",t.style.display="none"):(o.style.display="none",t.style.display="block")}connectedCallback(){this.innerHTML=`
      <div class="theme-toggle-btn" aria-label="Toggle Theme">
        <!-- Sun -->
        <svg class="sun enable-icon-scale" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="4"/>
          <g stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <line x1="12" y1="2" x2="12" y2="5"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
            <line x1="2" y1="12" x2="5" y2="12"/>
            <line x1="19" y1="12" x2="22" y2="12"/>
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
          </g>
        </svg>

        <!-- Moon -->
        <svg class="moon enable-icon-scale" viewBox="0 0 24 24" fill="currentColor" style="display:none">
          <path d="M21 12.79A9 9 0 0 1 12.21 3a9 9 0 1 0 8.79 9.79z"/>
        </svg>
      </div>
    `;const e=localStorage.getItem("theme")||"light";document.documentElement.dataset.theme=e,this._updateIcon(e),this.querySelector(".theme-toggle-btn").addEventListener("click",this._toggleTheme)}disconnectedCallback(){const e=this.querySelector(".theme-toggle-btn");e&&e.removeEventListener("click",this._toggleTheme)}}customElements.define("theme-toggle-button",r);class a extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=`
      <style>
        .palette-container {
          max-width: 100%;
          margin: 0 auto;
        }

        .palette-container h2 {
          text-align: center;
          padding: 2rem 0;
        }

        /* Shared swatch layout */
        .palette-grid {
          display: flex;
          flex-wrap: wrap;         /* wrap to new line */
          gap: 1.5rem;             /* consistent spacing */
          justify-content: center; /* center the row contents */
          margin-bottom: 3rem;
        }

        .palette-grid > * {
          flex: 0 0 12rem;         /* fixed width */
        }

        /* Swatches */
        .color-swatch,
        .effect-swatch {
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .color-display {
          height: 8rem;
        }

        .effect-display {
          height: 8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative; /* for overlay positioning */
          background-color: var(--color-surface);
        }

        .effect-display-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .color-info {
          padding: 1rem;
          background-color: var(--color-surface);
          border-top: 1px solid var(--color-border);
        }

        .color-info h3 {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
          color: var(--color-text-heading);
        }

        .color-info p {
          margin: 0;
          font-size: 0.875rem;
          color: var(--color-text-body);
        }

        /* Buttons */
        .button-showcase {
          display: flex;
          flex-wrap: wrap;
          justify-content: center; /* center the buttons */
          gap: 1rem;
          margin-bottom: 3rem;
        }

        /* Floating theme toggle */
        .theme-toggle-float {
          position: fixed;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          z-index: 9999;
        }

        .theme-toggle-float .theme-toggle-btn {
          width: 2rem;
          height: 2rem;
          background: var(--button-bg, #fff);
          color: var(--button-fg, #333);
          border: none;
          border-radius: 0.5rem 0 0 0.5rem;
          padding: 0.5rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: transform 0.2s ease, right 0.2s ease;
        }

        .theme-toggle-float:hover .theme-toggle-btn {
          transform: translateX(-10%);
        }

      </style>
      <div class="theme-toggle-float">
        <theme-toggle-button></theme-toggle-button>
      </div>      
      <section id="palette">
        <section-header 
            title="Design System Palette"
            sub-title="See everything in one place">
        </section-header>
        <div class="palette-container">
          <h2>Core Palette</h2>
          <div class="palette-grid">
              <div class="color-swatch"><div class="color-display" style="background-color: var(--color-background);"></div><div class="color-info"><h3>Background</h3><p>--color-background</p></div></div>
              <div class="color-swatch"><div class="color-display" style="background-color: var(--color-surface);"></div><div class="color-info"><h3>Surface</h3><p>--color-surface</p></div></div>
              <div class="color-swatch"><div class="color-display" style="background-color: var(--color-text-heading);"></div><div class="color-info"><h3>Heading Text</h3><p>--color-text-heading</p></div></div>
              <div class="color-swatch"><div class="color-display" style="background-color: var(--color-text-body);"></div><div class="color-info"><h3>Body Text</h3><p>--color-text-body</p></div></div>
              <div class="color-swatch"><div class="color-display" style="background-color: var(--color-primary);"></div><div class="color-info"><h3>Primary</h3><p>--color-primary</p></div></div>
              <div class="color-swatch"><div class="color-display" style="background-color: var(--color-accent);"></div><div class="color-info"><h3>Accent</h3><p>--color-accent</p></div></div>
          </div>
          <h2>Component Colors</h2>
          <div class="palette-grid">
              <div class="color-swatch"><div class="color-display" style="background-color: var(--color-form-background);"></div><div class="color-info"><h3>Form Background</h3><p>--color-form-background</p></div></div>
          </div>
          <h2>Effects</h2>
          <div class="palette-grid">
              <div class="effect-swatch">
                  <div class="effect-display" style="box-shadow: var(--box-shadow);">Box Shadow</div>
                  <div class="color-info"><h3>Box Shadow</h3><p>--box-shadow</p></div>
              </div>
              <div class="effect-swatch">
                  <div class="effect-display" style="background-color: var(--color-primary);">
                      <div class="effect-display-overlay" style="background-color: var(--color-overlay);">Overlay</div>
                  </div>
                  <div class="color-info"><h3>Overlay</h3><p>--color-overlay</p></div>
              </div>
          </div>
          <h2>Buttons</h2>
          <div class="button-showcase">
            <button class="button button-primary">Primary Button</button>
            <button class="button button-secondary">Secondary Button</button>
            <button class="button button-action">Action Button</button>
          </div>
        </div>
      </section>
    `}}customElements.define("palette-component",a);
