const { contar } = require("../projeto_1/javascript/algoritmos");

test("deve contar os números entre o primeiro item e o tamanho da lista", () => {
  expect(contar([3, 5, 1, 8, 4, 2, 6, 7])).toBe(6);
});

test("quando o primeiro item é maior que o tamanho, o intervalo deve ser invertido", () => {
  expect(contar([10, 2, 5, 11])).toBe(2);
});

test("uma lista com um único elemento deve contar esse elemento", () => {
  expect(contar([1])).toBe(1);
});

test("lista vazia deve lançar RangeError", () => {
  expect(() => contar([])).toThrow(RangeError);
});

test("entrada que não é lista ou contém texto deve lançar TypeError", () => {
  expect(() => contar("123")).toThrow(TypeError);
  expect(() => contar([1, "2"])).toThrow(TypeError);
});
