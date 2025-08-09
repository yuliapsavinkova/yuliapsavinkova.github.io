/* Fonts */
import './css/fonts.css';

/* Inline Critical CSS */
import resetCss from './css/reset.css?inline';
import variablesCss from './css/variables.css?inline';
import typographyCss from './css/typography.css?inline';
import layoutCss from './css/layout.css?inline';
import colorsCss from './css/colors.css?inline';
import buttonsCss from './css/buttons.css?inline';
import iconsCss from './css/icons.css?inline';
import utilsCss from './css/utils.css?inline';

/* Svg sprite icons */
import 'virtual:svg-icons-register';

/* Components */
import './components/header/header.js';
import './components/section-header.js';

// Inject critical CSS inline in a <style> tag at runtime
const criticalCss = [
  resetCss,
  variablesCss,
  typographyCss,
  layoutCss,
  colorsCss,
  buttonsCss,
  iconsCss,
  utilsCss,
].join('\n');

const styleTag = document.createElement('style');
styleTag.setAttribute('id', 'critical-css-inline');
styleTag.textContent = criticalCss;
document.head.appendChild(styleTag);

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
