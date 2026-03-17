class i extends HTMLElement{connectedCallback(){if(this.innerHTML=`
      <section id="work-experience" class="work-experience">
        <section-header
          title="Work Experience"
          sub-title="A Journey of Growth">
        </section-header>

        <div class="work-experience-container">

          <div class="work-experience-content">
            <div class="work-header">
              <h2>Gravity — Founder & Senior Engineer</h2>
              <p class="work-meta">San Francisco, CA · 2021 – Present</p>
            </div>
            <ul class="work-bullets">
              <li>Built trading tools and dashboards for real-time market analysis and portfolio management.</li>
              <li>Developed and launched custom web applications using React, TypeScript, and Next.js.</li>
              <li>Created rapid prototypes and MVPs using AI to explore new product ideas and workflows.</li>
              <li>Designed and prototyped user interfaces for custom machine control systems.</li>
            </ul>
            <div class="work-experience-technologies">
              <span>React</span><span>Next.js</span><span>TypeScript</span><span>Node</span><span>PostgreSQL</span><span>Vite</span>
            </div>
          </div>

          <div class="work-experience-content">
            <div class="work-header">
              <h2>Bloomberg — Senior Software Engineer</h2>
              <p class="work-meta">New York, NY · 2016 – 2020</p>
            </div>
            <ul class="work-bullets">
              <li>Built the financial tools used by research analysts to stream and manage live Bloomberg financial data within Excel and Word.</li>
              <li>Designed user interfaces for internal research platforms, turning complex backend APIs into clear, task-oriented dashboards.</li>
              <li>Optimized UI performance to ensure the platform stayed responsive while handling high-frequency, real-time data updates.</li>
              <li>Interviewed and evaluated university candidates for engineering roles.</li>
            </ul>
            <div class="work-experience-technologies">
              <span>TypeScript</span><span>React</span><span>Angular</span><span>Redux</span><span>Webpack</span><span>SASS</span>
            </div>
          </div>

          <div class="work-experience-content">
            <div class="work-header">
              <h2>Yahoo — Senior UI Developer <span class="weight-normal">(Flurry Analytics)</span></h2>
              <p class="work-meta">San Francisco, CA · 2015 – 2016</p>
            </div>
            <ul class="work-bullets">
              <li>Rebuilt the Flurry Analytics web UI in Angular, introducing a modular, reusable component architecture.</li>
              <li>Built interactive data visualization tools that enabled mobile developers to analyze millions of app events in real-time.</li>
            </ul>
            <div class="work-experience-technologies">
              <span>JavaScript</span><span>Angular</span><span>D3.js</span><span>Node.js</span><span>SASS</span><span>Git</span>
            </div>
          </div>

          <div class="work-experience-content">
            <div class="work-header">
              <h2>MuleSoft — Senior Frontend Engineer <span class="weight-normal">(Acquired by Salesforce)</span></h2>
              <p class="work-meta">San Francisco, CA · 2012 – 2015</p>
            </div>
            <ul class="work-bullets">
              <li>Joined as the first frontend engineer in the San Francisco office, owned the CloudHub UI, and helped build the engineering team.</li>
              <li>Developed the reusable UI components and architecture used to create the unified Anypoint Platform.</li>
              <li>Established coding standards, project structures, and build tools used by the frontend team as the company scaled.</li>
              <li>Built real-time dashboards and control panels used by enterprise customers to manage cloud infrastructure.</li>
              <li>Interviewed and mentored new engineering hires to help scale the San Francisco UI team.</li>
            </ul>
            <div class="work-experience-technologies">
              <span>JavaScript</span><span>Angular</span><span>Backbone</span><span>Node.js</span><span>LESS</span><span>Grunt</span>
            </div>
          </div>

        </div>
      </section>
    `,window.matchMedia("(hover: none)").matches){const a=this.querySelectorAll(".work-experience-content"),s=new IntersectionObserver(e=>{e.forEach(n=>{n.target.classList.toggle("is-active",n.isIntersecting)})},{threshold:.4});a.forEach(e=>s.observe(e))}}}customElements.get("work-experience-component")||customElements.define("work-experience-component",i);
