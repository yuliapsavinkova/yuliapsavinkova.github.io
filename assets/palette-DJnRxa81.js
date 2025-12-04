class g extends HTMLElement{constructor(){super(),this._toggleTheme=this._toggleTheme.bind(this),this._themes=["light","dark","pastel"]}_toggleTheme(){const e=document.documentElement,t=e.dataset.theme||this._themes[0],o=this._themes.indexOf(t),r=this._themes[(o+1)%this._themes.length];e.dataset.theme=r,localStorage.setItem("theme",r),this._updateIcon(r)}_updateIcon(e){const t=this.querySelector(".sun"),o=this.querySelector(".moon");e==="light"?(t.style.display="block",t.style.opacity="1",o.style.display="none"):e==="dark"?(t.style.display="none",o.style.display="block"):e==="pastel"&&(t.style.display="block",t.style.opacity="0.6",o.style.display="none")}connectedCallback(){this.innerHTML=`
      <style>    
        .theme-toggle-btn {
          cursor: pointer;
        } 
      </style>
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
    `;const e=localStorage.getItem("theme")||this._themes[0];document.documentElement.dataset.theme=e,this._updateIcon(e),this.querySelector(".theme-toggle-btn").addEventListener("click",this._toggleTheme)}disconnectedCallback(){const e=this.querySelector(".theme-toggle-btn");e&&e.removeEventListener("click",this._toggleTheme)}}customElements.define("theme-toggle-button",g);class m extends HTMLElement{connectedCallback(){this.render()}hslToRgb(e,t,o){t/=100,o/=100;let r=(1-Math.abs(2*o-1))*t,a=r*(1-Math.abs(e/60%2-1)),c=o-r/2,s=0,l=0,n=0;return 0<=e&&e<60?(s=r,l=a,n=0):60<=e&&e<120?(s=a,l=r,n=0):120<=e&&e<180?(s=0,l=r,n=a):180<=e&&e<240?(s=0,l=a,n=r):240<=e&&e<300?(s=a,l=0,n=r):300<=e&&e<360&&(s=r,l=0,n=a),s=Math.round((s+c)*255),l=Math.round((l+c)*255),n=Math.round((n+c)*255),[s,l,n]}componentToHex(e){const t=e.toString(16);return t.length===1?"0"+t:t}rgbToHex(e,t,o){return"#"+this.componentToHex(e)+this.componentToHex(t)+this.componentToHex(o)}getColorCodes(e,t=document.documentElement){const o=getComputedStyle(t).getPropertyValue(e).trim(),r=o.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);if(!r)return{hsl:o,rgb:"N/A",hex:"N/A"};const a=parseInt(r[1]),c=parseInt(r[2]),s=parseInt(r[3]),[l,n,i]=this.hslToRgb(a,c,s),h=this.rgbToHex(l,n,i);return{hsl:`hsl(${a}, ${c}%, ${s}%)`,rgb:`rgb(${l}, ${n}, ${i})`,hex:h}}createColorSwatch(e,t,o){return`
          <div class="color-swatch">
              <div class="color-display" style="background-color: var(${t});"></div>
              <div class="color-info">
                  <h3>${e}</h3>
                  <p class="color-name">--${t.replace("--","")}</p>
                  <p><strong>HEX:</strong> ${o.hex}</p>
                  <p><strong>RGB:</strong> ${o.rgb}</p>
                  <p><strong>HLS:</strong> ${o.hsl}</p>
              </div>
          </div>
      `}render(){const e=this.getColorCodes("--color-background"),t=this.getColorCodes("--color-surface"),o=this.getColorCodes("--color-primary"),r=this.getColorCodes("--color-accent"),a=this.getColorCodes("--color-text-heading"),c=this.getColorCodes("--color-text-body");this.innerHTML=`
      <style>
        .palette-container {
          max-width: 100%;
          margin: 0 auto;
        }

        .palette-container h2 {
          text-align: center;
          padding-bottom: 1rem;
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
          flex: 0 0 10rem;         /* fixed width */
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
          padding: 0.5rem;
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
          font-size: 0.7rem;
          color: var(--color-text-body);
        }
        
        .color-info p strong {
            font-size: 0.75rem; /* Make the code labels slightly larger */
        }

        .color-name {
          padding-bottom: 0.5rem;
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
          background: var(--color-surface);
          color: var(--color-primary);
          border-radius: 0.5rem 0 0 0.5rem;
          padding: 0.3rem;
          box-shadow: var(--shadow-md);
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
        <div class="palette-container">
          <h2>Core Palette</h2>
          <div class="palette-grid">
              ${this.createColorSwatch("Background","--color-background",e)}
              ${this.createColorSwatch("Surface","--color-surface",t)}
              ${this.createColorSwatch("Primary","--color-primary",o)}
              ${this.createColorSwatch("Accent","--color-accent",r)}
              ${this.createColorSwatch("Heading Text","--color-text-heading",a)}
              ${this.createColorSwatch("Body Text","--color-text-body",c)}
          </div>
          <h2>Effects</h2>
          <div class="palette-grid">
              <div class="effect-swatch">
                  <div class="effect-display" style="box-shadow: var(--shadow-md);">Box Shadow</div>
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
    `}}customElements.define("palette-component",m);
