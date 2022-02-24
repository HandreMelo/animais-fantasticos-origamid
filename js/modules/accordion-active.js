import setActive from './activate.js';

export default function accordionActive() {
  const accordionList = document.querySelectorAll('[data-animate="accordion"] dt');

  accordionList.forEach((accordionItem) => {
    accordionItem.addEventListener('click', setActive);
  });
}
