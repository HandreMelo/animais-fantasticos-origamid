export default class OpeningHours {
  constructor(opening, activeClass) {
    this.opening = document.querySelector(opening);
    this.activeClass = activeClass;
  }

  openingData() {
    this.weekDays = this.opening.dataset.semana.split(',').map(Number);
    this.weekTime = this.opening.dataset.horario.split(',').map(Number);
  }

  nowData() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const semanaAberto = this.weekDays.indexOf(this.dayNow) !== -1;
    const horarioAberto = (this.timeNow >= this.weekTime[0]
      && this.timeNow < this.weekTime[1]);
    return semanaAberto && horarioAberto;
  }

  activateIsOpen() {
    if (this.isOpen()) {
      this.opening.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.opening) {
      this.openingData();
      this.nowData();
      this.activateIsOpen();
    }
    return this;
  }
}
