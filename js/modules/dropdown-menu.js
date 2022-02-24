import outsideClick from './outsideclick.js';

function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const userEvents = ['touchstart', 'click'];

  function handleEvent(event) {
    event.preventDefault();
    this.classList.add('is-active');
    outsideClick(this, userEvents, () => {
      this.classList.remove('is-active');
    });
  }

  dropdownMenus.forEach((menu) => {
    userEvents.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleEvent);
    });
  });

  // outsideClick();
}

export default initDropdownMenu;
