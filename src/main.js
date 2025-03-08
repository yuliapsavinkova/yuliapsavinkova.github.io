import "./shared/js/utils.js";
import "./shared/components/404/404.js";
import "./shared/components/header/header.js";
import "./shared/components/footer/footer.js";
import "./shared/components/progress/progress.js";
import "./shared/components/social-icons.js";
import "./shared/components/debug-panel.js";
import "./shared/components/palette/palette.js";
import "./shared/components/d3/d3.js";
import "./shared/components/d3/portfolio.js";

import "./portfolio/components/section-header.js";
import "./portfolio/components/hero.js";
import "./portfolio/components/process.js";
import "./portfolio/components/expertise.js";
import "./portfolio/components/expertise-full.js";
import "./portfolio/components/about.js";
import "./portfolio/components/work-experience.js";
import "./portfolio/components/contact.js";

// Import router
import { renderPage } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
  renderPage();
  window.addEventListener("hashchange", renderPage);
});

document.body.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (link && link.getAttribute("href").startsWith("#/")) {
    event.preventDefault();
    window.location.hash = link.getAttribute("href").slice(1);
  }
});

// Debug mode
if (typeof __DEBUG__ !== "undefined" && __DEBUG__) {
  console.log("Debug mode active!");
  document.getElementById("debug-panel").innerHTML = "<debug-panel-component></debug-panel-component>";
}
