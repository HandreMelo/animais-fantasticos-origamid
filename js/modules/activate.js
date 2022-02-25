export default function setActive(event) {
  if (typeof (event) === Event) event.preventDefault(event);
  this.classList.toggle('is-active');
}
