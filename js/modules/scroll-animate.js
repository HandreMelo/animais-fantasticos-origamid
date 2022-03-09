import debounce from './debounce.js';

export default class ScrollAnimate {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindowHeight = window.innerHeight * 0.6;
    this.checkInitialDistance = this.checkInitialDistance.bind(this);

    this.checkInitialDistance = debounce(this.checkInitialDistance.bind(this));
  }

  static toggleClassActive(condition, object) {
    if (condition) object.classList.add('is-active');
    else if (object.classList.contains('is-active'));
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const { offsetTop } = section; // quando a variável tem o mesmo nome do atributo
      return {
        element: section,
        offsetTop: Math.floor(offsetTop - this.halfWindowHeight),
      };
    });
  }

  checkInitialDistance() {
    this.distance.forEach((item) => {
      this.constructor.toggleClassActive(window.pageYOffset > item.offsetTop, item.element);
    });
  }

  checkDistance() {
    if (this.sections) {
      this.sections.forEach((section) => {
        const sectionPosition = (section.getBoundingClientRect().top - this.halfWindowHeight) < 0;
        this.constructor.toggleClassActive(sectionPosition, section);
      });
    }
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkInitialDistance();
      window.addEventListener('scroll', this.checkInitialDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkInitialDistance);
  }
}
