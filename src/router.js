export function renderPage() {
  const routes = {
    "/": `
      <hero-component></hero-component>
      <expertise-component></expertise-component>
      <about-component></about-component>
      <working-process-component></working-process-component>
      <contact-component></contact-component>
    `,
    "/about": `
      <about-component></about-component>
      <work-experience-component></work-experience-component>
      <contact-component></contact-component>
    `,
    "/work": `
      <work-component></work-component>
      <contact-component></contact-component>
    `,
    "/contact": "<contact-component></contact-component>",
    "/profile/:id": (params) => `<profile-component user-id="${params.id}"></profile-component>`,
  };

  // const path = window.location.pathname;
  const path = window.location.pathname.replace("/yuliapsavinkova.github.io", "");
  const app = document.querySelector("main");

  // Handle parameterized routes
  for (const route in routes) {
    const regex = new RegExp(`^${route.replace(/:\w+/g, "(\\w+)")}$`);
    const match = path.match(regex);
    if (match) {
      const keys = (route.match(/:(\w+)/g) || []).map((key) => key.substring(1));
      const params = Object.fromEntries(keys.map((key, index) => [key, match[index + 1]]));
      app.innerHTML = typeof routes[route] === "function" ? routes[route](params) : routes[route];

      // Scroll to top after rendering new route
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  }

  // Default 404 page
  app.innerHTML = "<error-component></error-component>";
}
