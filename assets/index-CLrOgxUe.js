(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const v={throttle:function(s,e){let t=0;return function(...a){const n=Date.now();n-t>=e&&(t=n,s.apply(this,a))}},debounce:function(s,e){let t;return function(...a){clearTimeout(t),t=setTimeout(()=>{s.apply(this,a)},e)}}};class L extends HTMLElement{connectedCallback(){this.innerHTML=`
        <div class="error-page">
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <p>To return to home page, <a href="/#">click here</a>.</p>
        </div>
      `}}customElements.define("error-component",L);class E extends HTMLElement{constructor(){super();const e=this.getAttribute("logo-link")||"./",t=this.getAttribute("logo-src")||"../shared/components/header/defaultHeaderLogo.svg",a=this.getAttribute("logo-name")||"",n=JSON.parse(this.getAttribute("links")||"[]"),o=JSON.parse(this.getAttribute("button")||"{}");this.innerHTML=`
      <header class="header">
          <a href="${e}" class="logo">
              <img src="${t}" alt="Logo - personal portfolio."/>
              <span class="logo-name">${a}</span>
          </a>
          <nav class="gra-nav">
            <label for="menu-toggle">
              <i class="fa-solid fa-bars fa-2x"></i>
            </label>
            <input type="checkbox" id="menu-toggle" class="menu-checkbox">
            <div class="nav-menu glass-effect">
                <div class="nav-links">${n.map(i=>`<a class="nav-link large" href="${i.href}" target="${i.target||"_self"}">${i.image?`<img src="${i.image}" />`:""}${i.text}</a>`).join("")}
                </div>
                <div class="nav-action">
                  <a href="${o.href}" target="${o.target||"_self"}" class="button button-action">${o.text}</a>
                </div>
            </div>
          </nav>
      </header>
    `+this.innerHTML,this.checkbox=this.querySelector("#menu-toggle"),this.navLinks=this.querySelectorAll(".nav-link"),this._handleResize=this._handleResize.bind(this),this._handleScroll=this._handleScroll.bind(this),this._updateActiveLink=this._updateActiveLink.bind(this),this._closeMenu=this._closeMenu.bind(this),this._handleOutsideClick=this._handleOutsideClick.bind(this),document.addEventListener("click",this._handleOutsideClick)}_handleOutsideClick(e){this.contains(e.target)||this._closeMenu()}_handleResize(){this._closeMenu()}_handleScroll(){this._closeMenu()}_updateActiveLink(){const e=this.querySelectorAll(".nav-link"),t=window.location.hash||"#";e.forEach(a=>{a.getAttribute("href")===t?a.classList.add("active"):a.classList.remove("active")})}_closeMenu(){this.checkbox&&(this.checkbox.checked=!1)}connectedCallback(){window.addEventListener("resize",v.throttle(this._handleResize,200)),window.addEventListener("scroll",v.throttle(this._handleScroll,300)),window.addEventListener("hashchange",this._updateActiveLink),this.navLinks.forEach(e=>{e.addEventListener("click",this._closeMenu)}),this._updateActiveLink()}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),window.removeEventListener("scroll",this._handleScroll),window.removeEventListener("hashchange",this._updateActiveLink),document.removeEventListener("click",this._handleOutsideClick),this.navLinks.forEach(e=>{e.removeEventListener("click",this._closeMenu)})}}customElements.define("header-component",E);class S extends HTMLElement{connectedCallback(){const e=this.getAttribute("copyright-name")||"All rights reserved.",t=new Date().getFullYear();this.innerHTML=`
        <footer id="footer" class="footer">
            <social-icons></social-icons>
            <div class="footer-copyright">
                <p>&copy; ${t} ${e}</p>
            </div>
        </footer>
    `}}customElements.define("footer-component",S);class C extends HTMLElement{constructor(){super(),this.innerHTML=`
      <div class="progress-container" id="progress-container">
        <div class="progress-ring" id="progress-ring"></div>
        <div class="arrow"><i class="fa-duotone fa-solid fa-angle-up"></i></div>
      </div>
    `+this.innerHTML,this.progressContainer=document.querySelector("#progress-container"),this.progressRing=document.querySelector("#progress-ring"),this.updateProgress=this.updateProgress.bind(this),this.scrollToTop=this.scrollToTop.bind(this)}connectedCallback(){window.addEventListener("scroll",this.updateProgress),this.progressContainer.addEventListener("click",this.scrollToTop),this.updateProgress()}disconnectedCallback(){window.removeEventListener("scroll",this.updateProgress),this.progressContainer.removeEventListener("click",this.scrollToTop)}updateProgress(){const e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight,a=Math.min(e/t*100,100);e>0?this.progressContainer.classList.add("visible"):this.progressContainer.classList.remove("visible"),this.progressRing.style.setProperty("--scroll-progress",`${a}%`)}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}customElements.define("scroll-progress-ring",C);class T extends HTMLElement{connectedCallback(){let e=[];this.getAttribute("icons")?e=JSON.parse(this.getAttribute("icons")):e=[{href:"https://github.com/yuliapsavinkova",target:"_blank",display:"fab fa-github fa-xl"},{href:"https://www.linkedin.com/in/juliia",target:"_blank",display:"fab fa-linkedin fa-xl"},{href:"https://codepen.io/star5/pens/public",target:"_blank",display:"fab fa-codepen fa-xl"},{href:"https://codepen.io/star5/pens/public",target:"_blank",display:"fa-solid fa-blog fa-xl"}],this.innerHTML=`
            <style>
            .social-icons {
                display: flex;
                width: fit-content;
                gap: 2rem;
            }
            </style>
            <div class="social-icons"">${e.map(t=>`<a href="${t.href}" target="${t.target||"_self"}"><i class="${t.display} tilt-effect"></i></a>`).join("")}
            </div>
        `}}customElements.define("social-icons",T);class _ extends HTMLElement{constructor(){super(),this._toggleOutline=this._toggleOutline.bind(this),this._closePanel=this._closePanel.bind(this),this._updateWidth=this._updateWidth.bind(this),this._resizeHandler=v.throttle(this._updateWidth,200),this._scrollHandler=v.throttle(this._updateWidth,300)}_updateWidth(){const e=this.querySelector("#debugPanel");if(!e)return;const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;e.querySelector(".debug-size").textContent=`${t} x ${a}`,e.querySelector(".orientation").textContent=window.matchMedia("(orientation: portrait)").matches?"Portrait":"Landscape"}_toggleOutline(e){document.body.classList.toggle("debug-outline",e.target.checked)}_closePanel(){this.remove()}connectedCallback(){this.innerHTML=`
      <style>
        .debug-panel {
          z-index: 1000;
          position: fixed;
          bottom: 0;
          left: 0;
          margin: 1rem;
          padding: 1rem;
          border-radius: 1.4rem;
          color: hsl(217, 45%, 60%);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
          background: var(--primary-light-color-10);
          backdrop-filter: blur(4rem);
          box-shadow: var(--box-shadow);
          border: 1px solid hsl(217, 45%, 85%);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .debug-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid hsl(217, 45%, 60%);
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
        <div><a href="#/palette" target="_blank">Palette</a></div>
      </div>
    `,window.addEventListener("resize",this._resizeHandler),window.addEventListener("scroll",this._scrollHandler),this.querySelector("#toggle-outline").addEventListener("change",this._toggleOutline),this.querySelector(".close-btn").addEventListener("click",this._closePanel),this._updateWidth()}disconnectedCallback(){window.removeEventListener("resize",this._resizeHandler),window.removeEventListener("scroll",this._scrollHandler);const e=this.querySelector("#toggle-outline"),t=this.querySelector(".close-btn");e&&e.removeEventListener("change",this._toggleOutline),t&&t.removeEventListener("click",this._closePanel)}}customElements.define("debug-panel-component",_);class M extends HTMLElement{connectedCallback(){this.innerHTML=this.getTemplate()}getTemplate(){return`
        <section id="palette" class="palette">
            <div>
                <h1>Colors</h1>
                <div class="circle primary-dark-circle"></div>
                <div class="circle primary-light-circle"></div>
                <div class="circle neutral-dark-circle"></div>
                <div class="circle neutral-light-circle"></div>
                <div class="circle accent-dark-circle"></div>
                <div class="circle accent-light-circle"></div>
                <div class="circle text-circle"></div>
                <div class="circle white-circle"></div>
                <div class="circle grey-circle"></div>
                <div class="circle black-circle"></div>
            </div>
            <div>
                <h1>Buttons</h1>
                <button class="button button-primary">Primary</button>
                <button class="button button-secondary">Secondary</button>
                <button class="button button-action">Action</button>
                <button class="button button-tertiary">Tertiary</button>
                <a href="#" class="button button-link">Button Link</a>
            </div>
        </section>
        `}}customElements.define("palette-component",M);const H="modulepreload",P=function(s){return"/"+s},k={},f=function(e,t,a){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(t.map(d=>{if(d=P(d),d in k)return;k[d]=!0;const u=d.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":H,u||(l.as="script"),l.crossOrigin="",l.href=d,r&&l.setAttribute("nonce",r),document.head.appendChild(l),u)return new Promise((p,b)=>{l.addEventListener("load",p),l.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(i){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i}return n.then(i=>{for(const r of i||[])r.status==="rejected"&&o(r.reason);return e().catch(o)})};class A extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.drawChart()}render(){this.shadowRoot.innerHTML=`<style>
            :host { display: block; }
            svg { width: 100%; height: auto; }
        </style>
        <div id="chart"></div>`}drawChart(){f(()=>import("./index-Bato3lut.js"),[]).then(e=>{const n={top:20,right:20,bottom:40,left:50},o=this.shadowRoot.getElementById("chart"),i=e.select(o).append("svg").attr("width",600+n.left+n.right).attr("height",400+n.top+n.bottom).append("g").attr("transform",`translate(${n.left},${n.top})`),r=[{type:"buy",strike:100,premium:5},{type:"sell",strike:120,premium:2}],d=e.range(50,150,2),u=c=>r.reduce((m,g)=>{const w=Math.max(c-g.strike,0);return m+(g.type==="buy"?w-g.premium:g.premium-w)},0),h=d.map(c=>({price:c,pnl:u(c)})),l=e.scaleLinear().domain([50,150]).range([0,600]),p=e.scaleLinear().domain([e.min(h,c=>c.pnl),e.max(h,c=>c.pnl)]).range([400,0]);i.append("g").attr("transform","translate(0,400)").call(e.axisBottom(l)),i.append("g").call(e.axisLeft(p));const b=e.line().x(c=>l(c.price)).y(c=>p(c.pnl)).curve(e.curveMonotoneX);i.append("path").datum(h).attr("fill","none").attr("stroke","blue").attr("stroke-width",2).attr("d",b);const x=r.reduce((c,m)=>c+(m.type==="buy"?m.premium:-m.premium),0);r.map(c=>c.strike+x).forEach(c=>{i.append("line").attr("x1",l(c)).attr("x2",l(c)).attr("y1",0).attr("y2",400).attr("stroke","red").attr("stroke-dasharray","5,5")})})}}customElements.define("options-chart",A);class O extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.drawChart()}render(){this.shadowRoot.innerHTML=`<style>
          :host { display: block; }
          svg { width: 100%; height: auto; }
      </style>
      <div id="chart"></div>`}drawChart(){f(()=>import("./index-Bato3lut.js"),[]).then(e=>{const n=Math.min(400,400)/2,o=this.shadowRoot.getElementById("chart"),i=e.select(o).append("svg").attr("width",400).attr("height",400).append("g").attr("transform",`translate(${400/2},${400/2})`),r={stocks:15e3,options:5e3,bonds:1e4},d=e.scaleOrdinal().domain(Object.keys(r)).range(["#1f77b4","#ff7f0e","#2ca02c"]),h=e.pie().value(p=>p[1])(Object.entries(r)),l=e.arc().innerRadius(0).outerRadius(n);i.selectAll("pieces").data(h).enter().append("path").attr("d",l).attr("fill",p=>d(p.data[0])).style("stroke","#fff"),i.selectAll("labels").data(h).enter().append("text").text(p=>p.data[0]).attr("transform",p=>`translate(${l.centroid(p)})`).style("text-anchor","middle").style("font-size","14px")})}}customElements.define("portfolio-chart",O);class I extends HTMLElement{connectedCallback(){const e=this.getAttribute("title")||"",t=this.getAttribute("sub-title")||"";this.innerHTML=`
      <div class="section-header">
        <h1>${e}</h1>
        <p class="subtitle large">${t}</p>
        <div class="gra-separator"></div>
      </div>
    `}}customElements.define("section-header",I);class W extends HTMLElement{connectedCallback(){this.innerHTML=this.getTemplate(),this.loadParticles()}getTemplate(){return`
      <section id="hero" class="hero">
        <div id="particles-js"></div>
        <div class="hero-container">
          <!--<div class="hero-portrait">  
            <img src="./images/hero-background.svg" alt="Portrait - photo of Yulia Savinkova." />
          </div>-->
          <social-icons></social-icons>
          <div class="hero-heading">
            <h1>Yulia Savinkova</h1>
            <h2>Software Engineer</h2>
            <!--<h3>10+ years of experience</h3>
            <h4>MS in Computer Science</h4>-->
          </div>
          <div>
            <a href="#/about" class="button button-primary">Learn More</a>
            <a href="#/contact" class="button button-action">Contact</a>
          </div>          


        </div>

        <img class="hero-portrait-full" src="./images/web-dev-cropped.png" alt="Portrait - photo of Yulia Savinkova." />

      </section>
    `}loadParticles(){if(window.particlesJS)this.initParticles();else{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/particles.js",e.onload=()=>{this.initParticles()},document.body.appendChild(e)}}initParticles(){f(async()=>{const{particlesConfig:e}=await import("./particles-CJ3RF_y6.js");return{particlesConfig:e}},[]).then(({particlesConfig:e})=>{particlesJS("particles-js",e)}).catch(e=>console.error("Particles.js config loading failed",e))}}customElements.define("hero-component",W);class $ extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="working-process" class="section working-process bg-working-girl">
        <section-header
          title="Working Process"
          sub-title="Collaborate, Design, Code, and Optimize for Fast, Responsive Web Experiences.">
        </section-header>
      </section>
    `}}customElements.define("working-process-component",$);class D extends HTMLElement{connectedCallback(){this.innerHTML=`
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
                    <a href="#/work?section=work-row-web">
                      <svg class="icon">
                        <use href="/icons.svg#arrow-icon"></use>
                      </svg>
                    </a>
                </div>
                <div class="card bg-texture">
                    <img src="./images/app-dev.png" class="card-image" alt="web-development-image" />            
                    <h4>App Development</h4>
                    <p>Build web applications using modern frameworks such as React and Angular.</p>
                    <a href="#/work?section=work-row-app">
                      <svg class="icon">
                        <use href="/icons.svg#arrow-icon"></use>
                      </svg>
                    </a>
                </div>
                <div class="card bg-texture">
                    <img src="./images/three-d-dev.png" class="card-image" alt="design-image" />
                    <h4>3D Development</h4>
                    <p>Build 3D web experiences using modern web technologies and libraries.</p>
                    <a href="#/work?section=work-row-3d">
                      <svg class="icon">
                        <use href="/icons.svg#arrow-icon"></use>
                      </svg>
                    </a>
                </div>
            </div>
            <a href="#/work" class="button button-secondary">Learn More</a>
        </section>
    `}}customElements.define("expertise-component",D);class R extends HTMLElement{connectedCallback(){this.innerHTML=`
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
                        <a href="#/contact" class="button button-secondary">Get a Quote</a>
                    </div>
                    <img src="./images/web-dev.png" class="magic-image vertical bg-texture" alt="maintenance-image" />
                </div>

                <div id="work-row-app" class="magic-row">
                    <img src="./images/app-dev.png" class="magic-image bg-texture" alt="web-development-image" />            
                    <div class="magic-description">
                        <h4>App Development</h4>
                        <p>Need a powerful, high-performance web application? I build dynamic, user-friendly apps using cutting-edge frameworks like React and Angular. Whether it's a business tool, an e-commerce platform, or a custom solution, I create fast, scalable, and secure applications designed to elevate your brand and streamline your operations. Let’s bring your vision to life!</p>
                        <a href="#/contact" class="button button-secondary">Get a Quote</a>
                    </div>
                </div>

                <div id="work-row-3d" class="magic-row">
                    <div class="magic-description">
                        <h4>3D Development</h4>  
                        <p>Bring your website to life with stunning 3D experiences! I create interactive, immersive visuals that run smoothly in any modern browser—perfect for showcasing products, engaging users, or adding a unique touch to your site. Whether you need an interactive model, an animated scene, or a full 3D experience, I’ll build a solution that captivates your audience. Let’s make your vision a reality!</p>  
                        <a href="#/contact" class="button button-secondary">Get a Quote</a>
                    </div>
                    <img src="./images/three-d-dev.png" class="magic-image bg-texture" alt="design-image" />
                </div>
            </div>
        </section>
    `}}customElements.define("expertise-full-component",R);class q extends HTMLElement{constructor(){super(),this.innerHTML=`
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
                            <a href="#/work" class="button button-secondary">Learn More</a>
                        </div>
                    </div>
                </div>              
            </section>
        `}}customElements.define("about-component",q);class z extends HTMLElement{connectedCallback(){this.innerHTML=`
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
          `}}customElements.define("work-experience-component",z);class j extends HTMLElement{connectedCallback(){this.innerHTML=`
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
        `}}customElements.define("contact-component",j);function y(){const s={"":`
      <hero-component></hero-component>
      <expertise-component></expertise-component>
      <about-component></about-component>
      <working-process-component></working-process-component>
      <contact-component></contact-component>
    `,about:`
      <about-component></about-component>
      <work-experience-component></work-experience-component>
      <contact-component></contact-component>
    `,work:`
      <expertise-full-component></expertise-full-component>
      <contact-component></contact-component>
    `,palette:"<palette-component></palette-component>",d3:"<options-chart></options-chart>",portfolio:"<portfolio-chart></portfolio-chart>",contact:"<contact-component></contact-component>"},e=window.location.hash.slice(2),[t,a]=e.split("?"),o=new URLSearchParams(a).get("section"),i=document.querySelector("main");i.innerHTML=s[t]||"<error-component></error-component>",requestAnimationFrame(()=>{if(o){const r=document.getElementById(o);r&&r.scrollIntoView({behavior:"smooth"})}}),o||window.scrollTo({top:0,behavior:"smooth"})}document.addEventListener("DOMContentLoaded",()=>{y(),window.addEventListener("hashchange",y)});document.body.addEventListener("click",s=>{const e=s.target.closest("a[href]");e&&e.getAttribute("href").startsWith("#/")&&(s.preventDefault(),window.location.hash=e.getAttribute("href").slice(1))});
