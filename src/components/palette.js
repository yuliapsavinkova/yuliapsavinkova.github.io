import './theme-toggle.js';

class Palette extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  // Helper to convert HSL to RGB
  hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [r, g, b];
  }

  // Helper to convert RGB component to Hex
  componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  // Helper to convert RGB to Hex
  rgbToHex(r, g, b) {
    return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  // Function to get all color codes for a CSS variable
  getColorCodes(cssVariable, element = document.documentElement) {
    const hslString = getComputedStyle(element).getPropertyValue(cssVariable).trim();

    // Attempt to extract H, S, L values
    const match = hslString.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);

    if (!match) {
      // Handle cases like 'var(--white)' or simple keywords if needed,
      // but for your defined structure, this should work.
      return {
        hsl: hslString,
        rgb: 'N/A',
        hex: 'N/A',
      };
    }

    const h = parseInt(match[1]);
    const s = parseInt(match[2]);
    const l = parseInt(match[3]);

    const [r, g, b] = this.hslToRgb(h, s, l);
    const hex = this.rgbToHex(r, g, b);

    return {
      hsl: `hsl(${h}, ${s}%, ${l}%)`,
      rgb: `rgb(${r}, ${g}, ${b})`,
      hex: hex,
    };
  }

  // New helper to create a color swatch HTML block
  createColorSwatch(name, variable, codes) {
    return /*html*/ `
          <div class="color-swatch">
              <div class="color-display" style="background-color: var(${variable});"></div>
              <div class="color-info">
                  <h3>${name}</h3>
                  <p class="color-name">--${variable.replace('--', '')}</p>
                  <p><strong>HEX:</strong> ${codes.hex}</p>
                  <p><strong>RGB:</strong> ${codes.rgb}</p>
                  <p><strong>HLS:</strong> ${codes.hsl}</p>
              </div>
          </div>
      `;
  }

  render() {
    // Get the codes for the current theme
    const backgroundCodes = this.getColorCodes('--color-background');
    const surfaceCodes = this.getColorCodes('--color-surface');
    const primaryCodes = this.getColorCodes('--color-primary');
    const accentCodes = this.getColorCodes('--color-accent');
    const textHeadingCodes = this.getColorCodes('--color-text-heading');
    const textBodyCodes = this.getColorCodes('--color-text-body');

    this.innerHTML = /*html*/ `
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
              ${this.createColorSwatch('Background', '--color-background', backgroundCodes)}
              ${this.createColorSwatch('Surface', '--color-surface', surfaceCodes)}
              ${this.createColorSwatch('Primary', '--color-primary', primaryCodes)}
              ${this.createColorSwatch('Accent', '--color-accent', accentCodes)}
              ${this.createColorSwatch('Heading Text', '--color-text-heading', textHeadingCodes)}
              ${this.createColorSwatch('Body Text', '--color-text-body', textBodyCodes)}
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
    `;
  }
}
customElements.define('palette-component', Palette);
