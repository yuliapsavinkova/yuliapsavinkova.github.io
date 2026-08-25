// theme-toggle.js — Modern Theme Switcher
class ThemeToggleButton extends HTMLElement {
  constructor() {
    super();
    this._toggleTheme = this._toggleTheme.bind(this);
  }

  _toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.dataset.theme || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    root.dataset.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
    this._updateAccessibilityLabel(nextTheme);
  }

  _updateAccessibilityLabel(theme) {
    const btn = this.querySelector('.theme-toggle-btn');
    if (btn) {
      const nextLabel = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;
      btn.setAttribute('aria-label', nextLabel);
      btn.setAttribute('title', nextLabel);
    }
  }

  connectedCallback() {
    this.innerHTML = `
      <style>    
        .theme-toggle-btn {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-default);
          background: var(--bg-surface);
          color: var(--text-primary);
          box-shadow: var(--shadow-sm);
          transition:
            color var(--duration-fast) var(--ease-smooth),
            border-color var(--duration-fast) var(--ease-smooth),
            background-color var(--duration-fast) var(--ease-smooth),
            transform var(--duration-fast) var(--ease-smooth),
            box-shadow var(--duration-fast) var(--ease-smooth);
        }

        .theme-toggle-btn:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          background: var(--bg-surface-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .theme-toggle-btn:active {
          transform: translateY(0);
        }

        .theme-toggle-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px var(--bg-canvas), 0 0 0 4px var(--border-focus);
        }

        .theme-toggle-btn svg {
          width: 1.1rem;
          height: 1.1rem;
          transition: transform var(--duration-mid) var(--ease-smooth), opacity var(--duration-fast) ease;
        }

        :root[data-theme="dark"] .theme-toggle-btn .sun {
          display: none;
        }
        :root[data-theme="dark"] .theme-toggle-btn .moon {
          display: block;
          animation: moonRotateIn 0.35s var(--ease-smooth);
        }
        :root[data-theme="light"] .theme-toggle-btn .sun {
          display: block;
          animation: sunSpinIn 0.35s var(--ease-smooth);
        }
        :root[data-theme="light"] .theme-toggle-btn .moon {
          display: none;
        }

        @keyframes sunSpinIn {
          from {
            transform: rotate(-90deg) scale(0.6);
            opacity: 0;
          }
          to {
            transform: rotate(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes moonRotateIn {
          from {
            transform: rotate(90deg) scale(0.6);
            opacity: 0;
          }
          to {
            transform: rotate(0) scale(1);
            opacity: 1;
          }
        }
      </style>
      <button type="button" class="theme-toggle-btn" aria-label="Toggle Theme">
        <!-- Sun (shown in light mode) -->
        <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>

        <!-- Moon (shown in dark mode) -->
        <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
    `;

    // Init theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.dataset.theme = savedTheme;
    this._updateAccessibilityLabel(savedTheme);

    this.querySelector('.theme-toggle-btn').addEventListener('click', this._toggleTheme);
  }

  disconnectedCallback() {
    const btn = this.querySelector('.theme-toggle-btn');
    if (btn) btn.removeEventListener('click', this._toggleTheme);
  }
}

customElements.define('theme-toggle-button', ThemeToggleButton);
