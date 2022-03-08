import NumbersAnimate from './numbers.js';

function createAnimal(animal) {
  const div = document.createElement('div');
  div.classList.add('number-animal');
  div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
  return div;
}

function fillWithAnimals(animal, numerosGrid) {
  const divAnimal = createAnimal(animal);
  numerosGrid.appendChild(divAnimal);
}

function animateNumbers() {
  const numbersAnimate = new NumbersAnimate('[data-number]', 'is-active', '.numbers');
  numbersAnimate.init();
}

export default function fetchAnimais(url, target) {
  async function createAnimals() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(target);
      animaisJSON.forEach((animal) => fillWithAnimals(animal, numerosGrid));
      animateNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  return createAnimals();
}
