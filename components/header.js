const header = document.getElementById('dynamicHeader');

const largeScreenTemplate = `
    <a href="#" class="logo">
        <img src="assets/images/logo-colored.svg" class="logo-image" alt="logo-image"/>
    </a>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#">Blog</a></li>
    </ul>
    <a href="#stay-in-touch" class="button nav-btn">Contact Me</a>
`;

const smallScreenTemplate = `
    <a href="#" class="logo">
        <img src="assets/images/logo-colored.svg" class="logo-image" alt="logo-image"/>
    </a>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#stay-in-touch">Contact</a></li>
    </ul>
    <div id="hamburger" class="hamburger">
        <i class="fa-solid fa-bars fa-2x hamburger-bars"></i>
        <i class="fa-solid fa-xmark fa-2x hamburger-x"></i>
    </div>
`;

function handleMediaQueryChange(event) {
    if (event.matches) {
        // Small screen
        header.innerHTML = smallScreenTemplate;
        header.classList.add('mobile');
        header.classList.remove('active');

        const menuButton = document.getElementById('hamburger');
        if (menuButton) {
            menuButton.addEventListener('click', () => {
                header.classList.toggle('active');
            });
        }
    } else {
        // Large screen
        header.innerHTML = largeScreenTemplate;
        header.classList.remove('mobile');
    }
}

// Media query definition
const mediaQuery = window.matchMedia('(max-width: 768px)');

// Initial check and listener setup
handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener('change', handleMediaQueryChange);

window.addEventListener("scroll", () => {
    header.classList.remove('active');
});

// Sticky header appears when scrolled further viewport size
const viewportHeight = window.innerHeight;
window.onscroll = function() {
    if (window.scrollY > viewportHeight) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};
