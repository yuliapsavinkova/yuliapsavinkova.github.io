export function renderPage() {
  const routes = {
    "": `
      <hero-component></hero-component>
      <expertise-component></expertise-component>
      <about-component></about-component>
      <working-process-component></working-process-component>
      <contact-component></contact-component>
    `,
    about: `
      <about-component></about-component>
      <work-experience-component></work-experience-component>
      <contact-component></contact-component>
    `,
    work: `
      <expertise-full-component></expertise-full-component>
      <contact-component></contact-component>
    `,
    palette: "<palette-component></palette-component>",
    d3: "<options-chart></options-chart>",
    portfolio: "<portfolio-chart></portfolio-chart>",
    contact: "<contact-component></contact-component>",
  };

  // Get the full hash and extract route and section
  const hash = window.location.hash.slice(2); // Remove `#/`
  const [path, queryString] = hash.split("?"); // Extract path and query params

  // Extract section from query string (if exists)
  const params = new URLSearchParams(queryString);
  const sectionId = params.get("section");

  const app = document.querySelector("main");

  // Render the page content
  app.innerHTML = routes[path] || "<error-component></error-component>";

  // Wait for rendering, then scroll to the section if provided
  requestAnimationFrame(() => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  // Scroll to top if no section specified
  if (!sectionId) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
