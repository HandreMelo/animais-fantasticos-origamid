export default function tabNavActive() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');

  function setActive(index) {
    const dataAnimate = tabcontent[index].dataset.animate;
    tabcontent.forEach((item) => item.classList.remove('is-active'));
    tabcontent[index].classList.add('is-active', dataAnimate);
  }

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add('is-active');

    tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => setActive(index));
    });
  }
}
