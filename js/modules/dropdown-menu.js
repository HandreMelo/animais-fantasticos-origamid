import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, userEvents = ['touchstart', 'click']) {
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.userEvents = userEvents;
    this.activeClass = 'is-active';
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.userEvents, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.userEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) this.addDropdownMenusEvent();
    return this;
  }
}
