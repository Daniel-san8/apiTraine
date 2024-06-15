const botao = document.querySelector("[data-botao]");
botao.addEventListener("click", (e) => {
  e.preventDefault();
  inputCep = document.querySelector("[data-cep]").value;
  let cepApi = fetch(`https://viacep.com.br/ws/${inputCep}/json/`);
  cepApi
    .then((r) => {
      return r.text();
    })
    .then((r) => {
      let divZada = document.createElement("div");
      divZada.innerHTML = r;
      document.body.appendChild(divZada);
    });
});
