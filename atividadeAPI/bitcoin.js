setInterval(() => {
  fetch("https://blockchain.info/ticker")
    .then((response) => {
      return response.json();
    })
    .then((r) => {
      return r.BRL.buy;
    })
    .then((r) => {
      document.body.innerText = `este é o atual valor do bitcoin: ${r}`;
    });
}, 3000);
