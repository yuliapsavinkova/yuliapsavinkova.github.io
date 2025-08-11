class o extends HTMLElement{constructor(){super(),this.innerHTML=`
      <div class="progress-container" id="progress-container">
        <div class="progress-ring" id="progress-ring"></div>
        <div class="arrow">
          <svg viewBox="0 0 24 24"
              className="angleUpIcon"
              fill="currentColor"
              aria-hidden="true">
              <path d="M10.588 5.587c.781-.781 2.05-.781 2.83 0l9.996 9.996a2.002 2.002 0 0 1-2.83 2.83L12 9.83l-8.584 8.578a2.002 2.002 0 0 1-2.83-2.83l9.996-9.996Z" />
          </svg>
        </div>
      </div>
    `+this.innerHTML,this.progressContainer=document.querySelector("#progress-container"),this.progressRing=document.querySelector("#progress-ring"),this.updateProgress=this.updateProgress.bind(this),this.scrollToTop=this.scrollToTop.bind(this)}connectedCallback(){window.addEventListener("scroll",this.updateProgress),this.progressContainer.addEventListener("click",this.scrollToTop),this.updateProgress()}disconnectedCallback(){window.removeEventListener("scroll",this.updateProgress),this.progressContainer.removeEventListener("click",this.scrollToTop)}updateProgress(){const s=window.scrollY,e=document.documentElement.scrollHeight-window.innerHeight,r=Math.min(s/e*100,100);s>0?this.progressContainer.classList.add("visible"):this.progressContainer.classList.remove("visible"),this.progressRing.style.setProperty("--scroll-progress",`${r}%`)}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}customElements.define("scroll-progress-ring",o);
