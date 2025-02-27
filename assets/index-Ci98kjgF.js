(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const r={throttle:function(e,t){let n=0;return function(...s){const o=Date.now();o-n>=t&&(n=o,e.apply(this,s))}},debounce:function(e,t){let n;return function(...s){clearTimeout(n),n=setTimeout(()=>{e.apply(this,s)},t)}}};class u extends HTMLElement{connectedCallback(){this.innerHTML=`
        <div class="error-page">
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        </div>
      `}}customElements.define("error-component",u);class m extends HTMLElement{constructor(){super();const t=this.getAttribute("logo-link")||"./",n=this.getAttribute("logo-src")||"../shared/components/header/defaultHeaderLogo.svg",s=this.getAttribute("logo-name")||"",o=JSON.parse(this.getAttribute("links")||"[]");console.log(o);const i=JSON.parse(this.getAttribute("button")||"{}");this.innerHTML=`
      <header class="header">
          <a href="${t}" class="logo">
              <img src="${n}" alt="Logo - personal portfolio."/>
              <span class="logo-name">${s}</span>
          </a>
          <nav class="gra-nav">
            <input type="checkbox" id="menu-toggle" class="menu-checkbox">
            <label for="menu-toggle">☰</label>
            <div class="nav-menu">
                <div class="nav-links">${o.map(a=>`<a href="${a.href}" target="${a.target||"_self"}">${a.image?`<img src="${a.image}" />`:""}${a.text}</a>`).join("")}
                </div>
                <div class="nav-action">
                  <a href="${i.href}" target="${i.target||"_self"}" class="button button-action">${i.text}</a>
                </div>
            </div>
          </nav>
      </header>
    `+this.innerHTML,this.checkbox=document.getElementById("menu-toggle"),this._handleResize=this._handleResize.bind(this),this._handleScroll=this._handleScroll.bind(this),document.addEventListener("click",a=>this._handleOutsideClick(a))}_handleOutsideClick(t){this.contains(t.target)||(this.checkbox.checked=!1)}_handleResize(){this.checkbox.checked=!1}_handleScroll(){this.checkbox.checked=!1}connectedCallback(){window.addEventListener("resize",r.throttle(this._handleResize,200)),window.addEventListener("scroll",r.throttle(this._handleScroll,300))}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),window.removeEventListener("scroll",this._handleScroll)}}customElements.define("header-component",m);class h extends HTMLElement{connectedCallback(){const t=this.getAttribute("copyright-name")||"All rights reserved.",n=new Date().getFullYear();this.innerHTML=`
        <footer id="footer" class="footer">
            <social-icons></social-icons>
            <div class="footer-copyright">
                <p>&copy; ${n} ${t}</p>
            </div>
        </footer>
    `}}customElements.define("footer-component",h);class g extends HTMLElement{connectedCallback(){let t=[];this.getAttribute("icons")?t=JSON.parse(this.getAttribute("icons")):t=[{href:"https://github.com/yuliapsavinkova",target:"_blank",display:"fab fa-github fa-xl"},{href:"https://www.linkedin.com/in/juliia",target:"_blank",display:"fab fa-linkedin fa-xl"},{href:"https://codepen.io/star5/pens/public",target:"_blank",display:"fab fa-codepen fa-xl"},{href:"https://codepen.io/star5/pens/public",target:"_blank",display:"fa-solid fa-blog fa-xl"}],this.innerHTML=`
            <style>
            .social-icons {
                display: flex;
                width: fit-content;
                gap: 2rem;
            }
            </style>
            <div class="social-icons"">${t.map(n=>`<a href="${n.href}" target="${n.target||"_self"}"><i class="${n.display} tilt-effect"></i></a>`).join("")}
            </div>
        `}}customElements.define("social-icons",g);class b extends HTMLElement{constructor(){super(),this.innerHTML=`
      <div class="progress-container" id="progress-container">
        <div class="progress-ring" id="progress-ring"></div>
        <div class="arrow"><i class="fa-duotone fa-solid fa-angle-up"></i></div>
      </div>
    `+this.innerHTML,this.progressContainer=document.querySelector("#progress-container"),this.progressRing=document.querySelector("#progress-ring"),this.updateProgress=this.updateProgress.bind(this),this.scrollToTop=this.scrollToTop.bind(this)}connectedCallback(){window.addEventListener("scroll",this.updateProgress),this.progressContainer.addEventListener("click",this.scrollToTop),this.updateProgress()}disconnectedCallback(){window.removeEventListener("scroll",this.updateProgress),this.progressContainer.removeEventListener("click",this.scrollToTop)}updateProgress(){const t=window.scrollY,n=document.documentElement.scrollHeight-window.innerHeight,s=Math.min(t/n*100,100);t>0?this.progressContainer.classList.add("visible"):this.progressContainer.classList.remove("visible"),this.progressRing.style.setProperty("--scroll-progress",`${s}%`)}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}customElements.define("scroll-progress-ring",b);class v extends HTMLElement{connectedCallback(){this.innerHTML=`
            <section id="hero" class="hero bg-laptop-with-texture">
                <div class="hero-portrait">
                    <img src="./images/hero-background.svg" alt="Portrait - photo of Yulia Savinkova."/>
                </div>
                <div class="hero-content">
                    <social-icons></social-icons>
                    <div class="hero-heading">
                        <h1>Yulia Savinkova</h1>
                        <h2>Software Engineer</h2>
                        <h3>10+ years of experience</h3>
                        <h4>MS in Computer Science</h4>
                    </div>
                    <div>
                        <a href="/about" class="button button-primary">Learn More</a>
                        <a href="/resume.pdf" target="_blank" class="button button-action">Resume</a>
                    </div>
                </div>
            </section>
        `}}customElements.define("hero-component",v);class f extends HTMLElement{connectedCallback(){this.innerHTML=`
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
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                    </a>
                </div>
                <div class="card bg-texture">
                    <img src="./images/app-dev.png" class="card-image" alt="web-development-image" />            
                    <h4>App Development</h4>
                    <p>Build web applications using modern frameworks such as React and Angular.</p>
                    <a href="/work#work-row-app">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>                    </a>
                </div>
                <div class="card bg-texture">
                    <img src="./images/three-d-dev.png" class="card-image" alt="design-image" />
                    <h4>3D Development</h4>
                    <p>Build 3D web experiences using modern web technologies and libraries.</p>
                    <a href="/work#work-row-3d">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                    </a>
                </div>
            </div>
            <a href="/work" class="button button-secondary">Learn More</a>
        </section>
    `}}customElements.define("expertise-component",f);class w extends HTMLElement{connectedCallback(){this.innerHTML=`
        <section id="work" class="section expertise-full bg-texture">
            <section-header 
                title="My Expertise"
                sub-title="Transforming Ideas into Code">
            </section-header>

            <div id="work-row-web" class="magic-row">
                <div class="magic-description">
                    <h4>Web Development</h4>  
                    <p>Need a sleek, high-performing website to showcase your brand? I specialize in building modern, responsive websites that look great on any device and deliver a seamless user experience. Whether you need a portfolio, business site, or landing page, I provide custom solutions tailored to your needs. With a focus on speed, SEO, and user-friendly design, I’ll help create a site that not only looks amazing but also drives results. Let's work together to make your online presence shine!</p>
                    <a href="/contact" class="button button-secondary">Get a Quote</a>
                </div>
                <img src="./images/web-dev.png" class="magic-image vertical" alt="maintenance-image" />
            </div>

            <div id="work-row-app" class="magic-row">
                <img src="./images/app-dev.png" class="magic-image" alt="web-development-image" />            
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
                <img src="./images/three-d-dev.png" class="magic-image" alt="design-image" />
            </div>
        </section>
    `}}customElements.define("expertise-full-component",w);class k extends HTMLElement{constructor(){super(),this.innerHTML=`
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
        `}}customElements.define("about-component",k);class y extends HTMLElement{connectedCallback(){this.innerHTML=`
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
                        <span>Webpack</span>
                        <span>SASS</span>
                        <span>HTML</span>
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
          `}}customElements.define("work-experience-component",y);class x extends HTMLElement{connectedCallback(){this.innerHTML=`
            <section id="working-process" class="section working-process bg-working-girl">
                <section-header 
                    title="Working Process"
                    sub-title="Collaborate, Design, Code, and Optimize for Responsive, High-Quality Web Experiences">
                </section-header>
            </section>
        `}}customElements.define("working-process-component",x);class L extends HTMLElement{connectedCallback(){this.innerHTML=`
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
        `}}customElements.define("contact-component",L);class E extends HTMLElement{connectedCallback(){const t=this.getAttribute("title")||"",n=this.getAttribute("sub-title")||"";this.innerHTML=`
      <div class="section-header">
        <h1>${t}</h1>
        <p class="large">${n}</p>
        <div class="gra-separator"></div>
      </div>
    `}}customElements.define("section-header",E);class S extends HTMLElement{_updateWidth(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;document.getElementById("debugPanel").innerHTML=t+" x "+n}connectedCallback(){this.innerHTML=`
            <style>
                .debug-panel {
                    z-index: 1000;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    margin: 0.7rem;
                    padding: 0.7rem;
                    border-radius: 1.4rem;

                    background: hsl(var(--accent-light-color) / 0.9);
                    backdrop-filter: blur(1rem);
                    box-shadow: var(--box-shadow);
                    border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
                }
            </style>
            <div id="debugPanel" class="debug-panel"></div>
        `,window.addEventListener("resize",r.throttle(this._updateWidth,200)),window.addEventListener("scroll",r.throttle(this._updateWidth,300)),this._updateWidth()}}customElements.define("debug-panel-component",S);function l(){const e={"/":`
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
    `,"/contact":"<contact-component></contact-component>","/profile/:id":s=>`<profile-component user-id="${s.id}"></profile-component>`},t=window.location.pathname,n=document.querySelector("main");for(const s in e){const o=new RegExp(`^${s.replace(/:\w+/g,"(\\w+)")}$`),i=t.match(o);if(i){const a=(s.match(/:(\w+)/g)||[]).map(c=>c.substring(1)),d=Object.fromEntries(a.map((c,p)=>[c,i[p+1]]));n.innerHTML=typeof e[s]=="function"?e[s](d):e[s],window.scrollTo({top:0,behavior:"smooth"});return}}n.innerHTML="<error-component></error-component>"}document.addEventListener("DOMContentLoaded",()=>{l(),window.addEventListener("popstate",l)});document.body.addEventListener("click",e=>{e.target.matches("a[href]:not([target])")&&(e.preventDefault(),history.pushState({},"",e.target.href),l())});
