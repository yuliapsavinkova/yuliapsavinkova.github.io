(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();const m={throttle:function(n,e){let i=0;return function(...o){const t=Date.now();t-i>=e&&(i=t,n.apply(this,o))}},debounce:function(n,e){let i;return function(...o){clearTimeout(i),i=setTimeout(()=>{n.apply(this,o)},e)}}};class L extends HTMLElement{connectedCallback(){this.innerHTML=`
        <div class="error-page">
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        </div>
      `}}customElements.define("error-component",L);class E extends HTMLElement{constructor(){super();const e=this.getAttribute("logo-link")||"./",i=this.getAttribute("logo-src")||"../shared/components/header/defaultHeaderLogo.svg",o=this.getAttribute("logo-name")||"",t=JSON.parse(this.getAttribute("links")||"[]"),a=JSON.parse(this.getAttribute("button")||"{}");this.innerHTML=`
      <header class="header">
          <a href="${e}" class="logo">
              <img src="${i}" alt="Logo - personal portfolio."/>
              <span class="logo-name">${o}</span>
          </a>
          <nav class="gra-nav">
            <label for="menu-toggle">
              <i class="fa-solid fa-bars fa-2x"></i>
            </label>
            <input type="checkbox" id="menu-toggle" class="menu-checkbox">
            <div class="nav-menu glass-effect">
                <div class="nav-links">${t.map(s=>`<a class="nav-link large" href="${s.href}" target="${s.target||"_self"}">${s.image?`<img src="${s.image}" />`:""}${s.text}</a>`).join("")}
                </div>
                <div class="nav-action">
                  <a href="${a.href}" target="${a.target||"_self"}" class="button button-action">${a.text}</a>
                </div>
            </div>
          </nav>
      </header>
    `+this.innerHTML,this.checkbox=document.getElementById("menu-toggle"),this._handleResize=this._handleResize.bind(this),this._handleScroll=this._handleScroll.bind(this),document.addEventListener("click",s=>this._handleOutsideClick(s))}_handleOutsideClick(e){this.contains(e.target)||(this.checkbox.checked=!1)}_handleResize(){this.checkbox.checked=!1}_handleScroll(){this.checkbox.checked=!1}_updateActiveLink(){const e=this.querySelectorAll(".nav-link"),i=window.location.pathname;e.forEach(o=>{o.getAttribute("href")===i?o.classList.add("active"):o.classList.remove("active")})}connectedCallback(){window.addEventListener("resize",m.throttle(this._handleResize,200)),window.addEventListener("scroll",m.throttle(this._handleScroll,300)),this._updateActiveLink(),window.addEventListener("popstate",()=>this._updateActiveLink())}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),window.removeEventListener("scroll",this._handleScroll),window.removeEventListener("popstate",()=>this._updateActiveLink())}}customElements.define("header-component",E);class S extends HTMLElement{connectedCallback(){const e=this.getAttribute("copyright-name")||"All rights reserved.",i=new Date().getFullYear();this.innerHTML=`
        <footer id="footer" class="footer">
            <social-icons></social-icons>
            <div class="footer-copyright">
                <p>&copy; ${i} ${e}</p>
            </div>
        </footer>
    `}}customElements.define("footer-component",S);class T extends HTMLElement{constructor(){super(),this.innerHTML=`
      <div class="progress-container" id="progress-container">
        <div class="progress-ring" id="progress-ring"></div>
        <div class="arrow"><i class="fa-duotone fa-solid fa-angle-up"></i></div>
      </div>
    `+this.innerHTML,this.progressContainer=document.querySelector("#progress-container"),this.progressRing=document.querySelector("#progress-ring"),this.updateProgress=this.updateProgress.bind(this),this.scrollToTop=this.scrollToTop.bind(this)}connectedCallback(){window.addEventListener("scroll",this.updateProgress),this.progressContainer.addEventListener("click",this.scrollToTop),this.updateProgress()}disconnectedCallback(){window.removeEventListener("scroll",this.updateProgress),this.progressContainer.removeEventListener("click",this.scrollToTop)}updateProgress(){const e=window.scrollY,i=document.documentElement.scrollHeight-window.innerHeight,o=Math.min(e/i*100,100);e>0?this.progressContainer.classList.add("visible"):this.progressContainer.classList.remove("visible"),this.progressRing.style.setProperty("--scroll-progress",`${o}%`)}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}customElements.define("scroll-progress-ring",T);class C extends HTMLElement{connectedCallback(){let e=[];this.getAttribute("icons")?e=JSON.parse(this.getAttribute("icons")):e=[{href:"https://github.com/yuliapsavinkova",target:"_blank",display:"fab fa-github fa-xl"},{href:"https://www.linkedin.com/in/juliia",target:"_blank",display:"fab fa-linkedin fa-xl"},{href:"https://codepen.io/star5/pens/public",target:"_blank",display:"fab fa-codepen fa-xl"},{href:"https://codepen.io/star5/pens/public",target:"_blank",display:"fa-solid fa-blog fa-xl"}],this.innerHTML=`
            <style>
            .social-icons {
                display: flex;
                width: fit-content;
                gap: 2rem;
            }
            </style>
            <div class="social-icons"">${e.map(i=>`<a href="${i.href}" target="${i.target||"_self"}"><i class="${i.display} tilt-effect"></i></a>`).join("")}
            </div>
        `}}customElements.define("social-icons",C);class M extends HTMLElement{constructor(){super(),this._toggleOutline=this._toggleOutline.bind(this),this._closePanel=this._closePanel.bind(this)}_updateWidth(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;document.getElementById("debugPanel").querySelector(".debug-size").textContent=`${e} x ${i}`,document.getElementById("debugPanel").querySelector(".orientation").textContent=window.matchMedia("(orientation: portrait)").matches?"Portrait":"Landscape"}_toggleOutline(e){document.body.classList.toggle("debug-outline",e.target.checked)}_closePanel(){this.remove()}connectedCallback(){this.innerHTML=`
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
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Subtle depth */
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
        <div><a href="/palette" target="_blank">Palette</a></div>
      </div>
    `,window.addEventListener("resize",m.throttle(this._updateWidth,200)),window.addEventListener("scroll",m.throttle(this._updateWidth,300)),document.getElementById("toggle-outline").addEventListener("change",this._toggleOutline),this.querySelector(".close-btn").addEventListener("click",this._closePanel),this._updateWidth()}disconnectedCallback(){window.removeEventListener("resize",m.throttle(this._updateWidth,200)),window.removeEventListener("scroll",m.throttle(this._updateWidth,300)),document.getElementById("toggle-outline").removeEventListener("change",this._toggleOutline),this.querySelector(".close-btn").removeEventListener("click",this._closePanel)}}customElements.define("debug-panel-component",M);class P extends HTMLElement{connectedCallback(){this.innerHTML=this.getTemplate()}getTemplate(){return`
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
        `}}customElements.define("palette-component",P);const _="modulepreload",H=function(n){return"/"+n},k={},w=function(e,i,o){let t=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));t=Promise.allSettled(i.map(l=>{if(l=H(l),l in k)return;k[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":_,h||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((p,b)=>{d.addEventListener("load",p),d.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return t.then(s=>{for(const c of s||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};class A extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.drawChart()}render(){this.shadowRoot.innerHTML=`<style>
            :host { display: block; }
            svg { width: 100%; height: auto; }
        </style>
        <div id="chart"></div>`}drawChart(){w(()=>import("./index-Bato3lut.js"),[]).then(e=>{const t={top:20,right:20,bottom:40,left:50},a=this.shadowRoot.getElementById("chart"),s=e.select(a).append("svg").attr("width",600+t.left+t.right).attr("height",400+t.top+t.bottom).append("g").attr("transform",`translate(${t.left},${t.top})`),c=[{type:"buy",strike:100,premium:5},{type:"sell",strike:120,premium:2}],l=e.range(50,150,2),h=r=>c.reduce((g,v)=>{const y=Math.max(r-v.strike,0);return g+(v.type==="buy"?y-v.premium:v.premium-y)},0),u=l.map(r=>({price:r,pnl:h(r)})),d=e.scaleLinear().domain([50,150]).range([0,600]),p=e.scaleLinear().domain([e.min(u,r=>r.pnl),e.max(u,r=>r.pnl)]).range([400,0]);s.append("g").attr("transform","translate(0,400)").call(e.axisBottom(d)),s.append("g").call(e.axisLeft(p));const b=e.line().x(r=>d(r.price)).y(r=>p(r.pnl)).curve(e.curveMonotoneX);s.append("path").datum(u).attr("fill","none").attr("stroke","blue").attr("stroke-width",2).attr("d",b);const x=c.reduce((r,g)=>r+(g.type==="buy"?g.premium:-g.premium),0);c.map(r=>r.strike+x).forEach(r=>{s.append("line").attr("x1",d(r)).attr("x2",d(r)).attr("y1",0).attr("y2",400).attr("stroke","red").attr("stroke-dasharray","5,5")})})}}customElements.define("options-chart",A);class I extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.drawChart()}render(){this.shadowRoot.innerHTML=`<style>
          :host { display: block; }
          svg { width: 100%; height: auto; }
      </style>
      <div id="chart"></div>`}drawChart(){w(()=>import("./index-Bato3lut.js"),[]).then(e=>{const t=Math.min(400,400)/2,a=this.shadowRoot.getElementById("chart"),s=e.select(a).append("svg").attr("width",400).attr("height",400).append("g").attr("transform",`translate(${400/2},${400/2})`),c={stocks:15e3,options:5e3,bonds:1e4},l=e.scaleOrdinal().domain(Object.keys(c)).range(["#1f77b4","#ff7f0e","#2ca02c"]),u=e.pie().value(p=>p[1])(Object.entries(c)),d=e.arc().innerRadius(0).outerRadius(t);s.selectAll("pieces").data(u).enter().append("path").attr("d",d).attr("fill",p=>l(p.data[0])).style("stroke","#fff"),s.selectAll("labels").data(u).enter().append("text").text(p=>p.data[0]).attr("transform",p=>`translate(${d.centroid(p)})`).style("text-anchor","middle").style("font-size","14px")})}}customElements.define("portfolio-chart",I);class $ extends HTMLElement{connectedCallback(){const e=this.getAttribute("title")||"",i=this.getAttribute("sub-title")||"";this.innerHTML=`
      <div class="section-header">
        <h1>${e}</h1>
        <p class="subtitle large">${i}</p>
        <div class="gra-separator"></div>
      </div>
    `}}customElements.define("section-header",$);class O extends HTMLElement{connectedCallback(){this.innerHTML=this.getTemplate(),this.loadParticles()}getTemplate(){return`
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
    `}loadParticles(){if(window.particlesJS)this.initParticles();else{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/particles.js",e.onload=()=>{this.initParticles()},document.body.appendChild(e)}}initParticles(){w(async()=>{const{particlesConfig:e}=await import("./particles-D53slVvN.js");return{particlesConfig:e}},[]).then(({particlesConfig:e})=>{particlesJS("particles-js",e)}).catch(e=>console.error("Particles.js config loading failed",e))}}customElements.define("hero-component",O);class W extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="working-process" class="section working-process bg-working-girl">
        <section-header
          title="Working Process"
          sub-title="Collaborate, Design, Code, and Optimize for Fast, Responsive Web Experiences.">
        </section-header>
      </section>
    `}}customElements.define("working-process-component",W);class D extends HTMLElement{connectedCallback(){this.innerHTML=`
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
    `}}customElements.define("expertise-full-component",R);class j extends HTMLElement{constructor(){super(),this.innerHTML=`
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
        `}}customElements.define("about-component",j);class z extends HTMLElement{connectedCallback(){this.innerHTML=`
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
          `}}customElements.define("work-experience-component",z);class B extends HTMLElement{connectedCallback(){this.innerHTML=`
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
        `}}customElements.define("contact-component",B);function f(){const n={"/":`
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
    `,"/palette":"<palette-component></palette-component>","/d3":"<options-chart></options-chart>","/portfolio":"<portfolio-chart></portfolio-chart>","/contact":"<contact-component></contact-component>","/profile/:id":o=>`<profile-component user-id="${o.id}"></profile-component>`},e=window.location.pathname,i=document.querySelector("main");for(const o in n){const t=new RegExp(`^${o.replace(/:\w+/g,"(\\w+)")}$`),a=e.match(t);if(a){const s=(o.match(/:(\w+)/g)||[]).map(l=>l.substring(1)),c=Object.fromEntries(s.map((l,h)=>[l,a[h+1]]));i.innerHTML=typeof n[o]=="function"?n[o](c):n[o],window.scrollTo({top:0,behavior:"smooth"});return}}i.innerHTML="<error-component></error-component>"}document.addEventListener("DOMContentLoaded",()=>{f(),window.addEventListener("popstate",f)});document.body.addEventListener("click",n=>{n.target.matches("a[href]:not([target])")&&(n.preventDefault(),history.pushState({},"",n.target.href),f())});
