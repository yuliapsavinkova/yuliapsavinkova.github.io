import "./shared/js/utils.js";
import "./shared/components/404/404.js";
import "./shared/components/header/header.js";
import "./shared/components/footer/footer.js";
import "./shared/components/progress/progress.js";
import "./shared/components/social-icons.js";
import "./shared/components/debug-panel.js";

import "./portfolio/components/section-header.js";

import "./portfolio/components/hero.js";
import "./portfolio/components/process.js";
import "./portfolio/components/expertise.js";
import "./portfolio/components/expertise-full.js";
import "./portfolio/components/about.js";
import "./portfolio/components/work-experience.js";
import "./portfolio/components/contact.js";

// main.js (entry point for SPA using Vanilla JS with Vite)
import { renderPage } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
  renderPage();
  window.addEventListener("popstate", renderPage);
});

document.body.addEventListener("click", (event) => {
  if (event.target.matches("a[href]:not([target])")) {
    event.preventDefault();
    history.pushState({}, "", event.target.href);
    renderPage();
  }
});

if (__DEBUG__) {
  console.log("Debug mode active!");
  document.getElementById("debug-panel").innerHTML = "<debug-panel-component></debug-panel-component>";
}
