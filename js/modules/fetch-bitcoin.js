export default function initFetchBitcoin() {
  const url = 'https://blockchain.info/ticker';
  /* Com async/await
  try {
    async function fetchBitcoin() {
      const priceResponse = await fetch(url);
      const priceJSON = await priceResponse.json();
      document.querySelector('.btc-preco').innerText = (100 / priceJSON.BRL['15m']).toFixed(4);
    }
  }
  catch(error) {
    console.log(error);
  }
  */

  fetch(url).then((response) => response.json())
    .then((priceJSON) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (100 / priceJSON.BRL['15m']).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
