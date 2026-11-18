// Demonstrações rodam no navegador e via `node algoritmos.js`, mas não quando o arquivo é importado (ex.: Jest).
const executarDemonstracoes = typeof module === "undefined" || require.main === module;

// -------- VALIDACAO --------
function validarInteiro(valor, nomeDoParametro) {
  if (typeof valor !== "number" || !Number.isInteger(valor)) {
    throw new TypeError(nomeDoParametro + " deve ser um número inteiro.");
  }
}

function validarListaDeNumeros(lista) {
  if (!Array.isArray(lista)) {
    throw new TypeError("A entrada deve ser uma lista (array) de números.");
  }

  for (const item of lista) {
    if (typeof item !== "number" || !Number.isFinite(item)) {
      throw new TypeError("Todos os itens da lista devem ser números finitos.");
    }
  }
}
// ------ FIM ------

// -------- CALCULO NUMEROS PRIMOS --------
function ehPrimo(numero) {
  validarInteiro(numero, "O número");

  if (numero < 2) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= numero; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}

if (executarDemonstracoes) {
  const numerosParaTestar = [1, 2, 3, 4, 17, 20, 29];
  for (const numero of numerosParaTestar) {
    console.log(numero + " é primo? " + ehPrimo(numero));
  }
}
// ------ FIM ------

// -------- SOMATORIO --------
function somar(numeros) {
  validarListaDeNumeros(numeros);

  let soma = 0;

  for (const numero of numeros) {
    soma += numero;
  }

  return soma;
}

if (executarDemonstracoes) {
  const valores = [10, 20, 30, 40, 50];
  console.log("Soma: " + somar(valores));
}
// ------ FIM ------

// -------- FIBONACCI --------
function validarPosicaoFibonacci(posicao) {
  validarInteiro(posicao, "A posição");

  if (posicao < 0) {
    throw new RangeError("A posição não pode ser negativa.");
  }
}

function fibonacci(posicao) {
  validarPosicaoFibonacci(posicao);

  if (posicao === 0) {
    return 0;
  }

  if (posicao === 1) {
    return 1;
  }

  let anterior = 0;
  let atual = 1;

  for (let indice = 2; indice <= posicao; indice++) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return atual;
}

function fibonacciSequencia(ultimaPosicao) {
  validarPosicaoFibonacci(ultimaPosicao);

  const sequencia = [];
  let anterior = 0;
  let atual = 1;

  for (let indice = 0; indice <= ultimaPosicao; indice++) {
    sequencia.push(anterior);
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return sequencia;
}

if (executarDemonstracoes) {
  for (let posicao = 0; posicao <= 10; posicao++) {
    console.log("Fibonacci(" + posicao + ") = " + fibonacci(posicao));
  }
  console.log("Sequência até 10: " + fibonacciSequencia(10).join(", "));
}
// ------ FIM ------

// -------- MAXIMO DIVISOR COMUM --------
function mdc(primeiro, segundo) {
  validarInteiro(primeiro, "O primeiro número");
  validarInteiro(segundo, "O segundo número");

  // O MDC é sempre positivo, mesmo com entradas negativas.
  let dividendo = primeiro < 0 ? -primeiro : primeiro;
  let divisor = segundo < 0 ? -segundo : segundo;

  while (divisor !== 0) {
    const resto = dividendo % divisor;
    dividendo = divisor;
    divisor = resto;
  }

  return dividendo;
}

if (executarDemonstracoes) {
  console.log("MDC(48, 18) = " + mdc(48, 18));
  console.log("MDC(101, 10) = " + mdc(101, 10));
}
// ------ FIM ------

// -------- ORDENACAO QUICKSORT --------
function quicksort(numeros) {
  validarListaDeNumeros(numeros);

  if (numeros.length <= 1) {
    return numeros;
  }

  const pivo = numeros[numeros.length - 1];
  const menores = [];
  const iguais = [];
  const maiores = [];

  for (const numero of numeros) {
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

if (executarDemonstracoes) {
  const desordenado = [5, 3, 8, 1, 9, 2, 7];
  console.log("Ordenado: " + quicksort(desordenado));
}
// ------ FIM ------

// -------- CONTAGEM --------
// Conta quantos números da lista estão no intervalo entre o primeiro item e o tamanho da lista.
function contar(numeros) {
  validarListaDeNumeros(numeros);

  if (numeros.length === 0) {
    throw new RangeError("A lista não pode ser vazia.");
  }

  const tamanho = numeros.length;
  const primeiro = numeros[0];
  let minimo;
  let maximo;

  if (primeiro < tamanho) {
    minimo = primeiro;
    maximo = tamanho;
  } else {
    minimo = tamanho;
    maximo = primeiro;
  }

  let contagem = 0;

  for (const valor of numeros) {
    if (valor >= minimo && valor <= maximo) {
      contagem++;
    }
  }

  return contagem;
}

if (executarDemonstracoes) {
  const dados = [3, 5, 1, 8, 4, 2, 6, 7];
  console.log("N = " + dados.length);
  console.log("Quantidade entre " + dados[0] + " e " + dados.length + ": " + contar(dados));
}
// ------ FIM ------

if (typeof module !== "undefined") {
  module.exports = { ehPrimo, somar, fibonacci, fibonacciSequencia, mdc, quicksort, contar };
}
