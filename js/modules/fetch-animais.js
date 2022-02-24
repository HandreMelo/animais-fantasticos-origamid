import numbersAnimate from './numbers.js';

function createAnimal(animal) {
  const div = document.createElement('div');
  div.classList.add('number-animal');
  div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
  return div;
}

export default function iniFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numbers-grid');
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      numbersAnimate();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimais('../../animaisapi.json');
}
