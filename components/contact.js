class ContactComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="contact" class="section contact">
                <h2>Stay In Touch</h2>
                <p class="large">Let's build something amazing together.</p>
                <div class="gra-separator"></div>
                <div id="contact-form" class="contact-form">
                    <h3>Contact Me</h3>
                    <form action="https://formspree.io/f/xqakdrpw" method="POST">
                    <label for="name">Name</label>
                    <input type="text" autocomplete="on" id="name" name="name" placeholder="Enter your name" required>

                    <label for="email">Email</label>
                    <input type="email" autocomplete="on" id="email" name="email" placeholder="Enter email address" required>

                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Enter your Message" required></textarea>
                    <button type="submit" class="button-link">Send Message</button>
                    </form>
                </div>
            </section>
        `;
  }
}
customElements.define("contact-component", ContactComponent);
