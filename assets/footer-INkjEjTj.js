import"./social-icons-CDUBf___.js";class t extends HTMLElement{connectedCallback(){const o=this.getAttribute("copyright-name")||"Yulia Savinkova",e=new Date().getFullYear();this.innerHTML=`
      <footer id="footer" class="footer">
        <social-icons mode="default"></social-icons>
        <p class="footer-copyright">&copy; ${e} ${o}</p>
      </footer>
    `}}customElements.define("footer-component",t);
