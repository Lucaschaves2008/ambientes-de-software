const { ehPrimo } = require("../projeto_1/javascript/algoritmos");

test("2, 3, 17 e 29 devem ser primos", () => {
  expect(ehPrimo(2)).toBe(true);
  expect(ehPrimo(3)).toBe(true);
  expect(ehPrimo(17)).toBe(true);
  expect(ehPrimo(29)).toBe(true);
});

test("4 e 20 não devem ser primos", () => {
  expect(ehPrimo(4)).toBe(false);
  expect(ehPrimo(20)).toBe(false);
});

test("zero, um e números negativos não devem ser primos", () => {
  expect(ehPrimo(0)).toBe(false);
  expect(ehPrimo(1)).toBe(false);
  expect(ehPrimo(-7)).toBe(false);
});

test("entrada não inteira deve lançar TypeError", () => {
  expect(() => ehPrimo(7.5)).toThrow(TypeError);
  expect(() => ehPrimo("7")).toThrow(TypeError);
});
