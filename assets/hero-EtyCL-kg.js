import"./social-icons-CDUBf___.js";class n extends HTMLElement{constructor(){super(),this.titles=[],this.titleIndex=0,this.charIndex=0,this.isDeleting=!1,this.lastFrameTime=0,this.typeSpeed=75,this.deleteSpeed=35}connectedCallback(){this.render(),this.init()}render(){this.innerHTML=`
      <style>
        rotating-text {
          display: inline-block;
          width: 100%;
        }

        .typewriter-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 2.5rem;
        }

        .typewriter-text {
          font-family: var(--font-sans);
          font-weight: var(--weight-bold);
          font-size: clamp(1.4rem, 3.2vw, 2.25rem);
          letter-spacing: var(--tracking-tight);
          color: var(--text-primary);
          white-space: pre;
          line-height: var(--leading-tight);
        }

        .cursor {
          font-family: var(--font-sans);
          font-size: clamp(1.4rem, 3.2vw, 2.25rem);
          font-weight: 300;
          color: var(--accent-primary);
          line-height: var(--leading-tight);
          margin-left: 2px;
          animation: twBlink 1s step-end infinite;
        }

        @keyframes twBlink {
          50% { opacity: 0; }
        }
      </style>

      <div class="typewriter-container">
        <span class="typewriter-text"></span>
        <span class="cursor">|</span>
      </div>
    `}init(){this.textElement=this.querySelector(".typewriter-text");try{this.titles=JSON.parse(this.getAttribute("data-titles"))||[]}catch(t){console.error("rotating-text: invalid data-titles JSON",t),this.titles=[]}this.titles.length>0&&(this.type=this.type.bind(this),requestAnimationFrame(this.type))}type(t){if(!this.textElement)return;this.lastFrameTime||(this.lastFrameTime=t);const e=t-this.lastFrameTime,r=this.isDeleting?this.deleteSpeed:this.typeSpeed;if(e>r){this.lastFrameTime=t;const i=this.titles[this.titleIndex];this.isDeleting?(this.textElement.textContent=i.substring(0,this.charIndex--),this.charIndex<0&&(this.isDeleting=!1,this.titleIndex=(this.titleIndex+1)%this.titles.length)):(this.textElement.textContent=i.substring(0,this.charIndex),this.charIndex<i.length?this.charIndex++:this.deleteTimer||(this.deleteTimer=setTimeout(()=>{this.isDeleting=!0,this.deleteTimer=null},1500)))}requestAnimationFrame(this.type)}}customElements.define("rotating-text",n);class a extends HTMLElement{connectedCallback(){var t;this.innerHTML=`
      <section id="hero" class="hero">
        <div class="hero-container container">
          <div class="hero-content">
            <div class="hero-social-wrap">
              <social-icons mode="default"></social-icons>
            </div>

            <div class="hero-status-wrap">
              <div class="status-pill">
                <span class="status-dot"></span>
                <span>Available for new opportunities</span>
              </div>
            </div>

            <h1 class="hero-greeting">Hi, I'm Yulia</h1>
            <rotating-text data-titles='[
              "Staff Software Engineer",
              "Full-Stack Architect",
              "Design Systems Enthusiast",
              "Open Source Builder"
            ]'></rotating-text>
            
            <p class="hero-bio">
              Building performant, accessible web applications and robust digital experiences with modern JavaScript & TypeScript. Over a decade of engineering experience across Bloomberg, Yahoo, and MuleSoft.
            </p>

            <div class="hero-actions">
              <div class="hero-buttons">
                <a href="#/work" class="button button-primary">Explore Work</a>
                <a href="#/contact" class="button button-secondary">Contact Me</a>
              </div>
            </div>
          </div>

          <div class="hero-portrait-card">
            <div class="hero-portrait-media">
              <img
                src="./images/portrait-900.webp"
                srcset="
                  ./images/portrait-400.webp  400w,
                  ./images/portrait-600.webp  600w,
                  ./images/portrait-900.webp  900w,
                  ./images/portrait-1200.webp 1200w
                "
                sizes="(max-width: 600px) 90vw, (max-width: 899px) 24rem, 30rem"
                width="900"
                height="1200"
                alt="Portrait of Yulia"
                fetchpriority="high"
                decoding="async"
              >
            </div>
          </div>
        </div>

        <button class="hero-scroll" aria-label="Scroll down">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </section>
    `,(t=this.querySelector(".hero-scroll"))==null||t.addEventListener("click",()=>{var e;(e=document.querySelector("main > section:nth-of-type(2)"))!=null&&e.scrollIntoView({behavior:"smooth"})||window.scrollBy({top:window.innerHeight*.85,behavior:"smooth"})})}}customElements.define("hero-component",a);
