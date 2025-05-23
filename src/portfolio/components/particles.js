export const particlesConfig = {
  particles: {
    number: { value: 5, density: { enable: true, value_area: 800 } },
    color: { value: "#e2ebf6" },
    shape: {
      type: "polygon",
      stroke: { width: 0, color: "#000" },
      polygon: { nb_sides: 10 },
      // image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: true,
      // anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 150,
      random: false,
      anim: { enable: true, speed: 20, size_min: 50, sync: false },
    },
    // line_linked: {
    //   enable: false,
    //   distance: 200,
    //   color: "#ffffff",
    //   opacity: 1,
    //   width: 2,
    // },
    move: {
      enable: true,
      speed: 10,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  // interactivity: {
  //   detect_on: "canvas",
  //   events: {
  //     onhover: { enable: false, mode: "grab" },
  //     onclick: { enable: false, mode: "push" },
  //     resize: true,
  //   },
  //   modes: {
  //     grab: { distance: 400, line_linked: { opacity: 1 } },
  //     bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
  //     repulse: { distance: 200, duration: 0.4 },
  //     push: { particles_nb: 4 },
  //     remove: { particles_nb: 2 },
  //   },
  // },
  retina_detect: true,
};
