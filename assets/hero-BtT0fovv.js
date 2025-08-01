class l extends HTMLElement{connectedCallback(){this.innerHTML=this.getTemplate(),this.initTypewriterEffect()}getTemplate(){return`
      <section id="hero" class="hero bg-texture">
        <div class="hero-container">
          <div>
            <img src="./images/hero.png" alt="hero image" class="hero-image">
          </div>
          <div class="hero-heading">
            <h1>Yulia Savinkova</h1>
            <h2 class="rotating-subtitle">
              <span id="subtitle"></span>
              <span class="cursor">|</span>
            </h2>
          </div>
          <div>
            <a href="#/about" class="button button-primary">Learn More</a>
            <a href="#/contact" class="button button-action">Contact</a>
          </div>
        </div>
      </section>
    `}initTypewriterEffect(){const n=["Software Engineer","Web Developer","Frontend Specialist","UI/UX Enthusiast","Creative Coder","Animal Lover"],o=this.querySelector("#subtitle");let s=0,t=0,e=!1;const a=()=>{const i=n[s],r=e?i.substring(0,t--):i.substring(0,t++);o.textContent=r,!e&&t===i.length+1?setTimeout(()=>e=!0,1e3):e&&t===0&&(e=!1,s=(s+1)%n.length),setTimeout(a,e?50:100)};a()}}customElements.define("hero-component",l);
