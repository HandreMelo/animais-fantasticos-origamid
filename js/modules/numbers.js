export default class NumbersAnimate {
  constructor(numbers, observerClass, observerTarget) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    this.handleObserver = this.handleObserver.bind(this);
  }
  // static pois não utiliza argumentos do construtor da classe.

  static numberIncrement(number) {
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
  }

  animate() {
    // como a função static não faz parte do objeto da classe, não é possível acessá-la
    // diretamente com this.numberIncrement, somente através do constructor da classe.

    this.numbers.forEach((number) => this.constructor.numberIncrement(number));
  }

  handleObserver(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animate();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleObserver);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers && this.observerTarget) this.addMutationObserver();
    return this;
  }
}
