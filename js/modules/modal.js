function modal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"');
  const botaoFechar = document.querySelector('[data-modal="fechar"');
  const modalContainer = document.querySelector('[data-modal="container"');

  function setActive(event) {
    event.preventDefault();
    modalContainer.classList.toggle('is-active');
  }

  if (!(botaoAbrir && botaoFechar && modalContainer)) return false;

  function cliqueForaModal(event) {
    event.preventDefault();
    if (event.target === this) setActive(event);
  }

  botaoAbrir.addEventListener('click', setActive);
  botaoFechar.addEventListener('click', setActive);
  modalContainer.addEventListener('click', cliqueForaModal);
  return this;
}
export default modal;
