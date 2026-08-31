function ehPrimo(numero) {
  if (numero < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
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

  const pivo = array[Math.floor(array.length / 2)];
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

const numerosPrimo = [1, 2, 3, 4, 17, 20, 29];
for (const n of numerosPrimo) {
  console.log(n + " é primo? " + ehPrimo(n));
}

const valores = [10, 20, 30, 40, 50];
console.log("Soma: " + somar(valores));

for (let n = 0; n <= 10; n++) {
  console.log("Fibonacci(" + n + ") = " + fibonacci(n));
}

console.log("MDC(48, 18) = " + mdc(48, 18));
console.log("MDC(101, 10) = " + mdc(101, 10));

const desordenado = [5, 3, 8, 1, 9, 2, 7];
console.log("Ordenado: " + quicksort(desordenado));

const dados = [3, 5, 1, 8, 4, 2, 6, 7];
console.log("N = " + dados.length);
console.log("Quantidade entre " + dados[0] + " e " + dados.length + ": " + contar(dados));
