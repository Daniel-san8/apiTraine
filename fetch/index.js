const doc = fetch("./dox.txt");

console.log(doc);

doc
  .then((r) => {
    return r.text();
  })
  .then((r) => {
    // document.body.innerHTML = r;
  });

const apiFetch = fetch("https://viacep.com.br/ws/40350000/json/");

apiFetch
  .then((r) => {
    return r.json();
  })
  .then((r) => {
    document.body.innerText += r.uf;
  });
