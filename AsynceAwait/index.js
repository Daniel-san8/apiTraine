async function puxarDados() {
  try {
    const responseDados = await fetch("./dados.json");
    const jsonDados = await responseDados.json();
  } catch (e) {
    console.log(`o erro foi: ${e}`);
  }
}

async function puxarDados2() {
  const dados = fetch("./dados.json");
  const clientes = fetch("./clientes.json");
  const responseDados = await dados;
  const resolvidoPrimeiro = await (await responseDados).json();
  const clientesDados = await clientes;
  const clientesDadosPrimeiro = await (await clientesDados).json();
  console.log(resolvidoPrimeiro);
  console.log(clientesDadosPrimeiro);
}

puxarDados2();
