async function puxarDados() {
  const responseDados = await fetch("./dados.json");
  const jsonDados = await responseDados.json();
  console.log(jsonDados);
}

puxarDados();
