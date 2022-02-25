export default class TabNav {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu);
    this.tabcontent = document.querySelectorAll(content);
    this.activeClass = 'is-active';
  }

  setActive(index) {
    const dataAnimate = this.tabcontent[index].dataset.animate;
    this.tabcontent.forEach((item) => item.classList.remove(this.activeClass));
    this.tabcontent[index].classList.add(this.activeClass, dataAnimate);
  }

  addTabNavEvent() {
    this.setActive(0);
    this.tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => this.setActive(index));
    });
  }

  init() {
    if (this.tabmenu.length && this.tabcontent.length) this.addTabNavEvent();
  }
}
