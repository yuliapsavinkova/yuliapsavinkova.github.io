class SocialIcons extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <a href="https://github.com/yuliapsavinkova" target="_blank" class="link-icon"><i class="fab fa-github fa-xl"></i></a>
            <a href="https://www.linkedin.com/in/juliia/" target="_blank" class="link-icon"><i class="fab fa-linkedin fa-xl"></i></a>
            <a href="https://codepen.io/star5/pens/public" target="_blank" class="link-icon"><i class="fab fa-codepen fa-xl"></i></a>
            <a href="#" target="_blank" class="link-icon"><i class="fa-solid fa-blog fa-xl"></i></a>
        `;
    }
}
customElements.define('social-icons', SocialIcons);
