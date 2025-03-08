class ErrorComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="error-page">
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <p>To return to home page, <a href="/#">click here</a>.</p>
        </div>
      `;
  }
}
customElements.define("error-component", ErrorComponent);
