export function initAnalytics() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VG1XW4WL1T';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-VG1XW4WL1T', { send_page_view: false });
}

export function trackPageview(path) {
  if (!window.gtag) return;
  window.gtag('event', 'page_view', {
    page_title: path || 'home',
    page_location: window.location.href,
    page_path: '/' + (path || ''),
  });
}
