import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, userEvents = ['click', 'touchstart']) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.userEvents = userEvents;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.toggle('is-active');
    this.menuButton.classList.toggle('is-active');

    outsideClick(this.menuList, this.userEvents, () => {
      this.menuList.classList.remove('is-active');
      this.menuButton.classList.remove('is-active');
    });
  }

  addMenuButtonEvent() {
    if (this.menuButton) {
      this.userEvents.forEach((userEvent) => {
        this.menuButton.addEventListener(userEvent, this.openMenu);
      });
    }
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuButtonEvent();
    }
  }
}
