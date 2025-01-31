class WorkExperienceComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
              <section id="work-experience" class="section work-experience">
                  <section-header 
                      title="Professional Experience"
                      sub-title="A Journey of Growth and Expertise">
                  </section-header>

                  <div class="work-experience-container">
                    <div class="work-experience-content">
                        <h5>Lead Software Engineer, Gravity Workflow, Miami, FL 2019 - Present</h5>
                        <ul>
                          <li>Design and develop web applications and websites from scratch.</li>
                          <li>Design and develop 3D interactive web experiences.</li>
                          <li>Create custom HTML web components and reusable shared libraries.</li>
                          <li>Build responsive layouts that work across all screen sizes.</li>
                          <li>Modernize existing applications by rebuilding them with modern technologies.</li>
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
                  <div class="gra-separator"></div>
                  <div class="work-experience-content">
                      <div class="work-experience-header">
                        Master of Science in Computer Science, Suffolk University, Boston, MA May, 2011
                      </div>
                  </div>-->

                  <!--<h2>Other</h2>
                  <div class="gra-separator"></div>

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
          `;
  }
}
customElements.define("work-experience-component", WorkExperienceComponent);
