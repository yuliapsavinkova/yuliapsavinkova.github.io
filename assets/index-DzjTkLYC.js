(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const p={throttle:function(t,e){let n=0;return function(...i){const o=Date.now();o-n>=e&&(n=o,t.apply(this,i))}},debounce:function(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{t.apply(this,i)},e)}}};class b extends HTMLElement{connectedCallback(){this.innerHTML=`
        <div class="error-page">
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        </div>
      `}}customElements.define("error-component",b);class f extends HTMLElement{constructor(){super();const e=this.getAttribute("logo-link")||"./",n=this.getAttribute("logo-src")||"../shared/components/header/defaultHeaderLogo.svg",i=this.getAttribute("logo-name")||"",o=JSON.parse(this.getAttribute("links")||"[]"),a=JSON.parse(this.getAttribute("button")||"{}");this.innerHTML=`
      <header class="header">
          <a href="${e}" class="logo">
              <img src="${n}" alt="Logo - personal portfolio."/>
              <span class="logo-name">${i}</span>
          </a>
          <nav class="gra-nav">
            <label for="menu-toggle">☰</label>
            <input type="checkbox" id="menu-toggle" class="menu-checkbox">
            <div class="nav-menu">
                <div class="nav-links">${o.map(s=>`<a class="nav-link large" href="${s.href}" target="${s.target||"_self"}">${s.image?`<img src="${s.image}" />`:""}${s.text}</a>`).join("")}
                </div>
                <div class="nav-action">
                  <a href="${a.href}" target="${a.target||"_self"}" class="button button-action">${a.text}</a>
                </div>
            </div>
          </nav>
      </header>
    `+this.innerHTML,this.checkbox=document.getElementById("menu-toggle"),this._handleResize=this._handleResize.bind(this),this._handleScroll=this._handleScroll.bind(this),document.addEventListener("click",s=>this._handleOutsideClick(s))}_handleOutsideClick(e){this.contains(e.target)||(this.checkbox.checked=!1)}_handleResize(){this.checkbox.checked=!1}_handleScroll(){this.checkbox.checked=!1}_updateActiveLink(){const e=this.querySelectorAll(".nav-link"),n=window.location.pathname;e.forEach(i=>{i.getAttribute("href")===n?i.classList.add("active"):i.classList.remove("active")})}connectedCallback(){window.addEventListener("resize",p.throttle(this._handleResize,200)),window.addEventListener("scroll",p.throttle(this._handleScroll,300)),this._updateActiveLink(),window.addEventListener("popstate",()=>this._updateActiveLink())}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),window.removeEventListener("scroll",this._handleScroll),window.removeEventListener("popstate",()=>this._updateActiveLink())}}customElements.define("header-component",f);class w extends HTMLElement{connectedCallback(){const e=this.getAttribute("copyright-name")||"All rights reserved.",n=new Date().getFullYear();this.innerHTML=`
        <footer id="footer" class="footer">
            <social-icons></social-icons>
            <div class="footer-copyright">
                <p>&copy; ${n} ${e}</p>
            </div>
        </footer>
    `}}customElements.define("footer-component",w);class y extends HTMLElement{constructor(){super(),this.innerHTML=`
      <div class="progress-container" id="progress-container">
        <div class="progress-ring" id="progress-ring"></div>
        <div class="arrow"><i class="fa-duotone fa-solid fa-angle-up"></i></div>
      </div>
    `+this.innerHTML,this.progressContainer=document.querySelector("#progress-container"),this.progressRing=document.querySelector("#progress-ring"),this.updateProgress=this.updateProgress.bind(this),this.scrollToTop=this.scrollToTop.bind(this)}connectedCallback(){window.addEventListener("scroll",this.updateProgress),this.progressContainer.addEventListener("click",this.scrollToTop),this.updateProgress()}disconnectedCallback(){window.removeEventListener("scroll",this.updateProgress),this.progressContainer.removeEventListener("click",this.scrollToTop)}updateProgress(){const e=window.scrollY,n=document.documentElement.scrollHeight-window.innerHeight,i=Math.min(e/n*100,100);e>0?this.progressContainer.classList.add("visible"):this.progressContainer.classList.remove("visible"),this.progressRing.style.setProperty("--scroll-progress",`${i}%`)}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}customElements.define("scroll-progress-ring",y);class k extends HTMLElement{connectedCallback(){let e=[];this.getAttribute("icons")?e=JSON.parse(this.getAttribute("icons")):e=[{href:"https://github.com/yuliapsavinkova",target:"_blank",display:"fab fa-github fa-xl"},{href:"https://www.linkedin.com/in/juliia",target:"_blank",display:"fab fa-linkedin fa-xl"},{href:"https://codepen.io/star5/pens/public",target:"_blank",display:"fab fa-codepen fa-xl"},{href:"https://codepen.io/star5/pens/public",target:"_blank",display:"fa-solid fa-blog fa-xl"}],this.innerHTML=`
            <style>
            .social-icons {
                display: flex;
                width: fit-content;
                gap: 2rem;
            }
            </style>
            <div class="social-icons"">${e.map(n=>`<a href="${n.href}" target="${n.target||"_self"}"><i class="${n.display} tilt-effect"></i></a>`).join("")}
            </div>
        `}}customElements.define("social-icons",k);class x extends HTMLElement{constructor(){super(),this._toggleOutline=this._toggleOutline.bind(this),this._closePanel=this._closePanel.bind(this)}_updateWidth(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;document.getElementById("debugPanel").querySelector(".debug-size").textContent=`${e} x ${n}`,document.getElementById("debugPanel").querySelector(".orientation").textContent=window.matchMedia("(orientation: portrait)").matches?"Portrait":"Landscape"}_toggleOutline(e){document.body.classList.toggle("debug-outline",e.target.checked)}_closePanel(){this.remove()}connectedCallback(){this.innerHTML=`
      <style>
        .debug-panel {
          z-index: 1000;
          position: fixed;
          bottom: 0;
          left: 0;
          margin: 1rem;
          padding: 1rem;
          border-radius: 1.4rem;
          backdrop-filter: blur(1rem);
          box-shadow: var(--box-shadow);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .debug-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(45, 74, 119, 0.1);
        }
        .close-btn {
          cursor: pointer;
          align-self: flex-start;
        }
        .debug-outline * {
          outline: 1px solid red;
        }
      </style>

      <div id="debugPanel" class="debug-panel">
        <div class="debug-header">
          <h6>Debug Panel</h6>
          <i class="close-btn fa-solid fa-xmark"></i>
        </div>
        <div>
          <span class="orientation">Loading...</span>:
          <span class="debug-size">Loading...</span>
        </div>
        <div><input type="checkbox" id="toggle-outline"> Show Outlines</div>
      </div>
    `,window.addEventListener("resize",p.throttle(this._updateWidth,200)),window.addEventListener("scroll",p.throttle(this._updateWidth,300)),document.getElementById("toggle-outline").addEventListener("change",this._toggleOutline),this.querySelector(".close-btn").addEventListener("click",this._closePanel),this._updateWidth()}disconnectedCallback(){window.removeEventListener("resize",p.throttle(this._updateWidth,200)),window.removeEventListener("scroll",p.throttle(this._updateWidth,300)),document.getElementById("toggle-outline").removeEventListener("change",this._toggleOutline),this.querySelector(".close-btn").removeEventListener("click",this._closePanel)}}customElements.define("debug-panel-component",x);class L extends HTMLElement{connectedCallback(){const e=this.getAttribute("title")||"",n=this.getAttribute("sub-title")||"";this.innerHTML=`
      <div class="section-header">
        <h1>${e}</h1>
        <p class="subtitle large">${n}</p>
        <div class="gra-separator"></div>
      </div>
    `}}customElements.define("section-header",L);const E="modulepreload",S=function(t){return"/"+t},h={},T=function(e,n,i){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(r=>{if(r=S(r),r in h)return;h[r]=!0;const d=r.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${m}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":E,d||(l.as="script"),l.crossOrigin="",l.href=r,c&&l.setAttribute("nonce",c),document.head.appendChild(l),d)return new Promise((g,v)=>{l.addEventListener("load",g),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${r}`)))})}))}function a(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return o.then(s=>{for(const c of s||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};class C extends HTMLElement{connectedCallback(){this.innerHTML=this.getTemplate(),this.loadParticles()}getTemplate(){return`
      <section id="hero" class="hero bg-texture">
        <div id="particles-js"></div>
        <div class="hero-container">
          <div class="hero-portrait">  
            <img src="./images/hero-background.svg" alt="Portrait - photo of Yulia Savinkova." />
          </div>
          <social-icons></social-icons>
          <div class="hero-heading">
            <h1>Yulia Savinkova</h1>
            <h2>Software Engineer</h2>
            <h3>10+ years of experience</h3>
            <h4>MS in Computer Science</h4>
          </div>
          <div>
            <a href="/about" class="button button-primary">Learn More</a>
            <a href="/contact" class="button button-action">Contact</a>
          </div>
        </div>
      </section>
    `}loadParticles(){if(window.particlesJS)this.initParticles();else{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/particles.js",e.onload=()=>{this.initParticles()},document.body.appendChild(e)}}initParticles(){T(async()=>{const{particlesConfig:e}=await import("./particles-D53slVvN.js");return{particlesConfig:e}},[]).then(({particlesConfig:e})=>{particlesJS("particles-js",e)}).catch(e=>console.error("Particles.js config loading failed",e))}}customElements.define("hero-component",C);class M extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="working-process" class="section working-process bg-working-girl">
        <section-header
          title="Working Process"
          sub-title="Collaborate, Design, Code, and Optimize for Fast, Responsive Web Experiences.">
        </section-header>
      </section>
    `}}customElements.define("working-process-component",M);class H extends HTMLElement{connectedCallback(){this.innerHTML=`
        <section id="expertise" class="section expertise">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>
            <div class="cards-container">
                <div class="card bg-texture">
                    <img src="./images/web-dev.png" class="card-image" alt="maintenance-image" />
                    <h4>Web Development</h4>
                    <p>Build websites from scratch using HTML, CSS, JavaScript, and Web Components.</p>
                    <a href="/work#work-row-web">
                      <svg class="icon">
                        <use href="/icons.svg#arrow-icon"></use>
                      </svg>
                    </a>
                </div>
                <div class="card bg-texture">
                    <img src="./images/app-dev.png" class="card-image" alt="web-development-image" />            
                    <h4>App Development</h4>
                    <p>Build web applications using modern frameworks such as React and Angular.</p>
                    <a href="/work#work-row-app">
                      <svg class="icon">
                        <use href="/icons.svg#arrow-icon"></use>
                      </svg>
                    </a>
                </div>
                <div class="card bg-texture">
                    <img src="./images/three-d-dev.png" class="card-image" alt="design-image" />
                    <h4>3D Development</h4>
                    <p>Build 3D web experiences using modern web technologies and libraries.</p>
                    <a href="/work#work-row-3d">
                      <svg class="icon">
                        <use href="/icons.svg#arrow-icon"></use>
                      </svg>
                    </a>
                </div>
            </div>
            <a href="/work" class="button button-secondary">Learn More</a>
        </section>
    `}}customElements.define("expertise-component",H);class P extends HTMLElement{connectedCallback(){this.innerHTML=`
        <section id="work" class="section expertise-full">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>

            <div class="magic-row-container">
                <div id="work-row-web" class="magic-row">
                    <div class="magic-description">
                        <h4>Web Development</h4>  
                        <p>Need a sleek, high-performing website to showcase your brand? I specialize in building modern, responsive websites that look great on any device and deliver a seamless user experience. Whether you need a portfolio, business site, or landing page, I provide custom solutions tailored to your needs. With a focus on speed, SEO, and user-friendly design, I’ll help create a site that not only looks amazing but also drives results. Let's work together to make your online presence shine!</p>
                        <a href="/contact" class="button button-secondary">Get a Quote</a>
                    </div>
                    <img src="./images/web-dev.png" class="magic-image vertical bg-texture" alt="maintenance-image" />
                </div>

                <div id="work-row-app" class="magic-row">
                    <img src="./images/app-dev.png" class="magic-image bg-texture" alt="web-development-image" />            
                    <div class="magic-description">
                        <h4>App Development</h4>
                        <p>Need a powerful, high-performance web application? I build dynamic, user-friendly apps using cutting-edge frameworks like React and Angular. Whether it's a business tool, an e-commerce platform, or a custom solution, I create fast, scalable, and secure applications designed to elevate your brand and streamline your operations. Let’s bring your vision to life!</p>
                        <a href="/contact" class="button button-secondary">Get a Quote</a>
                    </div>
                </div>

                <div id="work-row-3d" class="magic-row">
                    <div class="magic-description">
                        <h4>3D Development</h4>  
                        <p>Bring your website to life with stunning 3D experiences! I create interactive, immersive visuals that run smoothly in any modern browser—perfect for showcasing products, engaging users, or adding a unique touch to your site. Whether you need an interactive model, an animated scene, or a full 3D experience, I’ll build a solution that captivates your audience. Let’s make your vision a reality!</p>  
                        <a href="/contact" class="button button-secondary">Get a Quote</a>
                    </div>
                    <img src="./images/three-d-dev.png" class="magic-image bg-texture" alt="design-image" />
                </div>
            </div>
        </section>
    `}}customElements.define("expertise-full-component",P);class _ extends HTMLElement{constructor(){super(),this.innerHTML=`
            <section id="about" class="section about">
                <section-header 
                    title="About Me"
                    sub-title="Bringing Web Ideas to Life">
                </section-header>

                <div class="magic-row">
                    <img src="./images/portrait.png" class="magic-image about-portrait" alt="Portrait - photo of Yulia Savinkova."/>
                    <div class="magic-description">
                        <h4>My Journey</h4>
                        <p>
                            I am a Software Engineer with a Master's degree in Computer Science and 10 years of experience working in a corporate environment, building full-stack applications using frameworks like React and Angular with a Node.js backend.
                        </p>
                        <p>
                            For the past five years, I have been running my own company, helping businesses build and optimize their online presence. I specialize in developing websites and front-end web applications using HTML, CSS, JavaScript, native Web Components, and modern frameworks.
                        </p>
                        <p>
                            I am passionate about web technologies and focused on delivering efficient, high-quality digital solutions. In my free time, I enjoy reading, traveling, and snowboarding.
                        </p>
                        <div>
                            <a href="./resume.pdf" target="_blank" class="button button-primary">Resume</a>
                            <a href="/work" class="button button-secondary">Learn More</a>
                        </div>
                    </div>
                </div>              
            </section>
        `}}customElements.define("about-component",_);class A extends HTMLElement{connectedCallback(){this.innerHTML=`
              <section id="work-experience" class="section work-experience">
                <section-header 
                    title="Work Experience"
                    sub-title="A Journey of Growth">
                </section-header>

                <div class="work-experience-container">
                  <div class="work-experience-content">
                      <h5>Founder & Freelance Web Developer, Gravity Workflow, 2019 - Present</h5>
                      <ul>
                        <li>Founded and independently manage a freelance web development business with a focus on building long-term client relationships and business growth.</li>
                        <li>Specialize in developing custom websites and front-end web applications using HTML, CSS, JavaScript, React, Angular, and Node.js.</li>
                        <li>Provide end-to-end solutions, from project scoping and design to development and deployment.</li>
                        <li>Handle all aspects of business operations, including client acquisition, project management, and marketing.</li>
                        <li>Aim to expand and scale the business by building a strong brand and long-term partnerships with clients.</li>
                        <!--<li>Create custom HTML web components and reusable shared libraries.</li>
                        <li>Build responsive layouts that work across all screen sizes.</li>
                        <li>Modernize existing applications by rebuilding them with modern technologies.</li>-->
                      </ul>
                      <div class="work-experience-technologies">
                        <span>JavaScript</span>
                        <span>Web Components</span>
                        <span>React</span>
                        <span>Three.js</span>
                        <span>Node.js</span>
                        <span>CSS</span>
                        <span>HTML</span>
                        <span>Vite</span>
                      </div>
                  </div>

                  <div class="work-experience-content">
                      <h5>Sr. Software Engineer, Bloomberg, New York, NY 2016 - 2019</h5>
                      <ul>
                        <li>Worked on developing bloomberg add-ins for Excel, Word and Outlook.</li>
                        <li>Designed and developed a research management tool.</li>
                        <li>Conducted technical interviews to evaluate candidates expertise in JavaScript.</li>
                      </ul>
                      <div class="work-experience-technologies">
                        <span>TypeScript</span>
                        <span>React</span>
                        <span>Angular</span>
                        <span>Redux</span>
                        <span>SASS</span>
                        <span>HTML</span>
                        <span>Webpack</span>
                      </div>
                  </div>

                  <div class="work-experience-content">
                      <h5>Sr. UI Developer, Yahoo, San Francisco, CA 2015 - 2016</h5>
                      <ul>
                        <li>Rebuilt analytics platform UI for new design.</li>
                        <li>Developed new features for the analytics platform.</li>
                      </ul>
                      <div class="work-experience-technologies">
                        <span>JavaScript</span>
                        <span>Angular</span>
                        <span>D3.js</span>
                        <span>Node.js</span>
                        <span>Gulp</span>
                        <span>Git</span>
                        <span>SASS</span>
                        <span>HTML</span>
                      </div>
                  </div>

                  <div class="work-experience-content">
                      <h5>Sr. JavaScript UI Engineer, MuleSoft, San Francisco, CA 2012 - 2015</h5>
                      <ul>
                        <li>Developed UI's for CloudHub and Anypoint Platform.</li>
                        <li>Unified and developed common UI components for all MuleSoft products.</li>
                      </ul>
                      <div class="work-experience-technologies">
                        <span>JavaScript</span>
                        <span>Angular</span>
                        <span>Backbone</span>
                        <span>Node.js</span>
                        <span>Grunt</span>
                        <span>Git</span>
                        <span>LESS</span>
                        <span>HTML</span>
                      </div>
                  </div>
                </div>

                <!--<h2>Education</h2>
                <div class="work-experience-content">
                    <div class="work-experience-header">
                      Master of Science in Computer Science, Suffolk University, Boston, MA May, 2011
                    </div>
                </div>-->

                <!--<h2>Other</h2>
                <div class="work-experience-content">
                    <h5>Instructor, Suffolk University; Boston, MA 2010 - 2011</h5>
                    <ul>
                      <li>Teach Pre Calculus course.</li>
                      <li>Teach Web Development course.</li>
                    </ul>
                </div>
                <div class="work-experience-content">
                    <h5>Passed CFA Level 1, CFA Institute; December, 2017</h5>
                </div>-->
              </section>
          `}}customElements.define("work-experience-component",A);class I extends HTMLElement{connectedCallback(){this.innerHTML=`
            <section id="contact" class="section contact">
                <section-header 
                    title="Stay In Touch"
                    sub-title="Available for On-Site Travel">
                </section-header>
                <div id="contact-form" class="contact-form">
                    <h3>Contact Me</h3>
                    <form action="https://formspree.io/f/xqakdrpw" method="POST">
                        <label for="name">Name</label>
                        <input type="text" autocomplete="on" id="name" name="name" placeholder="Enter your name" required>

                        <label for="email">Email</label>
                        <input type="email" autocomplete="on" id="email" name="email" placeholder="Enter email address" required>

                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="4" placeholder="Enter your Message" required></textarea>
                        <button type="submit" class="button button-secondary">Send Message</button>
                    </form>
                </div>
            </section>
        `}}customElements.define("contact-component",I);function u(){const t={"/":`
      <hero-component></hero-component>
      <expertise-component></expertise-component>
      <about-component></about-component>
      <working-process-component></working-process-component>
      <contact-component></contact-component>
    `,"/about":`
      <about-component></about-component>
      <work-experience-component></work-experience-component>
      <contact-component></contact-component>
    `,"/work":`
      <expertise-full-component></expertise-full-component>
      <contact-component></contact-component>
    `,"/contact":"<contact-component></contact-component>","/profile/:id":i=>`<profile-component user-id="${i.id}"></profile-component>`},e=window.location.pathname,n=document.querySelector("main");for(const i in t){const o=new RegExp(`^${i.replace(/:\w+/g,"(\\w+)")}$`),a=e.match(o);if(a){const s=(i.match(/:(\w+)/g)||[]).map(r=>r.substring(1)),c=Object.fromEntries(s.map((r,d)=>[r,a[d+1]]));n.innerHTML=typeof t[i]=="function"?t[i](c):t[i],window.scrollTo({top:0,behavior:"smooth"});return}}n.innerHTML="<error-component></error-component>"}document.addEventListener("DOMContentLoaded",()=>{u(),window.addEventListener("popstate",u)});document.body.addEventListener("click",t=>{t.target.matches("a[href]:not([target])")&&(t.preventDefault(),history.pushState({},"",t.target.href),u())});
