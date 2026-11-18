const { mdc } = require("../projeto_1/javascript/algoritmos");

test("o MDC de 48 e 18 deve ser 6", () => {
  expect(mdc(48, 18)).toBe(6);
});

test("o MDC de números primos entre si deve ser 1", () => {
  expect(mdc(101, 10)).toBe(1);
});

test("o MDC com zero deve ser o outro número", () => {
  expect(mdc(0, 7)).toBe(7);
  expect(mdc(7, 0)).toBe(7);
});

test("o MDC com números negativos deve ser positivo", () => {
  expect(mdc(-48, 18)).toBe(6);
  expect(mdc(48, -18)).toBe(6);
});

test("entrada não inteira deve lançar TypeError", () => {
  expect(() => mdc(4.5, 2)).toThrow(TypeError);
  expect(() => mdc(4, "2")).toThrow(TypeError);
});
