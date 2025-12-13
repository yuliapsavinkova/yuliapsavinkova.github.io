import"./theme-toggle-9PDmT22X.js";class h extends HTMLElement{connectedCallback(){this.render()}hslToRgb(t,o,r){o/=100,r/=100;let e=(1-Math.abs(2*r-1))*o,c=e*(1-Math.abs(t/60%2-1)),l=r-e/2,a=0,s=0,n=0;return 0<=t&&t<60?(a=e,s=c,n=0):60<=t&&t<120?(a=c,s=e,n=0):120<=t&&t<180?(a=0,s=e,n=c):180<=t&&t<240?(a=0,s=c,n=e):240<=t&&t<300?(a=c,s=0,n=e):300<=t&&t<360&&(a=e,s=0,n=c),a=Math.round((a+l)*255),s=Math.round((s+l)*255),n=Math.round((n+l)*255),[a,s,n]}componentToHex(t){const o=t.toString(16);return o.length===1?"0"+o:o}rgbToHex(t,o,r){return"#"+this.componentToHex(t)+this.componentToHex(o)+this.componentToHex(r)}getColorCodes(t,o=document.documentElement){const r=getComputedStyle(o).getPropertyValue(t).trim(),e=r.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);if(!e)return{hsl:r,rgb:"N/A",hex:"N/A"};const c=parseInt(e[1]),l=parseInt(e[2]),a=parseInt(e[3]),[s,n,i]=this.hslToRgb(c,l,a),d=this.rgbToHex(s,n,i);return{hsl:`hsl(${c}, ${l}%, ${a}%)`,rgb:`rgb(${s}, ${n}, ${i})`,hex:d}}createColorSwatch(t,o,r){return`
          <div class="color-swatch">
              <div class="color-display" style="background-color: var(${o});"></div>
              <div class="color-info">
                  <h3>${t}</h3>
                  <p class="color-name">--${o.replace("--","")}</p>
                  <p><strong>HEX:</strong> ${r.hex}</p>
                  <p><strong>RGB:</strong> ${r.rgb}</p>
                  <p><strong>HLS:</strong> ${r.hsl}</p>
              </div>
          </div>
      `}render(){const t=this.getColorCodes("--color-background"),o=this.getColorCodes("--color-surface"),r=this.getColorCodes("--color-primary"),e=this.getColorCodes("--color-accent"),c=this.getColorCodes("--color-text-heading"),l=this.getColorCodes("--color-text-body");this.innerHTML=`
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
          border-radius: var(--border-radius);
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
          border-radius: var(--border-radius) 0 0 var(--border-radius);
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
              ${this.createColorSwatch("Background","--color-background",t)}
              ${this.createColorSwatch("Surface","--color-surface",o)}
              ${this.createColorSwatch("Primary","--color-primary",r)}
              ${this.createColorSwatch("Accent","--color-accent",e)}
              ${this.createColorSwatch("Heading Text","--color-text-heading",c)}
              ${this.createColorSwatch("Body Text","--color-text-body",l)}
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
    `}}customElements.define("palette-component",h);
