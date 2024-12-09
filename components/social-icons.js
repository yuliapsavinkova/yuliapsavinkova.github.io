class SocialIcons extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
            .social-icons {
                display: flex;
                width: fit-content;
                gap: 1.5rem;
            }
            </style>
            <div class="social-icons">
                <a href="https://github.com/yuliapsavinkova" target="_blank"><i class="fab fa-github fa-xl"></i></a>
                <a href="https://www.linkedin.com/in/juliia" target="_blank"><i class="fab fa-linkedin fa-xl"></i></a>
                <a href="https://codepen.io/star5/pens/public" target="_blank"><i class="fab fa-codepen fa-xl"></i></a>
                <a href="https://codepen.io/star5/pens/public" target="_blank"><i class="fa-solid fa-blog fa-xl"></i></a>
            </div>
        `;
    }
}
customElements.define('social-icons', SocialIcons);
