class AboutComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="about-me" class="section about-me">
                <h2>About Me</h2>
                <h5>Solving complex problems and creating impactful, user-friendly software solutions.</h5>
                <div class="gra-separator"></div>
                <div class="aboutme-container">
                    <img src="assets/images/portrait-noback.png" class="aboutme-image"/>
                    <div class="aboutme-content">
                        <h3>Transforming visions into realities.</h3>
                        <p>
                            I am a highly skilled and motivated Software Engineer with over 10 years of experience in designing,
                            developing, and optimizing web applications. My expertise lies in creating seamless user experiences using
                            modern web technologies, with a strong foundation in HTML, CSS, JavaScript, and frameworks such as React and
                            Angular.
                        </p>
                        <p>
                            I am proficient in version control systems like Git, build tools like Webpack, and development environments
                            including VS Code, ensuring efficient and scalable code. With a solid background in SQL and REST APIs, I
                            excel in integrating and managing back-end services to deliver robust and high-performance solutions.
                        </p>
                        <p>
                            Known for my analytical mindset and passion for problem-solving, I thrive in collaborative and dynamic
                            environments, contributing to the delivery of innovative software that drives business success.
                            Outside of work, I enjoy exploring emerging technologies, contributing to open-source projects, and
                            mentoring the next generation of developers.
                        </p>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('about-component', AboutComponent);
