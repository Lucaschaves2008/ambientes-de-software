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

const numeros = [1, 2, 3, 4, 17, 20, 29];

for (const n of numeros) {
  console.log(n + " é primo? " + ehPrimo(n));
}
