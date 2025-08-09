(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const w="modulepreload",E=function(i){return"/"+i},_={},r=function(t,e,a){let o=Promise.resolve();if(e&&e.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),h=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=c(e.map(l=>{if(l=E(l),l in _)return;_[l]=!0;const u=l.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":w,u||(d.as="script"),d.crossOrigin="",d.href=l,h&&d.setAttribute("nonce",h),document.head.appendChild(d),u)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return o.then(c=>{for(const s of c||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})};if(typeof window<"u"){let i=function(){var t=document.body,e=document.getElementById("__svg__icons__dom__");e||(e=document.createElementNS("http://www.w3.org/2000/svg","svg"),e.style.position="absolute",e.style.width="0",e.style.height="0",e.id="__svg__icons__dom__",e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),e.innerHTML='<symbol  viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" id="icon-arrow-right"><path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm0 1.5A8.239 8.239 0 0 1 20.25 12 8.239 8.239 0 0 1 12 20.25 8.239 8.239 0 0 1 3.75 12 8.239 8.239 0 0 1 12 3.75Zm.75 4.5a.75.75 0 0 0-.531.219.75.75 0 0 0 0 1.062l1.719 1.719H8.25a.75.75 0 0 0-.75.75.75.75 0 0 0 .75.75h5.688l-1.72 1.719a.75.75 0 0 0 0 1.062.75.75 0 0 0 1.063 0l3-3A.75.75 0 0 0 16.5 12a.75.75 0 0 0-.219-.531l-3-3a.75.75 0 0 0-.531-.219Z" style="baseline-shift:baseline;display:inline;overflow:visible;vector-effect:none;stroke-linecap:round;stroke-linejoin:round;enable-background:accumulate;stop-color:#000;stop-opacity:1;opacity:1" /></symbol><symbol  viewBox="0 0 24 24" id="icon-bars"><path fill="currentColor" d="M0 3.429c0-.949.766-1.715 1.714-1.715h20.572c.948 0 1.714.766 1.714 1.715 0 .948-.766 1.714-1.714 1.714H1.714A1.712 1.712 0 0 1 0 3.429ZM0 12c0-.948.766-1.714 1.714-1.714h20.572c.948 0 1.714.766 1.714 1.714s-.766 1.714-1.714 1.714H1.714A1.712 1.712 0 0 1 0 12Zm24 8.571c0 .949-.766 1.715-1.714 1.715H1.714A1.712 1.712 0 0 1 0 20.57c0-.948.766-1.714 1.714-1.714h20.572c.948 0 1.714.766 1.714 1.714z" /></symbol><symbol  fill="currentColor" viewBox="0 0 24 24" id="icon-ys-logo"><path d="M5.11 6.542c.462.957 1.03 2.146 1.264 2.647 1.065 2.305 1.469 2.858 3.432 4.69.792.74 1.116 1.19 1.35 1.856.142.416.153.524.153 1.28 0 .752-.017.866-.159 1.281-.086.251-.194.513-.24.581l-.079.13h3.53v-1.445c0-.796-.03-1.644-.064-1.89-.13-.944-.557-2.02-1.08-2.737-.303-.41-.82-.928-1.56-1.56-1.128-.967-1.663-1.69-2.414-3.25-.245-.512-.877-1.799-1.395-2.863-.523-1.064-1.314-2.67-1.753-3.575L5.29.05 3.648.054C2.748.056 1.998.044 2 .05c1.023 2.174 2.065 4.328 3.11 6.492" /><path d="M12.29.05s-.195.08-.688.789c-.571.826-.985 1.851-1.12 2.797-.086.572-.09 1.513.006 2.05.272 1.547 1.224 3.047 2.497 3.948.516.368 1.054.634 2.067 1.03 1.331.527 2.01 1.02 2.571 1.869.538.815.77 1.58.77 2.56 0 2.196-1.223 4.19-3.205 5.215-1.71.883-3.93.928-5.651.113-1.597-.76-2.69-1.954-3.392-3.71l-.096-.237H4.492c-1.336 0-1.557.011-1.557.085 0 .164.577 1.71.85 2.276a9.191 9.191 0 0 0 6.964 5.085c.702.097 2.027.108 2.746.023.691-.085 1.874-.39 2.486-.651.566-.238 1.676-.884 2.1-1.23.488-.39 1.23-1.188 1.626-1.743.459-.634 1.059-1.812 1.285-2.514.329-1.003.49-2.157.43-3.058-.132-2.004-.973-3.902-2.281-5.136-.86-.81-1.58-1.246-2.786-1.687-.912-.334-1.36-.582-1.83-1.02-.703-.655-1.04-1.387-1.098-2.378a2.8 2.8 0 0 1 .073-.862c.092-.447.528-1.42.832-1.857.572-.824 1.4-1.347 2.289-1.748z" /><path d="M18.014.643a164.843 164.843 0 0 0-1.012 1.834 81.81 81.81 0 0 1-.843 1.528c-.105.19-.332.595-.495.906l-.306.57h1.528c1.244 0 1.54-.017 1.587-.074a5.16 5.16 0 0 0 .29-.49 56.394 56.394 0 0 1 .368-.675c.611-1.09.97-1.739 1.323-2.398.226-.421.548-.995.717-1.275.173-.284.31-.527.31-.542 0-.016-.695-.027-1.549-.027h-1.554z" /></symbol>',t.insertBefore(e,t.lastChild)};var k=i;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()}const p={throttle:function(i,t){let e=0;return function(...a){const o=Date.now();o-e>=t&&(e=o,i.apply(this,a))}},debounce:function(i,t){let e;return function(...a){clearTimeout(e),e=setTimeout(()=>{i.apply(this,a)},t)}}};class L extends HTMLElement{constructor(){super(),this._handleResize=p.throttle(this._handleResize.bind(this),200),this._handleScroll=p.throttle(this._handleScroll.bind(this),300),this._updateActiveLink=this._updateActiveLink.bind(this),this._toggleMenu=this._toggleMenu.bind(this),this._closeMenu=this._closeMenu.bind(this),this._handleOutsideClick=this._handleOutsideClick.bind(this)}connectedCallback(){this.render(),this._addEventListeners(),this._updateActiveLink()}disconnectedCallback(){this._removeEventListeners()}render(){const t=this.getAttribute("logo-link")||"./",e=this.getAttribute("logo-svg-id"),a=this.getAttribute("logo-name")||"",o=JSON.parse(this.getAttribute("links")||"[]"),n=JSON.parse(this.getAttribute("button")||"{}");this.innerHTML=`
      <header class="header">
          <a href="${t}" class="logo" aria-label="Home">
              <svg aria-hidden="true">
                <use href="#${e}"></use>
              </svg>
              <span class="logo-name">${a}</span>
          </a>
          <nav class="main-nav">
            <button class="menu-toggle-button" aria-label="Open Menu">
              <svg class="icon enable-icon-scale" aria-hidden="true">
                <use href="#icon-bars"></use>
              </svg>
            </button>
            <div class="nav-menu glass-effect">
                <div class="nav-links">
                    ${o.map(c=>`
                      <a class="nav-link large" href="${c.href}" target="${c.target||"_self"}">${c.text}</a>
                    `).join("")}
                </div>
                <div class="nav-action">
                  <a href="${n.href}" target="${n.target||"_self"}" class="button button-action">${n.text}</a>
                </div>
            </div>
          </nav>
      </header>
    `,this.menuToggleButton=this.querySelector(".menu-toggle-button"),this.navLinks=this.querySelectorAll(".nav-link")}_addEventListeners(){this.menuToggleButton.addEventListener("click",this._toggleMenu),document.addEventListener("click",this._handleOutsideClick),window.addEventListener("resize",this._handleResize),window.addEventListener("scroll",this._handleScroll),window.addEventListener("hashchange",this._updateActiveLink),this.navLinks.forEach(t=>t.addEventListener("click",this._closeMenu))}_removeEventListeners(){this.menuToggleButton.removeEventListener("click",this._toggleMenu),document.removeEventListener("click",this._handleOutsideClick),window.removeEventListener("resize",this._handleResize),window.removeEventListener("scroll",this._handleScroll),window.removeEventListener("hashchange",this._updateActiveLink),this.navLinks.forEach(t=>t.removeEventListener("click",this._closeMenu))}_toggleMenu(){this.classList.toggle("is-menu-open")}_closeMenu(){this.classList.remove("is-menu-open")}_handleOutsideClick(t){this.contains(t.target)||this._closeMenu()}_handleResize(){this._closeMenu()}_handleScroll(){this._closeMenu()}_updateActiveLink(){const t=window.location.hash||"#";this.querySelectorAll(".nav-link").forEach(e=>{e.getAttribute("href")===t?e.classList.add("active"):e.classList.remove("active")})}}customElements.define("header-component",L);class b extends HTMLElement{connectedCallback(){const t=this.getAttribute("title")||"",e=this.getAttribute("sub-title")||"";this.innerHTML=`
      <style>
        .section-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          
          .subtitle {
            text-align: center;
          }

          .gra-separator {
            border-top-width: 2px;
            border-top-style: solid;
            width: 6rem;
            border-top-color: var(--accent-light-color);
          }
        }
      </style>
      <div class="section-header">
        <h1>${t}</h1>
        <p class="subtitle large">${e}</p>
        <div class="gra-separator"></div>
      </div>
    `}}customElements.define("section-header",b);async function y(i,t=3e3){const e=performance.now();for(;performance.now()-e<t;){const a=document.querySelector(i);if(a)return a;await new Promise(o=>setTimeout(o,50))}return null}async function v(){const i=window.location.hash.slice(2),[t,e]=i.split("?"),o=new URLSearchParams(e).get("section"),n=document.querySelector("main");switch(t){case"":await r(()=>import("./hero-D49bkCc2.js"),[]),n.innerHTML="<hero-component></hero-component>";const s=async()=>{await Promise.all([r(()=>import("./expertise-CtTgjsIj.js"),[]),r(()=>import("./about-DyJr2zb9.js"),[]),r(()=>import("./process-B6Q95cB5.js"),[]),r(()=>import("./contact-CGamQLAB.js"),[]),r(()=>import("./footer-BhH_q4-M.js"),[])]),n.insertAdjacentHTML("beforeend",`
          <expertise-component></expertise-component>
          <about-component></about-component>
          <working-process-component></working-process-component>
          <contact-component></contact-component>
          <footer-component copyright-name="Yulia Savinkova"></footer-component>
        `)};"requestIdleCallback"in window?requestIdleCallback(s):setTimeout(s,200);break;case"about":await Promise.all([r(()=>import("./about-DyJr2zb9.js"),[]),r(()=>import("./work-experience-JqKe5h0T.js"),[]),r(()=>import("./contact-CGamQLAB.js"),[]),r(()=>import("./footer-BhH_q4-M.js"),[])]),n.innerHTML=`
        <about-component></about-component>
        <work-experience-component></work-experience-component>
        <contact-component></contact-component>
        <footer-component copyright-name="Yulia Savinkova"></footer-component>
      `;break;case"work":await Promise.all([r(()=>import("./expertise-full-COslCNZd.js"),[]),r(()=>import("./contact-CGamQLAB.js"),[]),r(()=>import("./footer-BhH_q4-M.js"),[])]),n.innerHTML=`
        <expertise-full-component></expertise-full-component>
        <contact-component></contact-component>
        <footer-component copyright-name="Yulia Savinkova"></footer-component>
      `;break;case"palette":await Promise.all([r(()=>import("./palette-DoE2HHcF.js"),[]),r(()=>import("./footer-BhH_q4-M.js"),[])]),n.innerHTML=`
        <palette-component></palette-component>
        <footer-component copyright-name="Yulia Savinkova"></footer-component>
      `;break;case"contact":await Promise.all([r(()=>import("./contact-CGamQLAB.js"),[]),r(()=>import("./footer-BhH_q4-M.js"),[])]),n.innerHTML=`
        <contact-component></contact-component>
        <footer-component copyright-name="Yulia Savinkova"></footer-component>
      `;break;default:await Promise.all([r(()=>import("./404-CCsRiY0Q.js"),[]),r(()=>import("./footer-BhH_q4-M.js"),[])]),n.innerHTML=`
        <error-component></error-component>
        <footer-component copyright-name="Yulia Savinkova"></footer-component>
      `}if(o){const s=`#${CSS.escape(o)}`,h=await y(s);h?h.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else window.scrollTo({top:0,behavior:"smooth"});const c=()=>{r(()=>import("./progress-soGndZc3.js"),[]),window.removeEventListener("scroll",c)};window.addEventListener("scroll",c,{once:!0})}document.addEventListener("DOMContentLoaded",()=>{v(),window.addEventListener("hashchange",v)});document.body.addEventListener("click",i=>{const t=i.target.closest("a[href]");t&&t.getAttribute("href").startsWith("#/")&&(i.preventDefault(),window.location.hash=t.getAttribute("href").slice(1))});
