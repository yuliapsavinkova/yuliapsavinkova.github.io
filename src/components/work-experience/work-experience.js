import './work-experience.css';

class WorkExperienceComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="work-experience" class="work-experience">
        <section-header
          title="Work Experience"
          sub-title="A Journey of Growth">
        </section-header>

        <div class="work-experience-container">

          <div class="work-experience-content">
            <div class="work-header">
              <h2>Self-Employed — Senior Software Engineer</h2>
              <p class="work-meta">2020 – Present</p>
            </div>

            <ul class="work-bullets">
              <li>Designed and built full-stack web applications from concept to deployment using React, TypeScript, Next.js, Node.js, and SQL.</li>
              <li>Developed real-time trading dashboards and visualization tools for market analysis and portfolio management.</li>
              <li>Architected reusable UI components and responsive interfaces with a strong focus on performance and maintainability.</li>
              <li>Built REST APIs and integrated third-party services, including authentication, payments, and AI services.</li>
              <li>Rapidly prototyped and launched MVPs, translating ideas into production-ready applications.</li>
            </ul>

            <div class="work-experience-technologies">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>SQL</span>
              <span>REST APIs</span>
              <span>AI</span>
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
    `;

    // On touch devices use IntersectionObserver instead of hover
    if (window.matchMedia('(hover: none)').matches) {
      const entries = this.querySelectorAll('.work-experience-content');
      const observer = new IntersectionObserver(
        (changes) => {
          changes.forEach((change) => {
            change.target.classList.toggle('is-active', change.isIntersecting);
          });
        },
        { threshold: 0.4 },
      );

      entries.forEach((el) => observer.observe(el));
    }
  }
}

if (!customElements.get('work-experience-component')) {
  customElements.define('work-experience-component', WorkExperienceComponent);
}
