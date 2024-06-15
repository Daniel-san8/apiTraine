const bitApi = fetch("https://blockchain.info/ticker");
let valorBitCoin = "";

console.log(bitApi);

bitApi
  .then((response) => {
    return response.json();
  })
  .then((r) => {
    console.log(r);
    valorBitCoin = r;
  });

console.log(valorBitCoin);
