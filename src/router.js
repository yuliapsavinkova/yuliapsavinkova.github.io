// Helper to wait until all custom elements are defined and rendered
async function waitForElement(selector, timeout = 3000) {
  const start = performance.now();
  while (performance.now() - start < timeout) {
    const el = document.querySelector(selector);
    if (el) return el;
    await new Promise((r) => setTimeout(r, 50));
  }
  return null;
}

export async function renderPage() {
  const hash = window.location.hash.slice(2); // Remove `#/`
  const [path, queryString] = hash.split('?');
  const params = new URLSearchParams(queryString);
  const sectionId = params.get('section');
  const app = document.querySelector('main');

  switch (path) {
    case '':
      // 1. Load and render only the hero component immediately.
      await import('./components/hero/hero.js');
      app.innerHTML = `<hero-component></hero-component>`;

      // 2. Load the rest of the page.
      const loadRemainingContent = async () => {
        await Promise.all([
          import('./components/expertise.js'),
          import('./components/about.js'),
          import('./components/process.js'),
          import('./components/contact/contact.js'),
          import('./components/footer.js'),
        ]);

        app.insertAdjacentHTML(
          'beforeend',
          `
          <expertise-component></expertise-component>
          <about-component></about-component>
          <working-process-component></working-process-component>
          <contact-component></contact-component>
          <footer-component copyright-name="Yulia Savinkova"></footer-component>
        `,
        );
      };

      // 3. Ask the browser to run this function when it's idle.
      // A small timeout is used as a fallback for browsers that don't support it.
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadRemainingContent);
      } else {
        setTimeout(loadRemainingContent, 200);
      }
      break;

    case 'about':
      await Promise.all([
        import('./components/about.js'),
        import('./components/work-experience/work-experience.js'),
        import('./components/contact/contact.js'),
        import('./components/footer.js'),
      ]);
      app.innerHTML = `
        <about-component></about-component>
        <work-experience-component></work-experience-component>
        <contact-component></contact-component>
        <footer-component copyright-name="Yulia Savinkova"></footer-component>
      `;
      break;

    case 'work':
      await Promise.all([
        import('./components/expertise-full.js'),
        import('./components/contact/contact.js'),
        import('./components/footer.js'),
      ]);
      app.innerHTML = `
        <expertise-full-component></expertise-full-component>
        <contact-component></contact-component>
        <footer-component copyright-name="Yulia Savinkova"></footer-component>
      `;
      break;

    case 'palette':
      await Promise.all([
        import('./components/palette/palette.js'),
        import('./components/footer.js'),
      ]);
      app.innerHTML = `
        <palette-component></palette-component>
        <footer-component copyright-name="Yulia Savinkova"></footer-component>
      `;
      break;

    case 'contact':
      await Promise.all([
        import('./components/contact/contact.js'),
        import('./components/footer.js'),
      ]);
      app.innerHTML = `
        <contact-component></contact-component>
        <footer-component copyright-name="Yulia Savinkova"></footer-component>
      `;
      break;

    default:
      await Promise.all([import('./components/404/404.js'), import('./components/footer.js')]);
      app.innerHTML = `
        <error-component></error-component>
        <footer-component copyright-name="Yulia Savinkova"></footer-component>
      `;
  }

  // Scroll to section if provided
  if (sectionId) {
    const sectionSelector = `#${CSS.escape(sectionId)}`;
    const section = await waitForElement(sectionSelector);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Defer progress bar loading until scroll starts (non-blocking and minimal)
  const onScroll = () => {
    import('./components/progress/progress.js');
    window.removeEventListener('scroll', onScroll);
  };
  window.addEventListener('scroll', onScroll, { once: true });
}
