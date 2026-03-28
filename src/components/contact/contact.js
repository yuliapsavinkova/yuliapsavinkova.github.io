import './contact.css';

class ContactComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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
    `;

    const form = this.querySelector('#contact-form-el');
    const success = this.querySelector('#contact-success');
    const btn = this.querySelector('button[type="submit"]');
    const reset = this.querySelector('#contact-reset');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      btn.classList.add('sending');
      btn.disabled = true;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          form.classList.add('form-hide');
          setTimeout(() => {
            form.style.display = 'none';
            success.classList.add('success-show');
          }, 400);
        } else {
          btn.classList.remove('sending');
          btn.disabled = false;
          btn.childNodes[0].textContent = 'Try Again';
        }
      } catch {
        btn.classList.remove('sending');
        btn.disabled = false;
        btn.childNodes[0].textContent = 'Try Again';
      }
    });

    reset.addEventListener('click', () => {
      success.classList.remove('success-show');
      form.style.display = '';
      form.reset();
      setTimeout(() => form.classList.remove('form-hide'), 50);
      btn.classList.remove('sending');
      btn.disabled = false;
      btn.childNodes[0].textContent = 'Send Message';
    });
  }
}

customElements.define('contact-component', ContactComponent);
