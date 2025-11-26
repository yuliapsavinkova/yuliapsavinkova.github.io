class r extends HTMLElement{constructor(){super(),this.titles=[],this.titleIndex=0,this.charIndex=0,this.isDeleting=!1,this.lastFrameTime=0,this.typeSpeed=100,this.deleteSpeed=50}connectedCallback(){this.render(),this.init()}render(){this.innerHTML=`
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
          justify-content: center;
          align-items: center;
          gap: var(--gap-small);
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

        .hero-image {
          width: 100%;
          max-width: 40rem;
          height: auto;
          aspect-ratio: 2 / 1;
          object-fit: contain;
        }
      </style>
      <section id="hero" class="hero bg-texture">
        <img src="./images/hero-small.webp"
              alt="hero image"
              class="hero-image"
              fetchpriority="high"
              decoding="async">
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
