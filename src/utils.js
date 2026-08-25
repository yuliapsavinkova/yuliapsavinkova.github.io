export const Utils = {
  throttle: function (func, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  },

  debounce: function (func, delay) {
    let timerId;
    return function (...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  },

  initScrollReveals: function (root = document) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const targets = root.querySelectorAll(
      '.feature-card, .card, .work-experience-content, .section-header, .about-me, .working-process-content'
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    targets.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  },
};
