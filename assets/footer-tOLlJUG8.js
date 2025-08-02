const n=[{href:"https://github.com/yuliapsavinkova",target:"_blank",title:"GitHub",svgId:"icon-fa-github"},{href:"https://www.linkedin.com/in/juliia",target:"_blank",title:"LinkedIn",svgId:"icon-fa-linkedin"},{href:"https://codepen.io/star5/pens/public",target:"_blank",title:"CodePen",svgId:"icon-fa-codepen"},{href:"https://codepen.io/star5/pens/public",target:"_blank",title:"Blog",svgId:"icon-fa-blog"}];class o extends HTMLElement{connectedCallback(){let t=[];this.getAttribute("icons")?t=JSON.parse(this.getAttribute("icons")):t=n,this.innerHTML=`
      <style>
        .social-icons {
          align-items: center;
          display: flex;
          width: fit-content;
          gap: 2rem;
          height: 2rem;
        }

        .social-icons a {
          display: inline-block;
          position: relative;
          width: 2rem;
          height: 2rem;
        }
      </style>
      <div class="social-icons">
        ${t.map(e=>{const s=e.title?` title="${e.title}"`:"";return e.svgId?`<a href="${e.href}" target="${e.target||"_self"}" aria-label="${e.title}"${s}><svg class="icon icon-fill enable-icon-scale" aria-hidden="true"><use href="#${e.svgId}"></use></svg></a>`:(console.warn("Icon configuration is missing:",e),"")}).join("")}
      </div>
    `}}customElements.define("social-icons",o);class l extends HTMLElement{connectedCallback(){const t=this.getAttribute("copyright-name")||"All rights reserved.",e=new Date().getFullYear();this.innerHTML=`
        <style>
          .footer {
            height: var(--footer-size);
            min-width: 16rem;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            .footer-copyright {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 1rem;
              height: var(--logo-size);
            }
          }
        </style>
        <footer id="footer" class="footer">
            <social-icons></social-icons>
            <div class="footer-copyright">
                <p class="large">&copy; ${e} ${t}</p>
            </div>
        </footer>
    `}}customElements.define("footer-component",l);
