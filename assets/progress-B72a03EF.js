class d extends HTMLElement{constructor(){super();const s=20,e=2*Math.PI*s;this.CIRC=e,this.R=s,this.innerHTML=`
      <div class="progress-container" id="progress-container">
        <div class="progress-ring" id="progress-ring">
          <svg class="orbit-track" viewBox="0 0 44 44" aria-hidden="true">
            <circle class="track" cx="22" cy="22" r="${s}"/>
            <circle class="fill" cx="22" cy="22" r="${s}"
              stroke-dasharray="${e.toFixed(3)}"
              stroke-dashoffset="${e.toFixed(3)}"
            />
          </svg>
          <div class="progress-sun" id="progress-sun"></div>
          <div class="progress-arrow">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M10.588 5.587c.781-.781 2.05-.781 2.83 0l9.996 9.996a2.002 2.002 0 0 1-2.83 2.83L12 9.83l-8.584 8.578a2.002 2.002 0 0 1-2.83-2.83l9.996-9.996Z"/>
            </svg>
          </div>
        </div>
      </div>
    `,this.progressContainer=this.querySelector("#progress-container"),this.progressRing=this.querySelector("#progress-ring"),this.sun=this.querySelector("#progress-sun"),this.fillCircle=this.querySelector(".fill"),this.updateProgress=this.updateProgress.bind(this),this.scrollToTop=this.scrollToTop.bind(this)}connectedCallback(){window.addEventListener("scroll",this.updateProgress,{passive:!0}),this.progressContainer.addEventListener("click",this.scrollToTop),this.updateProgress()}disconnectedCallback(){window.removeEventListener("scroll",this.updateProgress),this.progressContainer.removeEventListener("click",this.scrollToTop)}updateProgress(){const s=window.scrollY,e=document.documentElement.scrollHeight-window.innerHeight,r=e>0?Math.min(s/e,1):0;this.progressContainer.classList.toggle("visible",s>80),this.fillCircle.style.strokeDashoffset=(this.CIRC*(1-r)).toFixed(3);const t=this.progressRing.offsetWidth,o=t/2,l=t/2,i=this.R/22*o,n=8,c=-Math.PI/2+r*Math.PI*2,a=o+Math.cos(c)*i-n/2,h=l+Math.sin(c)*i-n/2;this.sun.style.left=`${a}px`,this.sun.style.top=`${h}px`}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}customElements.get("scroll-progress-ring")||customElements.define("scroll-progress-ring",d);
