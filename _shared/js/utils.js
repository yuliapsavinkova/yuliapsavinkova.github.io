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
};

// Usage examples
//   window.addEventListener(
//     'resize',
//     Utils.throttle(() => {
//       console.log('Throttled resize event');
//     }, 200)
//   );

//   const inputField = document.getElementById('input');
//   inputField.addEventListener(
//     'input',
//     Utils.debounce((e) => {
//       console.log('Debounced input:', e.target.value);
//     }, 300)
//   );
