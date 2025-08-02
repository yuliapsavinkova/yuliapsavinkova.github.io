import fontRegularUrl from './assets/fonts/montserrat-v29-latin-regular.woff2?url';
import font500Url from './assets/fonts/montserrat-v29-latin-500.woff2?url';
import font600Url from './assets/fonts/montserrat-v29-latin-600.woff2?url';
import font700Url from './assets/fonts/montserrat-v29-latin-700.woff2?url';

function preloadFont(href) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.type = 'font/woff2';
  link.href = href;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
}

preloadFont(fontRegularUrl);
preloadFont(font500Url);
preloadFont(font600Url);
preloadFont(font700Url);
