export default class Modal {
  constructor(openBtn, closeBtn, modalContainer) {
    this.openBtn = document.querySelector(openBtn);
    this.closeBtn = document.querySelector(closeBtn);
    this.modalContainer = document.querySelector(modalContainer);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle('is-active');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  outsideClick(event) {
    event.preventDefault();
    if (event.target === this.modalContainer) this.toggleModal();
  }

  addModalEvent() {
    this.openBtn.addEventListener('click', this.eventToggleModal);
    this.closeBtn.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.outsideClick);
  }

  init() {
    if (this.openBtn && this.closeBtn && this.modalContainer) {
      this.addModalEvent();
    }
  }
}
