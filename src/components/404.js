import './404.css';

class ErrorComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="error-page" class="error-page">
        <p class="error-code">404</p>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/#" class="button button-secondary">Back to Home</a>
      </section>
    `;
  }
}

customElements.define('error-component', ErrorComponent);
