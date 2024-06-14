const doc = fetch("./dox.txt");

console.log(doc);

doc
  .then((r) => {
    return r.text();
  })
  .then((r) => {
    document.body.innerHTML = r;
    console.log(r);
  });
