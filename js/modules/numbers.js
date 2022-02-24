export default function numbersAnimate() {
  const numbers = document.querySelectorAll('[data-number]');
  function animate() {
    numbers.forEach((number) => {
      const total = +number.innerText;
      const increment = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        if (total < start) {
          start = total;
          clearInterval(timer);
        }
        number.innerText = start;
        start += increment;
      }, 30);
    });
  }

  let observer;

  function handleObserver(mutation) {
    if (mutation[0].target.classList.contains('is-active')) {
      observer.disconnect();
      animate();
    }
  }

  const observerTarget = document.querySelector('.numbers');

  observer = new MutationObserver(handleObserver);
  observer.observe(observerTarget, { attributes: true });
}
