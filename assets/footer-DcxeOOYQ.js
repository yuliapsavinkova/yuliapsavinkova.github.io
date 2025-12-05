import"./social-icons-D5rXZ1el.js";class t extends HTMLElement{connectedCallback(){const e=this.getAttribute("copyright-name")||"All rights reserved.",o=new Date().getFullYear();this.innerHTML=`
        <style>
          .footer {
            height: var(--footer-size);
            min-width: 16rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: var(--gap-small);
            background-color: var(--color-background);
            color: var(--color-primary);
          }

          .footer-copyright {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        </style>
        <footer id="footer" class="footer">
            <social-icons></social-icons>
            <div class="footer-copyright">
                <p class="large">&copy; ${o} ${e}</p>
            </div>
        </footer>
    `}}customElements.define("footer-component",t);
