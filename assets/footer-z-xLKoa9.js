class a extends HTMLElement{connectedCallback(){this.innerHTML=`
      <style>
        .social-icons {
          display: flex;
          align-items: center;
          width: fit-content;
          gap: var(--gap);
        }

        .social-icons a {
          width: 2rem;
          height: 2rem;
        }
      </style>
      <div class="social-icons">

        <a href="https://github.com/yuliapsavinkova" 
          target="_blank" 
          aria-label="Link to GitHub account" 
          title="GitHub">
          <svg viewBox="0 0 24 24"
              className="githubIcon"
              class="enable-icon-scale"
              fill="currentColor"
              aria-hidden="true">
              <path
                  d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207
                  11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
                  1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304
                  3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381
                  1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112
                  5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118
                  3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823
                  2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/juliia" 
          target="_blank" 
          aria-label="Link to Linkedin account" 
          title="LinkedIn">
          <svg viewBox="0 0 24 24"
              className="linkedinIcon"
              class="enable-icon-scale"
              fill="currentColor"
              aria-hidden="true">
              <path fill="currentColor"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <a href="https://codepen.io/star5/pens/public" 
          target="_blank" 
          aria-label="Link to CodePen account" 
          title="CodePen">

          <svg viewBox="0 0 24 24"
                fill="currentColor"
                class="enable-icon-scale"
                aria-hidden="true">
            <g transform="scale(0.046875)">
              <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
                fill="currentColor"/>
            </g>
          </svg>
        </a>

        <a href="https://codepen.io/star5/pens/public" 
          target="_blank" 
          aria-label="Link to Blog" 
          title="Blog">
          <svg viewBox="0 0 24 24"
                fill="currentColor"
                class="enable-icon-scale"
                aria-hidden="true">
            <g transform="scale(0.046875)">
              <path fill="currentColor"
                  d="M224 24c0-13.3 10.7-24 24-24 145.8 0 264 118.2 264 264 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-119.3-96.7-216-216-216-13.3 0-24-10.7-24-24zM80 96c26.5 0 48 21.5 48 48l0 224c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16 79.5 0 144 64.5 144 144S255.5 512 176 512 32 447.5 32 368l0-224c0-26.5 21.5-48 48-48zm168 0c92.8 0 168 75.2 168 168 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3-53.7-120-120-120-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
            </g>
          </svg>
        </a>
      </div>
    `}}customElements.define("social-icons",a);class i extends HTMLElement{connectedCallback(){const t=this.getAttribute("copyright-name")||"All rights reserved.",l=new Date().getFullYear();this.innerHTML=`
        <style>
          .footer {
            height: var(--footer-size);
            min-width: 16rem;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: var(--gap-small);

            .footer-copyright {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        </style>
        <footer id="footer" class="footer">
            <social-icons></social-icons>
            <div class="footer-copyright">
                <p class="large">&copy; ${l} ${t}</p>
            </div>
        </footer>
    `}}customElements.define("footer-component",i);
