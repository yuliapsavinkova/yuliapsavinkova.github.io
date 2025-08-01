class a extends HTMLElement{constructor(){super(),this.titles=[],this.titleIndex=0,this.charIndex=0,this.isDeleting=!1,this.lastFrameTime=0,this.typeSpeed=100,this.deleteSpeed=50}connectedCallback(){this.render(),this.init()}render(){this.innerHTML=`
        <div class="typewriter-container">
            <span class="typewriter-text"></span>
            <span class="cursor">|</span>
        </div>
    `}init(){this.textElement=this.querySelector(".typewriter-text");try{this.titles=JSON.parse(this.getAttribute("data-titles"))||[]}catch{console.error("Invalid JSON for data-titles attribute on rotating-text component."),this.titles=[]}this.titles.length>0&&(this.type=this.type.bind(this),requestAnimationFrame(this.type))}type(t){if(!this.textElement)return;this.lastFrameTime||(this.lastFrameTime=t);const s=t-this.lastFrameTime,n=this.isDeleting?this.deleteSpeed:this.typeSpeed;if(s>n){this.lastFrameTime=t;const e=this.titles[this.titleIndex];this.isDeleting?(this.textElement.textContent=e.substring(0,this.charIndex--),this.charIndex<0&&(this.isDeleting=!1,this.titleIndex=(this.titleIndex+1)%this.titles.length)):(this.textElement.textContent=e.substring(0,this.charIndex++),this.charIndex>e.length&&setTimeout(()=>{this.isDeleting=!0},1e3))}requestAnimationFrame(this.type)}}customElements.define("rotating-text",a);class r extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="hero" class="hero bg-texture">
        <div class="hero-container">
          <div>
            <img src="./images/hero.png" alt="hero image" class="hero-image">
          </div>
          <div class="hero-heading">
            <h1>Hello, I'm Yulia</h1>
            <rotating-text data-titles='[
                "Software Engineer",
                "Web Developer",
                "Frontend Specialist",
                "UI/UX Enthusiast"
            ]'></rotating-text>
          </div>
          <div class="hero-buttons">
            <a href="#/about" class="button button-primary">Learn More</a>
            <a href="#/contact" class="button button-action">Contact</a>
          </div>
        </div>
      </section>
    `}}customElements.define("hero-component",r);
