// Need this for svg sprite icons to be added to html
import 'virtual:svg-icons-register';

import './shared/js/utils.js';
import './shared/components/404/404.js';
import './shared/components/header/header.js';
import './shared/components/footer/footer.js';
import './shared/components/progress/progress.js';
import './shared/components/social-icons.js';
import './portfolio/components/section-header.js';

// Import router
import { renderPage } from './router.js';

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
  await import('./shared/components/debug-panel.js');

  console.log('Debug mode active!');
  document.getElementById('debug-panel').innerHTML =
    '<debug-panel-component></debug-panel-component>';
}
