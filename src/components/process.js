import './process.css';

class WorkingProcessComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="working-process" class="working-process">
        <div class="working-process-content">
        <section-header
          title="Working Process"
          sub-title="Collaborate, Design, Code, and Optimize for Fast, Responsive Web Experiences.">
        </section-header>
        </div>
      </section>
    `;
  }
}

customElements.define('working-process-component', WorkingProcessComponent);
