const promessa = new Promise((resolve, error) => {
  let condition = false;
  if (condition) {
    setTimeout(() => {
      resolve({
        nome: "Daniel San",
        idade: 21,
        Namorando: true,
      });
    }, 1000);
  } else {
    error(Error("erro total"));
  }
});

const retorno = promessa
  .then((r) => {
    r.curso = "Análise e desenvolvimento de Sistemas";
    r.semestre = 3;
    return r;
  })
  .then((r) => {
    console.log(r);
  })
  .catch((reject) => {
    console.log(reject);
  })
  .finally(() => console.log("promise terminada"));

console.log(retorno);

localStorage.daniel = "Daniel San";

fetch("https://pokeapi.co/api/v2/pokemon/1/")
  .then((r) => {
    return r.json();
  })
  .then((r) => {});

const url = "https://jsonplaceholder.typicode.com/posts/2";
const options = {
  method: "HEAD",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url, options).then((r) => {
  console.log(r.headers.get("Content-type"));
});
