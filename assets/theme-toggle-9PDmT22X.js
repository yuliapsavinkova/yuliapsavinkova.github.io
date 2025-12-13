class n extends HTMLElement{constructor(){super(),this._toggleTheme=this._toggleTheme.bind(this),this._themes=["light","dark","pastel"]}_toggleTheme(){const e=document.documentElement,t=e.dataset.theme||this._themes[0],s=this._themes.indexOf(t),l=this._themes[(s+1)%this._themes.length];e.dataset.theme=l,localStorage.setItem("theme",l),this._updateIcon(l)}_updateIcon(e){const t=this.querySelector(".sun"),s=this.querySelector(".moon");e==="light"?(t.style.display="block",t.style.opacity="1",s.style.display="none"):e==="dark"?(t.style.display="none",s.style.display="block"):e==="pastel"&&(t.style.display="block",t.style.opacity="0.6",s.style.display="none")}connectedCallback(){this.innerHTML=`
      <style>    
        .theme-toggle-btn {
          cursor: pointer;
        } 
      </style>
      <div class="theme-toggle-btn" aria-label="Toggle Theme">
        <!-- Sun -->
        <svg class="sun enable-icon-scale" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="4"/>
          <g stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <line x1="12" y1="2" x2="12" y2="5"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
            <line x1="2" y1="12" x2="5" y2="12"/>
            <line x1="19" y1="12" x2="22" y2="12"/>
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
          </g>
        </svg>

        <!-- Moon -->
        <svg class="moon enable-icon-scale" viewBox="0 0 24 24" fill="currentColor" style="display:none">
          <path d="M21 12.79A9 9 0 0 1 12.21 3a9 9 0 1 0 8.79 9.79z"/>
        </svg>
      </div>
    `;const e=localStorage.getItem("theme")||this._themes[0];document.documentElement.dataset.theme=e,this._updateIcon(e),this.querySelector(".theme-toggle-btn").addEventListener("click",this._toggleTheme)}disconnectedCallback(){const e=this.querySelector(".theme-toggle-btn");e&&e.removeEventListener("click",this._toggleTheme)}}customElements.define("theme-toggle-button",n);
