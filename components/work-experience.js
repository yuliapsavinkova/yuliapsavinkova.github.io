class WorkExperienceComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
              <section id="work-experience" class="section work-experience">
                  <h2>Professional Experience</h2>
                  <div class="gra-separator"></div>

                  <div class="work-experience-content">
                    <h5>2019 - Present</h5>
                    <div class="work-experience-description">
                      <h5>Freelance Software Engineer, Gravity Workflow, Miami, FL</h5>
                      <ul>
                        <li>Develop web applications and implement new features.</li>
                        <li>Build responsive layouts that support all screen sizes.</li>
                        <li>Create custom HTML web components and reusable shared libraries.</li>
                        <li>Design and develop professional business websites.</li>
                        <li>Modernize existing applications by rebuilding them with new technologies.</li>
                      </ul>
                      <div class="work-experience-technologies">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Web Components</span>
                      </div>
                    </div>
                  </div>

                  <div class="work-experience-content">
                    <h5>2016 - 2019</h5>
                    <div class="work-experience-description">
                      <h5>Sr. Software Engineer, Bloomberg, New York, NY</h5>
                      <ul>
                        <li>Worked on developing bloomberg add-ins for Excel, Word and Outlook.</li>
                        <li>Designed and developed a research management tool.</li>
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
                  </div>

                  <div class="work-experience-content">
                    <h5>2015 - 2016</h5>
                    <div class="work-experience-description">
                      <h5>Sr. UI Developer, Yahoo, San Francisco, CA</h5>
                      <ul>
                        <li>Rebuilt analytics platform UI for new design.</li>
                        <li>Developed new features for the analytics platform.</li>
                      </ul>
                      <div class="work-experience-technologies">
                        <span>JavaScript</span>
                        <span>Angular</span>
                        <span>D3</span>
                        <span>Node</span>
                        <span>Gulp</span>
                        <span>Git</span>
                        <span>SASS</span>
                        <span>HTML</span>
                      </div>
                    </div>
                  </div>

                  <div class="work-experience-content">
                    <h5>2012 - 2015</h5>
                    <div class="work-experience-description">
                      <h5>Sr. JavaScript UI Engineer, MuleSoft, San Francisco, CA</h5>
                      <ul>
                        <li>Developed UI's for CloudHub and Anypoint Platform.</li>
                        <li>Unified and developed common UI components for all MuleSoft products.</li>
                      </ul>
                      <div class="work-experience-technologies">
                        <span>JavaScript</span>
                        <span>Angular</span>
                        <span>Backbone</span>
                        <span>Node</span>
                        <span>Grunt</span>
                        <span>Git</span>
                        <span>LESS</span>
                        <span>HTML</span>
                      </div>
                    </div>
                  </div>

                  <h2>Education</h2>
                  <div class="gra-separator"></div>
                  <div class="work-experience-content">
                    <h5>May, 2011</h5>
                    <div class="work-experience-description">
                      <h5>M.S. / Computer Science,​ Suffolk University, Boston, MA</h5>
                    </div>
                  </div>

                  <h2>Other</h2>
                  <div class="gra-separator"></div>
                  <div class="work-experience-content">
                    <h5>December, 2017</h5>
                    <div class="work-experience-description">
                      <h5>Passed CFA Level 1, CFA Institute</h5>
                    </div>
                  </div>
                  <div class="work-experience-content">
                    <h5>2010 - 2011</h5>
                    <div class="work-experience-description">
                      <h5>Instructor, Suffolk University; Boston, MA</h5>
                    </div>
                  </div>
              </section>
          `;
  }
}
customElements.define("work-experience-component", WorkExperienceComponent);
