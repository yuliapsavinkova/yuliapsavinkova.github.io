class o extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="contact" class="contact">
        <section-header
          title="Stay In Touch"
          sub-title="Available for On-Site Travel">
        </section-header>

        <div id="contact-form" class="contact-form">
          <h2>Contact Me</h2>

          <form id="contact-form-el" action="https://formspree.io/f/xqakdrpw" method="POST">
            <div class="field">
              <label for="name">Name</label>
              <input type="text" autocomplete="on" id="name" name="name" placeholder="Enter your name" required>
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input type="email" autocomplete="on" id="email" name="email" placeholder="Enter email address" required>
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="6" placeholder="Enter your Message" required></textarea>
            </div>
            <button type="submit" class="button button-primary contact-submit">Send Message
              <span class="btn-spinner" aria-hidden="true"></span>
            </button>
          </form>

          <div class="contact-success" id="contact-success" aria-live="polite">
            <div class="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="7,12 10.5,15.5 17,9"/>
              </svg>
            </div>
            <h2>Message Sent</h2>
            <p>Thank you — I'll be in touch soon.</p>
            <button class="button button-secondary" id="contact-reset">Send Another</button>
          </div>
        </div>
      </section>
    `;const t=this.querySelector("#contact-form-el"),s=this.querySelector("#contact-success"),e=this.querySelector('button[type="submit"]'),a=this.querySelector("#contact-reset");t.addEventListener("submit",async n=>{n.preventDefault(),e.classList.add("sending"),e.disabled=!0;try{(await fetch(t.action,{method:"POST",body:new FormData(t),headers:{Accept:"application/json"}})).ok?(t.classList.add("form-hide"),setTimeout(()=>{t.style.display="none",s.classList.add("success-show")},400)):(e.classList.remove("sending"),e.disabled=!1,e.childNodes[0].textContent="Try Again")}catch{e.classList.remove("sending"),e.disabled=!1,e.childNodes[0].textContent="Try Again"}}),a.addEventListener("click",()=>{s.classList.remove("success-show"),t.style.display="",t.reset(),setTimeout(()=>t.classList.remove("form-hide"),50),e.classList.remove("sending"),e.disabled=!1,e.childNodes[0].textContent="Send Message"})}}customElements.define("contact-component",o);
