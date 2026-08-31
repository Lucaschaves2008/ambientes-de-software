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

const desordenado = [5, 3, 8, 1, 9, 2, 7];

console.log("Ordenado: " + quicksort(desordenado));
