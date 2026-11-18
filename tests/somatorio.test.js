const { somar } = require("../projeto_1/javascript/algoritmos");

test("a soma de 10, 20, 30, 40 e 50 deve ser 150", () => {
  expect(somar([10, 20, 30, 40, 50])).toBe(150);
});

test("deve somar corretamente números negativos", () => {
  expect(somar([-5, 10, -3])).toBe(2);
});

test("a soma de uma lista vazia deve ser 0", () => {
  expect(somar([])).toBe(0);
});

test("entrada inválida deve lançar TypeError", () => {
  expect(() => somar(5)).toThrow(TypeError);
  expect(() => somar([1, NaN])).toThrow(TypeError);
});
