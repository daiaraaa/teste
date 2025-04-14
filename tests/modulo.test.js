const modulo = require('../src/modulo')

test('A função modulo deve retornar 0 ao calcular o resto da divisão de 10 por 2', () => {
  expect(modulo(10, 2)).toBe(0)
})