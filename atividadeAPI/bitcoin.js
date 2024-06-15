setInterval(() => {
  fetch("https://blockchain.info/ticker")
    .then((response) => {
      return response.json();
    })
    .then((r) => {
      let formatacao = r.BRL.buy;

      let bitcoinReal = formatacao.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

      document.body.innerText = `este é o atual valor do bitcoin: ${bitcoinReal}`;
    });
}, 30000);
