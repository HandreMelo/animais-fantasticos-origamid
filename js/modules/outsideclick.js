export default function outsideClick(element, events, callback) {
  const html = document.documentElement;

  function hadleOutsideClick(event) {
    if (!element.contains(event.target)) {
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, hadleOutsideClick);
      });
      callback();
    }
  }

  if (element.classList.contains('is-active')) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, hadleOutsideClick));
    });
  }
}
