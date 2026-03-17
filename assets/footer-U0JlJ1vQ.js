import"./social-icons-DY5ULfTC.js";class t extends HTMLElement{connectedCallback(){const e=this.getAttribute("copyright-name")||"All rights reserved.",o=new Date().getFullYear();this.innerHTML=`
      <footer id="footer" class="footer">
        <social-icons mode="default"></social-icons>
        <p class="footer-copyright">&copy; ${o} ${e}</p>
      </footer>
    `}}customElements.define("footer-component",t);
