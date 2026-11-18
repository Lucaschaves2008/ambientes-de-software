const { fibonacci, fibonacciSequencia } = require("../projeto_1/javascript/algoritmos");

test("os 10 primeiros números de fibonacci devem ser os corretos", () => {
  expect(fibonacciSequencia(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test("fibonacci da posição 10 deve ser 55", () => {
  expect(fibonacci(10)).toBe(55);
});

test("fibonacci da posição zero deve ser 0 e a sequência deve ter um elemento", () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacciSequencia(0)).toEqual([0]);
});

test("posição negativa deve lançar RangeError", () => {
  expect(() => fibonacci(-1)).toThrow(RangeError);
  expect(() => fibonacciSequencia(-5)).toThrow(RangeError);
});

test("posição não inteira deve lançar TypeError", () => {
  expect(() => fibonacci(2.5)).toThrow(TypeError);
  expect(() => fibonacci("10")).toThrow(TypeError);
});
