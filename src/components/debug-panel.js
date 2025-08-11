import { Utils } from '../utils.js';

class DebugPanelComponent extends HTMLElement {
  constructor() {
    super();
    this._toggleOutline = this._toggleOutline.bind(this);
    this._toggleTheme = this._toggleTheme.bind(this);
    this._closePanel = this._closePanel.bind(this);
    this._updateWidth = this._updateWidth.bind(this);
    this._resizeHandler = Utils.throttle(this._updateWidth, 200);
  }

  _updateWidth() {
    const debugPanel = this.querySelector('#debugPanel');
    if (!debugPanel) return;
    const width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height =
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    debugPanel.querySelector('.debug-size').textContent = `${width} x ${height}`;
    debugPanel.querySelector('.orientation').textContent = window.matchMedia(
      '(orientation: portrait)',
    ).matches
      ? 'Portrait'
      : 'Landscape';
  }

  _toggleOutline(event) {
    document.body.classList.toggle('debug-outline', event.target.checked);
  }

  _toggleTheme() {
    const root = document.documentElement;
    const newTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  }

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
          color: var(--color-primary);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
          background: var(--color-primary-10);
          backdrop-filter: blur(4rem);
          box-shadow: var(--box-shadow);
          border: 1px solid var(--color-primary-30);
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
          width: 1.5rem;
          height: 1.5rem;
        }
        .close-btn svg {
          width: 1rem;
          height: 1rem;
          padding: 1px;
        }
        .theme-toggle-btn {
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          border-radius: var(--border-radius);
          border: 1px solid var(--color-primary);
          background: var(--color-primary-10);
          color: var(--color-primary);
        }
        .theme-toggle-btn:hover {
          background: var(--color-primary-20);
        }
      </style>

      <div id="debugPanel" class="debug-panel">
        <div class="debug-header">
          <h3>Debug Panel</h3>
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
        <div><button id="theme-toggle" class="theme-toggle-btn">Toggle Theme</button></div>
        <div><a href="#/palette" target="_blank">Palette</a></div>
      </div>
    `;

    // Events
    window.addEventListener('resize', this._resizeHandler);
    this.querySelector('#toggle-outline').addEventListener('change', this._toggleOutline);
    this.querySelector('#theme-toggle').addEventListener('click', this._toggleTheme);
    this.querySelector('.close-btn').addEventListener('click', this._closePanel);

    // Set theme from saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.dataset.theme = savedTheme;
    }

    // Initial size update
    this._updateWidth();
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._resizeHandler);
    const toggleOutline = this.querySelector('#toggle-outline');
    const closeBtn = this.querySelector('.close-btn');
    const themeToggle = this.querySelector('#theme-toggle');

    if (toggleOutline) toggleOutline.removeEventListener('change', this._toggleOutline);
    if (closeBtn) closeBtn.removeEventListener('click', this._closePanel);
    if (themeToggle) themeToggle.removeEventListener('click', this._toggleTheme);
  }
}

customElements.define('debug-panel-component', DebugPanelComponent);
