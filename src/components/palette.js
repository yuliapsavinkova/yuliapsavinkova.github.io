import './theme-toggle.js';

class Palette extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
      <style>
        /* FIX: Ensure the component takes up the full width of its container */
        :host {
            display: block;
            width: 100%;
        }
        .palette-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        .palette-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .palette-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .color-swatch, .effect-swatch {
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
            position: relative; /* For overlay */
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
            font-weight: bold;
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
        .button-showcase {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            align-items: center;
        }
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
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
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
      <section id="palette" class="palette-container">
        <section-header 
            title="Design System Palette"
            sub-title="See everything in one place">
        </section-header>
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
      </section>
    `;
  }
}
customElements.define('palette-component', Palette);
