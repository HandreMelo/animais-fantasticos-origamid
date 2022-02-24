export default function scrollAnimate() {
  const sections = document.querySelectorAll('[data-animate="scroll"]');
  const halfWindowHeight = window.innerHeight * 0.6;

  function addClassActive() {
    if (sections) {
      sections.forEach((section) => {
        const sectionPosition = (section.getBoundingClientRect().top - halfWindowHeight) < 0;
        if (sectionPosition) section.classList.add('is-active');
      });
    }
  }

  window.addEventListener('scroll', addClassActive);
}
