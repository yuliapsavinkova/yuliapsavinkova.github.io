class WorkingProcessComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="working-process" class="section working-process">
                <h2>Working Process</h2>
                <p class="large">I collaborate, design, code, and optimize for responsive, high-quality web experiences.</p>
                <div class="gra-separator"></div>
            </section>
        `;
  }
}
customElements.define("working-process-component", WorkingProcessComponent);
