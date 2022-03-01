// import setActive from './activate.js';

export default class Accordion {
  constructor(list, options) {
    if (options === undefined) {
      this.options = {
        startOpened: false,
      };
    } else {
      this.options = options;
    }

    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'is-active';
  }

  toggleAccordion(accordionItem) {
    accordionItem.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((accordionItem) => {
      accordionItem.addEventListener('click', () => this.toggleAccordion(accordionItem));
    });
  }

  init() {
    if (this.accordionList.length) {
      if (this.options.startOpened) this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
