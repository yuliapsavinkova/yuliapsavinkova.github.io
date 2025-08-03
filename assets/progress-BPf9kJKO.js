class o extends HTMLElement{constructor(){super(),this.innerHTML=`
      <div class="progress-container" id="progress-container">
        <div class="progress-ring" id="progress-ring"></div>
        <div class="arrow">
          <svg class="icon icon-fill" aria-hidden="true">
            <use href="#icon-fa-angle-up"></use>
          </svg>
        </div>
      </div>
    `+this.innerHTML,this.progressContainer=document.querySelector("#progress-container"),this.progressRing=document.querySelector("#progress-ring"),this.updateProgress=this.updateProgress.bind(this),this.scrollToTop=this.scrollToTop.bind(this)}connectedCallback(){window.addEventListener("scroll",this.updateProgress),this.progressContainer.addEventListener("click",this.scrollToTop),this.updateProgress()}disconnectedCallback(){window.removeEventListener("scroll",this.updateProgress),this.progressContainer.removeEventListener("click",this.scrollToTop)}updateProgress(){const s=window.scrollY,e=document.documentElement.scrollHeight-window.innerHeight,r=Math.min(s/e*100,100);s>0?this.progressContainer.classList.add("visible"):this.progressContainer.classList.remove("visible"),this.progressRing.style.setProperty("--scroll-progress",`${r}%`)}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}customElements.define("scroll-progress-ring",o);
