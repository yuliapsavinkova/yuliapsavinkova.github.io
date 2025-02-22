import "../shared/js/utils.js";
import "../shared/components/header/header.js";
import "../shared/components/footer/footer.js";
import "../shared/components/social-icons.js";
import "../shared/components/progress/progress.js";

window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  document.querySelector(".layer1").style.transform = `translateY(${scrollY * 0.3}px)`;
  document.querySelector(".layer2").style.transform = `translateY(${scrollY * 0.5}px)`;
  document.querySelector(".layer3").style.transform = `translateY(${scrollY * 0.7}px)`;
});

// document.addEventListener("DOMContentLoaded", function () {
//   if (typeof gsap !== "undefined") {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to(".layer1", { y: "-50%", scrollTrigger: { scrub: true } });
//     gsap.to(".layer2", { y: "-30%", scrollTrigger: { scrub: true } });
//     gsap.to(".layer3", { y: "-20%", scrollTrigger: { scrub: true } });

//     console.log("GSAP initialized successfully!");
//   } else {
//     console.error("GSAP failed to load!");
//   }
// });
