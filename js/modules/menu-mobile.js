import outsideClick from './outsideclick.js';

export default function menuMobile() {
  const userEvents = ['click', 'touchstart'];
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu() {
    menuList.classList.add('is-active');
    menuButton.classList.add('is-active');

    outsideClick(menuList, userEvents, () => {
      menuList.classList.remove('is-active');
      menuButton.classList.remove('is-active');
    });
  }

  if (menuButton) {
    userEvents.forEach((userEvent) => menuButton.addEventListener(userEvent, openMenu));
  }
}
