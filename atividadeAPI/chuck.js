const api = fetch("https://api.chucknorris.io/jokes/random");

api
  .then((r) => {
    return r.json();
  })
  .then((r) => {
    document.body.innerText = `saca só essa piada do chuck norris: ${r.value}`;
  });
