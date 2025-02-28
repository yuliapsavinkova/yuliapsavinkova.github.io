class WorkingProcessComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="working-process" class="section working-process bg-working-girl">
        <section-header
          title="Working Process"
          sub-title="Collaborate, Design, Code, and Optimize for Responsive, High-Quality Web Experiences">
        </section-header>
      </section>
    `;
  }
}
customElements.define("working-process-component", WorkingProcessComponent);

class WorkingProcessComponent2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="working-process" class="section working-process bg-working-girl">
        <section-header 
          title="Working Process"
          sub-title="Collaborate, Design, Code, and Optimize for Responsive, High-Quality Web Experiences">
        </section-header>
      </section>
    `;

    // Adding JavaScript to handle background position change based on scroll
    const bgElement = this.querySelector(".bg-working-girl");

    if (bgElement) {
      // Function to update background position on scroll
      const updateBackgroundPosition = () => {
        const scrollPosition = window.scrollY;
        bgElement.style.backgroundPosition = `center ${scrollPosition * 0.3}px`; // Adjust the factor (0.3) for desired effect
      };

      // Add event listener for the scroll event
      window.addEventListener("scroll", updateBackgroundPosition);

      // Initial background position when the component is loaded
      updateBackgroundPosition();
    }
  }
}

// Define the custom element
customElements.define("working-process-component2", WorkingProcessComponent2);
