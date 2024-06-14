const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário logado");
  });
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  });
});
