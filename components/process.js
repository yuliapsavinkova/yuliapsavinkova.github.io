class WorkingProcessComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="working-process" class="section working-process">
                <h1>Working Process</h1>
                <p class="large">I collaborate, design, code, and optimize for responsive, high-quality web experiences.</p>
                <div class="gra-separator"></div>
            </section>
        `;
  }
}
customElements.define("working-process-component", WorkingProcessComponent);
