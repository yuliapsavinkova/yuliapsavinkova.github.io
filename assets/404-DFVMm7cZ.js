class e extends HTMLElement{connectedCallback(){this.innerHTML=this.getTemplate()}getTemplate(){return`
      <section id="error-page" class="error-page">
        <div>
          <h1>404 - Page Not Found</h1>
          <p class="large">The page you are looking for does not exist.</p>
          <p class="large">To return to home page, <a href="/#">click here</a>.</p>
        </div>
      </section>
    `}}customElements.define("error-component",e);
