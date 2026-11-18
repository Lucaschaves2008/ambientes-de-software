const { quicksort } = require("../projeto_1/javascript/algoritmos");

test("deve ordenar uma lista desordenada em ordem crescente", () => {
  expect(quicksort([5, 3, 8, 1, 9, 2, 7])).toEqual([1, 2, 3, 5, 7, 8, 9]);
});

test("deve manter números repetidos e negativos na ordem correta", () => {
  expect(quicksort([3, -1, 3, 0, -1])).toEqual([-1, -1, 0, 3, 3]);
});

test("lista vazia e lista com um elemento devem continuar iguais", () => {
  expect(quicksort([])).toEqual([]);
  expect(quicksort([42])).toEqual([42]);
});

test("entrada inválida deve lançar TypeError", () => {
  expect(() => quicksort(null)).toThrow(TypeError);
  expect(() => quicksort([1, "a", 3])).toThrow(TypeError);
});
