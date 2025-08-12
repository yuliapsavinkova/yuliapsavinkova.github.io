class WorkingProcessComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .working-process {
          background: linear-gradient(var(--color-overlay), var(--color-overlay)),
            url('../../images/working-girl-1280.webp');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          background-attachment: fixed;
          height: 25rem;
          width: auto;

          * {
            color: var(--white);
          }
        }

        @media (max-width: 1400px) {
          .working-process {
            background-attachment: scroll;
            background-position: left center;
          }
        }
      </style>
      <section id="working-process" class="working-process">
        <section-header
          title="Working Process"
          sub-title="Collaborate, Design, Code, and Optimize for Fast, Responsive Web Experiences.">
        </section-header>
      </section>
    `;
  }
}
customElements.define('working-process-component', WorkingProcessComponent);
