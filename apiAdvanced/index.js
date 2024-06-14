const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  }, 500);
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolve) => {
  console.log(resolve);
});

const carregouTudoRace = Promise.race([login, dados]);

carregouTudoRace.then((res) => {
  console.log(res);
});
