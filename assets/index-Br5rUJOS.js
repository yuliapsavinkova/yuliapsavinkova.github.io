(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const w="modulepreload",b=function(i){return"/"+i},p={},r=function(t,e,l){let o=Promise.resolve();if(e&&e.length>0){let c=function(a){return Promise.all(a.map(u=>Promise.resolve(u).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),h=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=c(e.map(a=>{if(a=b(a),a in p)return;p[a]=!0;const u=a.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${m}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":w,u||(d.as="script"),d.crossOrigin="",d.href=a,h&&d.setAttribute("nonce",h),document.head.appendChild(d),u)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function n(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return o.then(c=>{for(const s of c||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})};if(typeof window<"u"){let i=function(){var t=document.body,e=document.getElementById("__svg__icons__dom__");e||(e=document.createElementNS("http://www.w3.org/2000/svg","svg"),e.style.position="absolute",e.style.width="0",e.style.height="0",e.id="__svg__icons__dom__",e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),e.innerHTML='<symbol  viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" id="icon-arrow-right"><path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm0 1.5A8.239 8.239 0 0 1 20.25 12 8.239 8.239 0 0 1 12 20.25 8.239 8.239 0 0 1 3.75 12 8.239 8.239 0 0 1 12 3.75Zm.75 4.5a.75.75 0 0 0-.531.219.75.75 0 0 0 0 1.062l1.719 1.719H8.25a.75.75 0 0 0-.75.75.75.75 0 0 0 .75.75h5.688l-1.72 1.719a.75.75 0 0 0 0 1.062.75.75 0 0 0 1.063 0l3-3A.75.75 0 0 0 16.5 12a.75.75 0 0 0-.219-.531l-3-3a.75.75 0 0 0-.531-.219Z" style="baseline-shift:baseline;display:inline;overflow:visible;vector-effect:none;stroke-linecap:round;stroke-linejoin:round;enable-background:accumulate;stop-color:#000;stop-opacity:1;opacity:1" /></symbol><symbol  viewBox="0 0 24 24" id="icon-bars"><path fill="currentColor" d="M0 3.429c0-.949.766-1.715 1.714-1.715h20.572c.948 0 1.714.766 1.714 1.715 0 .948-.766 1.714-1.714 1.714H1.714A1.712 1.712 0 0 1 0 3.429ZM0 12c0-.948.766-1.714 1.714-1.714h20.572c.948 0 1.714.766 1.714 1.714s-.766 1.714-1.714 1.714H1.714A1.712 1.712 0 0 1 0 12Zm24 8.571c0 .949-.766 1.715-1.714 1.715H1.714A1.712 1.712 0 0 1 0 20.57c0-.948.766-1.714 1.714-1.714h20.572c.948 0 1.714.766 1.714 1.714z" /></symbol><symbol  viewBox="0 0 100 100" id="icon-custom-ys-logo-optimized"><path fill="currentColor" d="M22.729 27.254c1.913 3.968 4.275 8.904 5.243 10.983 4.417 9.565 6.094 11.856 14.242 19.461 3.283 3.07 4.63 4.937 5.598 7.7.59 1.724.637 2.173.637 5.314 0 3.118-.07 3.59-.66 5.314-.355 1.04-.804 2.126-.993 2.41l-.33.542h14.643V72.98c0-3.306-.118-6.825-.26-7.841-.543-3.92-2.315-8.384-4.487-11.36-1.252-1.7-3.402-3.85-6.472-6.472-4.676-4.015-6.896-7.014-10.014-13.486-1.016-2.125-3.637-7.463-5.787-11.88-2.172-4.416-5.455-11.077-7.274-14.832L23.469.314l-6.81.015C12.927.338 9.816.291 9.822.314c4.246 9.022 8.567 17.96 12.907 26.94" /><path fill="currentColor" d="M52.516.317s-.805.332-2.85 3.27c-2.372 3.43-4.088 7.682-4.652 11.606-.352 2.373-.37 6.28.03 8.511 1.128 6.415 5.075 12.641 10.361 16.377 2.139 1.527 4.37 2.631 8.576 4.276 5.522 2.185 8.341 4.23 10.668 7.754 2.232 3.383 3.195 6.555 3.195 10.62 0 9.116-5.075 17.387-13.299 21.64-7.095 3.665-16.306 3.853-23.449.47-6.625-3.15-11.16-8.107-14.074-15.39l-.399-.987h-6.461c-5.545 0-6.462.047-6.462.352 0 .682 2.397 7.096 3.525 9.446 5.498 11.372 16.376 19.313 28.9 21.099 2.913.4 8.411.446 11.395.094 2.867-.353 7.777-1.621 10.315-2.702 2.35-.987 6.954-3.666 8.717-5.099 2.02-1.621 5.098-4.934 6.743-7.237 1.903-2.631 4.394-7.518 5.334-10.432 1.362-4.158 2.033-8.95 1.785-12.687-.551-8.317-4.038-16.192-9.469-21.311-3.568-3.363-6.555-5.169-11.56-7.002-3.783-1.386-5.643-2.415-7.589-4.23-2.918-2.72-4.32-5.754-4.558-9.867-.09-1.574.05-2.377.3-3.577.385-1.855 2.194-5.892 3.454-7.707 2.372-3.42 5.806-5.588 9.498-7.254z" /><path fill="currentColor" d="M76.27 2.775a684 684 0 0 0-4.197 7.609c-1.465 2.711-3.04 5.553-3.499 6.34-.437.788-1.377 2.471-2.055 3.761l-1.268 2.362h6.34c5.16 0 6.385-.066 6.582-.306.153-.175.678-1.072 1.203-2.034a234 234 0 0 1 1.53-2.798c2.536-4.526 4.023-7.216 5.488-9.949.94-1.75 2.274-4.132 2.974-5.291.721-1.18 1.29-2.187 1.29-2.252 0-.066-2.886-.11-6.428-.11h-6.45z" /></symbol><symbol  viewBox="0 0 100 100" id="icon-custom-ys-logo-test"><path fill="currentColor" d="M22.729 27.254c1.913 3.968 4.275 8.904 5.243 10.983 4.417 9.565 6.094 11.856 14.242 19.461 3.283 3.07 4.63 4.937 5.598 7.7.59 1.724.637 2.173.637 5.314 0 3.118-.07 3.59-.66 5.314-.355 1.04-.804 2.126-.993 2.41l-.33.542h14.643V72.98c0-3.306-.118-6.825-.26-7.841-.543-3.92-2.315-8.384-4.487-11.36-1.252-1.7-3.402-3.85-6.472-6.472-4.676-4.015-6.896-7.014-10.014-13.486-1.016-2.125-3.637-7.463-5.787-11.88-2.172-4.416-5.455-11.077-7.274-14.832L23.469.314l-6.81.015C12.927.338 9.816.291 9.822.314c4.246 9.022 8.567 17.96 12.907 26.94" /><path fill="currentColor" d="M52.516.317s-.805.332-2.85 3.27c-2.372 3.43-4.088 7.682-4.652 11.606-.352 2.373-.37 6.28.03 8.511 1.128 6.415 5.075 12.641 10.361 16.377 2.139 1.527 4.37 2.631 8.576 4.276 5.522 2.185 8.341 4.23 10.668 7.754 2.232 3.383 3.195 6.555 3.195 10.62 0 9.116-5.075 17.387-13.299 21.64-7.095 3.665-16.306 3.853-23.449.47-6.625-3.15-11.16-8.107-14.074-15.39l-.399-.987h-6.461c-5.545 0-6.462.047-6.462.352 0 .682 2.397 7.096 3.525 9.446 5.498 11.372 16.376 19.313 28.9 21.099 2.913.4 8.411.446 11.395.094 2.867-.353 7.777-1.621 10.315-2.702 2.35-.987 6.954-3.666 8.717-5.099 2.02-1.621 5.098-4.934 6.743-7.237 1.903-2.631 4.394-7.518 5.334-10.432 1.362-4.158 2.033-8.95 1.785-12.687-.551-8.317-4.038-16.192-9.469-21.311-3.568-3.363-6.555-5.169-11.56-7.002-3.783-1.386-5.643-2.415-7.589-4.23-2.918-2.72-4.32-5.754-4.558-9.867-.09-1.574.05-2.377.3-3.577.385-1.855 2.194-5.892 3.454-7.707 2.372-3.42 5.806-5.588 9.498-7.254z" /><path fill="currentColor" d="M76.27 2.775a684 684 0 0 0-4.197 7.609c-1.465 2.711-3.04 5.553-3.499 6.34-.437.788-1.377 2.471-2.055 3.761l-1.268 2.362h6.34c5.16 0 6.385-.066 6.582-.306.153-.175.678-1.072 1.203-2.034a234 234 0 0 1 1.53-2.798c2.536-4.526 4.023-7.216 5.488-9.949.94-1.75 2.274-4.132 2.974-5.291.721-1.18 1.29-2.187 1.29-2.252 0-.066-2.886-.11-6.428-.11h-6.45z" /></symbol>',t.insertBefore(e,t.lastChild)};var k=i;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()}const _={throttle:function(i,t){let e=0;return function(...l){const o=Date.now();o-e>=t&&(e=o,i.apply(this,l))}},debounce:function(i,t){let e;return function(...l){clearTimeout(e),e=setTimeout(()=>{i.apply(this,l)},t)}}};class E extends HTMLElement{constructor(){super(),this._handleResize=_.throttle(this._handleResize.bind(this),200),this._handleScroll=_.throttle(this._handleScroll.bind(this),300),this._updateActiveLink=this._updateActiveLink.bind(this),this._toggleMenu=this._toggleMenu.bind(this),this._closeMenu=this._closeMenu.bind(this),this._handleOutsideClick=this._handleOutsideClick.bind(this)}connectedCallback(){this.render(),this._addEventListeners(),this._updateActiveLink()}disconnectedCallback(){this._removeEventListeners()}render(){const t=this.getAttribute("logo-link")||"./",e=this.getAttribute("logo-svg-id"),l=this.getAttribute("logo-name")||"",o=JSON.parse(this.getAttribute("links")||"[]"),n=JSON.parse(this.getAttribute("button")||"{}");this.innerHTML=`
      <header class="header">
          <a href="${t}" class="logo" aria-label="Home">
              <svg aria-hidden="true">
                <use href="#${e}"></use>
              </svg>
              <span class="logo-name">${l}</span>
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
    `,this.menuToggleButton=this.querySelector(".menu-toggle-button"),this.navLinks=this.querySelectorAll(".nav-link")}_addEventListeners(){this.menuToggleButton.addEventListener("click",this._toggleMenu),document.addEventListener("click",this._handleOutsideClick),window.addEventListener("resize",this._handleResize),window.addEventListener("scroll",this._handleScroll),window.addEventListener("hashchange",this._updateActiveLink),this.navLinks.forEach(t=>t.addEventListener("click",this._closeMenu))}_removeEventListeners(){this.menuToggleButton.removeEventListener("click",this._toggleMenu),document.removeEventListener("click",this._handleOutsideClick),window.removeEventListener("resize",this._handleResize),window.removeEventListener("scroll",this._handleScroll),window.removeEventListener("hashchange",this._updateActiveLink),this.navLinks.forEach(t=>t.removeEventListener("click",this._closeMenu))}_toggleMenu(){this.classList.toggle("is-menu-open")}_closeMenu(){this.classList.remove("is-menu-open")}_handleOutsideClick(t){this.contains(t.target)||this._closeMenu()}_handleResize(){this._closeMenu()}_handleScroll(){this._closeMenu()}_updateActiveLink(){const t=window.location.hash||"#";this.querySelectorAll(".nav-link").forEach(e=>{e.getAttribute("href")===t?e.classList.add("active"):e.classList.remove("active")})}}customElements.define("header-component",E);class L extends HTMLElement{connectedCallback(){const t=this.getAttribute("title")||"",e=this.getAttribute("sub-title")||"";this.innerHTML=`
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
    `}}customElements.define("section-header",L);async function y(i,t=3e3){const e=performance.now();for(;performance.now()-e<t;){const l=document.querySelector(i);if(l)return l;await new Promise(o=>setTimeout(o,50))}return null}async function v(){const i=window.location.hash.slice(2),[t,e]=i.split("?"),o=new URLSearchParams(e).get("section"),n=document.querySelector("main");switch(t){case"":await r(()=>import("./hero-D49bkCc2.js"),[]),n.innerHTML="<hero-component></hero-component>";const s=async()=>{await Promise.all([r(()=>import("./expertise-CtTgjsIj.js"),[]),r(()=>import("./about-DyJr2zb9.js"),[]),r(()=>import("./process-B6Q95cB5.js"),[]),r(()=>import("./contact-CGamQLAB.js"),[]),r(()=>import("./footer-BhH_q4-M.js"),[])]),n.insertAdjacentHTML("beforeend",`
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
