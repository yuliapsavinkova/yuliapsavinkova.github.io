/* Inline Critical CSS */
import resetCss from './css/reset.css?inline';
import variablesCss from './css/variables.css?inline';
import themesCss from './css/themes.css?inline';
import typographyCss from './css/typography.css?inline';
import layoutCss from './css/layout.css?inline';
import colorsCss from './css/colors.css?inline';
import buttonsCss from './css/buttons.css?inline';
import iconsCss from './css/icons.css?inline';
import utilsCss from './css/utils.css?inline';
import header from './components/header/header.css?inline';

/* Svg sprite icons */
import 'virtual:svg-icons-register';

/* Global components */
import './components/header/header.js';
import './components/section-header.js';

// Inject critical CSS inline in a <style> tag at runtime
const criticalCss = [
  resetCss,
  variablesCss,
  themesCss,
  typographyCss,
  layoutCss,
  colorsCss,
  buttonsCss,
  iconsCss,
  utilsCss,
  header,
].join('\n');

const styleTag = document.createElement('style');
styleTag.id = 'critical-css-inline';
styleTag.textContent = criticalCss;
document.head.appendChild(styleTag);

// Router bootstrap
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

// if (import.meta.env.VITE_ENVIRONMENT) {
//   import('./debug-tools.js').then(({ loadDebugTools }) => {
//     loadDebugTools();
//   });
// }
