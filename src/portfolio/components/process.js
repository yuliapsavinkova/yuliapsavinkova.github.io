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
