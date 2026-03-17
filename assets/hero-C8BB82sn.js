import"./social-icons-DY5ULfTC.js";class n extends HTMLElement{constructor(){super(),this.titles=[],this.titleIndex=0,this.charIndex=0,this.isDeleting=!1,this.lastFrameTime=0,this.typeSpeed=90,this.deleteSpeed=40}connectedCallback(){this.render(),this.init()}render(){this.innerHTML=`
      <style>
        rotating-text { display: inline-block; }

        .typewriter-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(var(--font-size-typewriter) * 1.4);
          min-width: 20ch;
        }

        .typewriter-text {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 200;
          font-size: var(--font-size-typewriter);
          letter-spacing: var(--tracking-tight);
          color: var(--color-text-90);
          white-space: pre;
          line-height: 1.3;
        }

        /* Amber cursor — the one warm spark in the hero */
        .cursor {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: var(--font-size-typewriter);
          font-weight: 200;
          color: var(--color-accent);
          line-height: 1.3;
          animation: twBlink 1.1s step-end infinite;
        }

        @keyframes twBlink { 50% { opacity: 0; } }
      </style>

      <div class="typewriter-container">
        <span class="typewriter-text"></span>
        <span class="cursor">|</span>
      </div>
    `}init(){this.textElement=this.querySelector(".typewriter-text");try{this.titles=JSON.parse(this.getAttribute("data-titles"))||[]}catch(t){console.error("rotating-text: invalid data-titles JSON",t),this.titles=[]}this.titles.length>0&&(this.type=this.type.bind(this),requestAnimationFrame(this.type))}type(t){if(!this.textElement)return;this.lastFrameTime||(this.lastFrameTime=t);const s=t-this.lastFrameTime,r=this.isDeleting?this.deleteSpeed:this.typeSpeed;if(s>r){this.lastFrameTime=t;const e=this.titles[this.titleIndex];this.isDeleting?(this.textElement.textContent=e.substring(0,this.charIndex--),this.charIndex<0&&(this.isDeleting=!1,this.titleIndex=(this.titleIndex+1)%this.titles.length)):(this.textElement.textContent=e.substring(0,this.charIndex),this.charIndex<e.length?this.charIndex++:this.deleteTimer||(this.deleteTimer=setTimeout(()=>{this.isDeleting=!0,this.deleteTimer=null},1400)))}requestAnimationFrame(this.type)}}customElements.define("rotating-text",n);class a extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="hero" class="hero">
        <div class="hero-portrait-cluster">
          <div class="hero-portrait-frame">
            <div class="hero-portrait-inner">
              <img
                src="./images/portrait-900.webp"
                srcset="
                  ./images/portrait-400.webp  400w,
                  ./images/portrait-600.webp  600w,
                  ./images/portrait-900.webp  900w,
                  ./images/portrait-1200.webp 1200w
                "
                sizes="(max-width: 600px) 240px, 416px"
                width="900"
                height="1200"
                alt="Portrait of Yulia"
                fetchpriority="high"
                decoding="async"
              >
            </div>
          </div>

          <div class="hero-social-dock" aria-label="Social links">
            <social-icons mode="dock"></social-icons>
          </div>
        </div>

        <div class="hero-text">
          <p class="hero-greeting">Hello, I'm Yulia</p>
          <rotating-text data-titles='[
            "Software Engineer",
            "Web Developer",
            "Animal Lover"
          ]'></rotating-text>
        </div>

        <div class="hero-buttons">
          <a href="#/about"   class="button button-primary">Learn More</a>
          <a href="#/contact" class="button button-secondary">Contact</a>
        </div>

        <button class="hero-scroll" aria-label="Scroll to next section">
          <svg viewBox="0 0 16 16" fill="none"
               stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <polyline points="2,5 8,11 14,5"/>
          </svg>
        </button>
      </section>
    `,this.querySelector(".hero-scroll").addEventListener("click",()=>{var t;(t=document.getElementById("about"))==null||t.scrollIntoView({behavior:"smooth"})})}}customElements.define("hero-component",a);
