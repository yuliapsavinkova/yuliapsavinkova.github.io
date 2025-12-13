class e extends HTMLElement{connectedCallback(){this.innerHTML=`
      <style>
        .working-process {
          background: linear-gradient(var(--color-overlay), var(--color-overlay)),
            url('../../images/working-girl-480.webp');
            
          background-size: cover;
          background-repeat: no-repeat;
          /* Default to SCROLL for optimal mobile performance */
          background-attachment: scroll; 
          background-position: center center;
          
          height: 30rem;
          width: auto;

          * {
            color: var(--white);
          }
        }
          
        /* min-width: var(--breakpoint-xl) */
        @media (min-width: 1200px) {
          .working-process {
            background-image: linear-gradient(var(--color-overlay), var(--color-overlay)),
              url('../../images/working-girl-768.webp');
            /* Enable the parallax effect for tablets, laptops, and desktops */
            background-attachment: fixed;
          }
        }

        /* Laptop size and up (Min-width: 1280px) */
        @media (min-width: 1280px) {
          .working-process {
            background-image: linear-gradient(var(--color-overlay), var(--color-overlay)),
              url('../../images/working-girl-1280.webp');
          }
        }

        /* Large desktop size and up (Min-width: 1920px) */
        @media (min-width: 1920px) {
          .working-process {
            background-image: linear-gradient(var(--color-overlay), var(--color-overlay)),
              url('../../images/working-girl-1920.webp');
          }
        }
        
        /* Ultra-wide Screen Height Fix */
        @media (min-width: 2560px) {
          .working-process {
            height: 40rem; 
          }
        }
      </style>
      <section id="working-process" class="working-process">
        <section-header
          title="Working Process"
          sub-title="Collaborate, Design, Code, and Optimize for Fast, Responsive Web Experiences.">
        </section-header>
      </section>
    `}}customElements.define("working-process-component",e);
