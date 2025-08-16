// theme-toggle.js
class ThemeToggleButton extends HTMLElement {
  constructor() {
    super();
    this._toggleTheme = this._toggleTheme.bind(this);
    this._themes = ['light', 'dark', 'pastel']; // Add new themes here
  }

  _toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.dataset.theme || this._themes[0];
    const currentIndex = this._themes.indexOf(currentTheme);
    const nextTheme = this._themes[(currentIndex + 1) % this._themes.length];

    root.dataset.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
    this._updateIcon(nextTheme);
  }

  _updateIcon(theme) {
    const sunIcon = this.querySelector('.sun');
    const moonIcon = this.querySelector('.moon');

    // Basic example: sun for light, moon for dark, sun tinted for pastel
    if (theme === 'light') {
      sunIcon.style.display = 'block';
      sunIcon.style.opacity = '1';
      moonIcon.style.display = 'none';
    } else if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else if (theme === 'pastel') {
      sunIcon.style.display = 'block';
      sunIcon.style.opacity = '0.6'; // visually differentiate pastel
      moonIcon.style.display = 'none';
    }
  }

  connectedCallback() {
    this.innerHTML = `
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
    `;

    // Init theme
    const savedTheme = localStorage.getItem('theme') || this._themes[0];
    document.documentElement.dataset.theme = savedTheme;
    this._updateIcon(savedTheme);

    this.querySelector('.theme-toggle-btn').addEventListener('click', this._toggleTheme);
  }

  disconnectedCallback() {
    const btn = this.querySelector('.theme-toggle-btn');
    if (btn) btn.removeEventListener('click', this._toggleTheme);
  }
}

customElements.define('theme-toggle-button', ThemeToggleButton);
