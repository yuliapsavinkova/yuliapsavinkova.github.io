class ScrollProgressRing extends HTMLElement {
  constructor() {
    super();

    this.innerHTML =
      `
      <div class="progress-container" id="progress-container">
        <div class="progress-ring" id="progress-ring"></div>
        <div class="arrow"><i class="fa-solid fa-arrow-up"></i></div>
      </div>
    ` + this.innerHTML; // Append existing content;

    this.progressContainer = document.querySelector("#progress-container");
    this.progressRing = document.querySelector("#progress-ring");

    this.updateProgress = this.updateProgress.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  connectedCallback() {
    // Add event listeners
    window.addEventListener("scroll", this.updateProgress);
    this.progressContainer.addEventListener("click", this.scrollToTop);

    // Initial progress update
    this.updateProgress();
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.updateProgress);
    this.progressContainer.removeEventListener("click", this.scrollToTop);
  }

  updateProgress() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min((scrollTop / scrollHeight) * 100, 100);

    // Show the progress container only after some scrolling
    if (scrollTop > 0) {
      this.progressContainer.classList.add("visible");
    } else {
      this.progressContainer.classList.remove("visible");
    }

    // Update CSS variable for the conic-gradient
    this.progressRing.style.setProperty("--scroll-progress", `${scrollPercent}%`);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
customElements.define("scroll-progress-ring", ScrollProgressRing);
