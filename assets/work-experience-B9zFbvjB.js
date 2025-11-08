class e extends HTMLElement{connectedCallback(){this.innerHTML=`
              <section id="work-experience" class="work-experience">
                <section-header 
                    title="Work Experience"
                    sub-title="A Journey of Growth">
                </section-header>

                <div class="work-experience-container">
                  <div class="work-experience-content">
                      <h2>Independent Software Engineer, San Diego, CA</h2>
                      <h3>2019 - Present</h3>
                      <ul>
                        <li>Design and develop web applications and websites from scratch.</li>
                        <li>Create custom HTML web components and reusable shared libraries</li>
                        <li>Build responsive layouts that work across different devices and screen sizes.</li>
                        <li>Modernize existing applications by rebuilding them with modern technologies.</li>
                      </ul>
                      <div class="work-experience-technologies">
                        <span>JavaScript</span>
                        <span>Web Components</span>
                        <span>React</span>
                        <span>Next.js</span>
                        <span>Node</span>
                        <span>Express</span>
                        <span>PostgreSQL</span>
                        <span>Vite</span>
                      </div>
                  </div>

                  <div class="work-experience-content">
                      <h2>Sr. Software Engineer, Bloomberg, New York, NY</h2>
                      <h3>2016 - 2019</h3>
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
                      <h2>Sr. UI Developer, Yahoo, San Francisco, CA</h2>
                      <h3>2015 - 2016</h3>
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
                      <h2>Sr. JavaScript UI Engineer, MuleSoft, San Francisco, CA</h2>
                      <h3>2012 - 2015</h3>
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
              </section>
          `}}customElements.define("work-experience-component",e);
