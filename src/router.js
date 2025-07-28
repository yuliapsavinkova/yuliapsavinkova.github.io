export async function renderPage() {
  const hash = window.location.hash.slice(2); // Remove `#/`
  const [path, queryString] = hash.split('?');
  const params = new URLSearchParams(queryString);
  const sectionId = params.get('section');
  const app = document.querySelector('main');

  // Dynamically import components based on route
  switch (path) {
    case '':
      await Promise.all([
        import('./portfolio/components/hero.js'),
        import('./portfolio/components/expertise.js'),
        import('./portfolio/components/about.js'),
        import('./portfolio/components/process.js'),
        import('./portfolio/components/contact.js'),
      ]);
      app.innerHTML = `
        <hero-component></hero-component>
        <expertise-component></expertise-component>
        <about-component></about-component>
        <working-process-component></working-process-component>
        <contact-component></contact-component>
      `;
      break;

    case 'about':
      await Promise.all([
        import('./portfolio/components/about.js'),
        import('./portfolio/components/work-experience.js'),
        import('./portfolio/components/contact.js'),
      ]);
      app.innerHTML = `
        <about-component></about-component>
        <work-experience-component></work-experience-component>
        <contact-component></contact-component>
      `;
      break;

    case 'work':
      await Promise.all([
        import('./portfolio/components/expertise-full.js'),
        import('./portfolio/components/contact.js'),
      ]);
      app.innerHTML = `
        <expertise-full-component></expertise-full-component>
        <contact-component></contact-component>
      `;
      break;

    case 'palette':
      await import('./shared/components/palette/palette.js');
      app.innerHTML = `<palette-component></palette-component>`;
      break;

    case 'contact':
      await import('./portfolio/components/contact.js');
      app.innerHTML = `<contact-component></contact-component>`;
      break;

    default:
      await import('./shared/components/404/404.js');
      app.innerHTML = `<error-component></error-component>`;
  }

  // Scroll to section if provided
  requestAnimationFrame(() => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      section
        ? section.scrollIntoView({ behavior: 'smooth' })
        : window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}
