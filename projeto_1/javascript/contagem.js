// Conta quantos valores do conjunto estão entre o primeiro valor lido e N (o tamanho do conjunto), inclusive.
function contar(numeros) {
  const n = numeros.length;
  const primeiro = numeros[0];
  const minimo = Math.min(primeiro, n);
  const maximo = Math.max(primeiro, n);

  let contagem = 0;

  for (const valor of numeros) {
    if (valor >= minimo && valor <= maximo) {
      contagem++;
    }
  }

  return contagem;
}

const dados = [3, 5, 1, 8, 4, 2, 6, 7];

console.log("N = " + dados.length);
console.log("Quantidade entre " + dados[0] + " e " + dados.length + ": " + contar(dados));
