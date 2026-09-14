const readline = require("readline/promises");

const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  let opcao = -1;

  while (opcao !== 0) {
    mostrarMenu();
    opcao = await lerInteiro("Opção: ");
    console.log();

    switch (opcao) {
      case 1:
        await opcaoPrimo();
        break;
      case 2:
        await opcaoSoma();
        break;
      case 3:
        await opcaoFibonacci();
        break;
      case 4:
        await opcaoMdc();
        break;
      case 5:
        await opcaoOrdenar();
        break;
      case 6:
        await opcaoContar();
        break;
      case 0:
        console.log("Até mais.");
        break;
      default:
        console.log("Opção inválida. Escolha um número de 0 a 6.");
    }
  }

  entrada.close();
}

function mostrarMenu() {
  console.log();
  console.log("==================================");
  console.log("            ALGORITMOS            ");
  console.log("==================================");
  console.log("  1 - Verificar se é primo");
  console.log("  2 - Somar uma lista");
  console.log("  3 - Fibonacci");
  console.log("  4 - Máximo divisor comum");
  console.log("  5 - Ordenar uma lista");
  console.log("  6 - Contar dentro de um intervalo");
  console.log("  0 - Sair");
  console.log("==================================");
}

// Cada opção pede os valores e chama o algoritmo correspondente.

async function opcaoPrimo() {
  const numero = await lerInteiro("Número: ");

  if (ehPrimo(numero)) {
    console.log(numero + " é primo.");
  } else {
    console.log(numero + " não é primo.");
  }
}

async function opcaoSoma() {
  const numeros = await lerLista("Números separados por espaço: ");
  console.log("Soma = " + somar(numeros));
}

async function opcaoFibonacci() {
  const n = await lerInteiro("Até qual posição (0 a 78)? ");

  if (n < 0 || n > 78) {
    console.log("Acima de 78 o resultado perde precisão.");
    return;
  }

  for (let i = 0; i <= n; i++) {
    console.log("Fibonacci(" + i + ") = " + fibonacci(i));
  }
}

async function opcaoMdc() {
  const a = await lerInteiro("Primeiro número: ");
  const b = await lerInteiro("Segundo número: ");
  console.log("MDC(" + a + ", " + b + ") = " + mdc(a, b));
}

async function opcaoOrdenar() {
  const numeros = await lerLista("Números separados por espaço: ");
  console.log("Ordenado: " + quicksort(numeros).join(", "));
}

async function opcaoContar() {
  const numeros = await lerLista("Números separados por espaço: ");
  const minimo = await lerInteiro("Valor mínimo: ");
  const maximo = await lerInteiro("Valor máximo: ");
  console.log("Quantidade entre " + minimo + " e " + maximo + ": " + contar(numeros, minimo, maximo));
}

// Algoritmos

function ehPrimo(numero) {
  if (numero < 2) {
    return false;
  }

  for (let i = 2; i * i <= numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

function somar(numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let anterior = 0;
  let atual = 1;

  for (let i = 2; i <= n; i++) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return atual;
}

function mdc(a, b) {
  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }

  return a;
}

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivo = array[array.length - 1];
  const menores = [];
  const iguais = [];
  const maiores = [];

  for (const numero of array) {
    if (numero < pivo) {
      menores.push(numero);
    } else if (numero > pivo) {
      maiores.push(numero);
    } else {
      iguais.push(numero);
    }
  }

  return quicksort(menores).concat(iguais, quicksort(maiores));
}

function contar(numeros, minimo, maximo) {
  let contagem = 0;

  for (const valor of numeros) {
    if (valor >= minimo && valor <= maximo) {
      contagem++;
    }
  }

  return contagem;
}

// Leitura do teclado. Repete a pergunta enquanto a resposta não for válida.

async function lerInteiro(mensagem) {
  while (true) {
    const texto = (await entrada.question(mensagem)).trim();
    const numero = Number(texto);

    if (texto !== "" && Number.isInteger(numero)) {
      return numero;
    }

    console.log("Digite um número inteiro.");
  }
}

async function lerLista(mensagem) {
  while (true) {
    const texto = (await entrada.question(mensagem)).trim();
    const numeros = texto.split(/\s+/).map(Number);

    if (texto !== "" && numeros.every(Number.isInteger)) {
      return numeros;
    }

    console.log("Digite apenas números inteiros separados por espaço.");
  }
}

main();
