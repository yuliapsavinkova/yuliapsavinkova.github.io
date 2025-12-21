import"./social-icons-D5rXZ1el.js";class a extends HTMLElement{constructor(){super(),this.titles=[],this.titleIndex=0,this.charIndex=0,this.isDeleting=!1,this.lastFrameTime=0,this.typeSpeed=100,this.deleteSpeed=50}connectedCallback(){this.render(),this.init()}render(){this.innerHTML=`
        <style>
          rotating-text {
            display: inline-block;
            vertical-align: middle;
          }
          .typewriter-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2.5rem;
            min-width: 30ch;
          }
          .typewriter-text,
          .cursor {
            white-space: pre;
            font-size: 1.75rem;
            font-weight: 500;
            letter-spacing: 0em;
            line-height: 1.3;
            color: var(--color-primary);
          }

          .cursor {
            display: inline-block;
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        </style>
        <div class="typewriter-container">
            <span class="typewriter-text"></span>
            <span class="cursor">|</span>
        </div>
    `}init(){this.textElement=this.querySelector(".typewriter-text");try{this.titles=JSON.parse(this.getAttribute("data-titles"))||[]}catch(e){console.error("Invalid JSON for data-titles attribute on rotating-text component:",e),this.titles=[]}this.titles.length>0&&(this.type=this.type.bind(this),requestAnimationFrame(this.type))}type(e){if(!this.textElement)return;this.lastFrameTime||(this.lastFrameTime=e);const r=e-this.lastFrameTime,n=this.isDeleting?this.deleteSpeed:this.typeSpeed;if(r>n){this.lastFrameTime=e;const t=this.titles[this.titleIndex];this.isDeleting?(this.textElement.textContent=t.substring(0,this.charIndex--),this.charIndex<0&&(this.isDeleting=!1,this.titleIndex=(this.titleIndex+1)%this.titles.length)):(this.textElement.textContent=t.substring(0,this.charIndex++),this.charIndex>t.length&&setTimeout(()=>{this.isDeleting=!0},1e3))}requestAnimationFrame(this.type)}}customElements.define("rotating-text",a);class s extends HTMLElement{connectedCallback(){this.innerHTML=`
      <style>
        .hero {
          width: 100%;
          min-height: calc(100svh - var(--header-size));
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center; 
          align-items: center;
          gap: var(--gap-small);
          padding: 0 var(--padding-inline);
        }

        .hero-banner, .hero-banner::before {
            border-radius: var(--border-radius-lg);
        }
        .hero-banner {
            display: block;
            background-color: var(--color-primary); 
            position: absolute; 
            top: 3rem;
            left: 0;
            right: 0;
            height: 50%;
            z-index: -1; 
        }

        .hero-banner::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url('/images/banner-bg-mobile.webp'); /* Mobile (Vertical) Image */
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0.9;
            mix-blend-mode: luminosity; 
            pointer-events: none;
        }

        .hero-image-portrait {
          width: auto;
          height: 50vh;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          border-radius: var(--border-radius-lg);
        }

        .hero-heading {
          text-align: center;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--gap-tiny);
        }

        @media (min-width: 768px) {
          .hero {
            padding: var(--gap-large) 0;
          }

          .hero-banner {
            margin: 0 1rem;
          }

          .hero-banner::before {
              background-image: url('/images/banner-bg-tablet.webp');
          }
        }

        @media (min-width: 1025px) {
          .hero-banner::before {
              background-image: url('/images/banner-bg-desktop.webp');
          }
        }
      </style>
      <section id="hero" class="hero">
        <div class="hero-banner"></div> 
        <img
          src="./images/portrait-900.webp"
          srcset="
            ./images/portrait-400.webp 400w,
            ./images/portrait-600.webp 600w,
            ./images/portrait-900.webp 900w,
            ./images/portrait-1200.webp 1200w
          "
          sizes="(max-width: 600px) 90vw, 50vw"
          width="900"
          height="1200"
          alt="Portrait of Yulia"
          class="hero-image-portrait"
        >
        <social-icons></social-icons>
        <div class="hero-heading">
          <h1>Hello, I'm Yulia</h1>
          <rotating-text data-titles='[
              "Software Engineer",
              "Web Developer",
              "Animal Lover"
          ]'></rotating-text>
        </div>
        <div class="hero-buttons">
          <a href="#/about" class="button button-primary">Learn More</a>
          <a href="#/contact" class="button button-action">Contact</a>
        </div>
      </section>
    `}}customElements.define("hero-component",s);
