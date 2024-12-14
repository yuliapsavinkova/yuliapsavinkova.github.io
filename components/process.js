class WorkingProcessComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="working-process" class="section working-process">
                <h2>Working Process</h2>
                <p class="large">I am a U.S.-based remote Software Engineer, with the flexibility to travel on-site as needed.</p>
                <div class="gra-separator"></div>
            </section>
        `;
    }
}
customElements.define('working-process-component', WorkingProcessComponent);
