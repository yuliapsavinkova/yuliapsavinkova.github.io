/* Fonts */
import './css/fonts.css';
import './preload-fonts.js';

/* Shared CSS */
import './css/reset.css';
import './css/variables.css';
import './css/typography.css';
import './css/layout.css';
import './css/colors.css';
import './css/buttons.css';
import './css/icons.css';
import './css/utils.css';

/* Svg sprite icons */
import 'virtual:svg-icons-register';

/* Components */
import './components/header/header.js';
import './components/section-header.js';

// Import router
import { renderPage } from './router.js';
// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  renderPage();
  window.addEventListener('hashchange', renderPage);
});

document.body.addEventListener('click', (event) => {
  const link = event.target.closest('a[href]');
  if (link && link.getAttribute('href').startsWith('#/')) {
    event.preventDefault();
    window.location.hash = link.getAttribute('href').slice(1);
  }
});

// Debug mode
if (import.meta.env.VITE_ENVIRONMENT) {
  (async () => {
    await import('./components/debug-panel.js');
    console.log('Debug mode active!');
    document.getElementById('debug-panel').innerHTML =
      '<debug-panel-component></debug-panel-component>';
  })();
}
