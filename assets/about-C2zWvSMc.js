class e extends HTMLElement{constructor(){super(),this.innerHTML=`
            <section id="about" class="section about">
                <section-header 
                    title="About Me"
                    sub-title="Bringing Ideas to Life">
                </section-header>

                <div class="magic-row">
                    <div class="magic-image">
                        <img src="./images/portrait.png" loading="lazy" alt="Head shot of Yulia Savinkova, a web developer."/>
                    </div>
                    <div class="magic-description">
                        <h2>Code & Beyond</h2>
                        <p>I'm a freelance Software Engineer with over a decade of experience building websites and web applications.</p>
                        <!--<p>I create clean, responsive, and user-friendly digital experiences using modern tools and best practices. Whether it's a simple website or a complex web application, I focus on building fast, reliable solutions tailored to each client's needs.</p>-->
                        <p>Alongside web development, I help traders and finance professionals build custom tools for trading, portfolio management, and market analysis.</p>
                        <p>I stay current on how AI is transforming work and integrate it into my workflows to improve productivity and efficiency.</p>
                        <p>Outside of work, I enjoy reading, traveling, and spending time with animals.</p>
                        <div>
                            <a href="./resume.pdf" target="_blank" class="button button-primary">Resume</a>
                            <a href="#/work" class="button button-secondary">Learn More</a>
                        </div>
                    </div>
                </div>              
            </section>
        `}}customElements.define("about-component",e);
