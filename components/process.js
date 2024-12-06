class WorkingProcessComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="working-process" class="section working-process parallax-background">
                <h2>Working Process</h2>
                <h5>Streamlined Steps to Deliver Reliable and Scalable Software Solutions</h5>
                <div class="gra-separator"></div>
            </section>
        `;
    }
}
customElements.define('working-process-component', WorkingProcessComponent);
