import"./social-icons-D5rXZ1el.js";class r extends HTMLElement{constructor(){super(),this.titles=[],this.titleIndex=0,this.charIndex=0,this.isDeleting=!1,this.lastFrameTime=0,this.typeSpeed=100,this.deleteSpeed=50}connectedCallback(){this.render(),this.init()}render(){this.innerHTML=`
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
    `}init(){this.textElement=this.querySelector(".typewriter-text");try{this.titles=JSON.parse(this.getAttribute("data-titles"))||[]}catch(t){console.error("Invalid JSON for data-titles attribute on rotating-text component:",t),this.titles=[]}this.titles.length>0&&(this.type=this.type.bind(this),requestAnimationFrame(this.type))}type(t){if(!this.textElement)return;this.lastFrameTime||(this.lastFrameTime=t);const s=t-this.lastFrameTime,n=this.isDeleting?this.deleteSpeed:this.typeSpeed;if(s>n){this.lastFrameTime=t;const e=this.titles[this.titleIndex];this.isDeleting?(this.textElement.textContent=e.substring(0,this.charIndex--),this.charIndex<0&&(this.isDeleting=!1,this.titleIndex=(this.titleIndex+1)%this.titles.length)):(this.textElement.textContent=e.substring(0,this.charIndex++),this.charIndex>e.length&&setTimeout(()=>{this.isDeleting=!0},1e3))}requestAnimationFrame(this.type)}}customElements.define("rotating-text",r);class a extends HTMLElement{connectedCallback(){this.innerHTML=`
      <style>
        .hero {
          width: 100%;
          min-width: 20rem;
          min-height: calc(100svh - var(--header-size));
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-end; 
          align-items: center;
          gap: var(--gap-small);
          padding: 0;
          position: relative; 
          padding-bottom: var(--gap-large); 
        }

        .hero-banner {
          background-color: var(--color-primary); 
          overflow: hidden; 
          position: absolute; 
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          z-index: -1; 
        }

        .hero-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('/images/banner-bg.png') no-repeat;
          background-size: cover;
          opacity: 0.9;
          mix-blend-mode: luminosity; 
          pointer-events: none;
        }
        
        .hero-image-portrait {
          height: 50%;
          aspect-ratio: 1 / 1;
          border-radius: var(--border-radius-lg);
          border: 4px solid var(--white)
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
      </style>
      <section id="hero" class="hero">
        <div class="hero-banner"></div> 
        <img src="./images/portrait-900.webp"
            srcset="./images/portrait-400.webp 400w, 
                    ./images/portrait-600.webp 600w, 
                    ./images/portrait-900.webp 900w, 
                    ./images/portrait-1200.webp 1200w"
            sizes="(max-width: 600px) 90vw, 50vh"
            alt="Portrait of Yulia"
            class="hero-image-portrait"
            fetchpriority="high"
            decoding="async">
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
    `}}customElements.define("hero-component",a);
