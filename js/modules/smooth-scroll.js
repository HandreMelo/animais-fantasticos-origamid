export default function smoothScroll() {
  function scrollToArea(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }

  const iLinks = document.querySelectorAll('a[href^="#"]');
  iLinks.forEach((link) => {
    link.addEventListener('click', scrollToArea);
  });
}
