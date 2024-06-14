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
