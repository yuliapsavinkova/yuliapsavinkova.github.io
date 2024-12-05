class WorkingProcessComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="working-process"  class="section working-process">
                <h2>Working Process</h2>
                <p>Streamlined Steps to Deliver Reliable and Scalable Software Solutions</p>
                <div class="gra-separator"></div>
            </section>
        `;
    }
}
customElements.define('working-process-component', WorkingProcessComponent);
