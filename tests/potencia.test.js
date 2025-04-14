const potencia = require('../src/potencia')

test('A função potencia deve retornar 8 ao calcular 2 elevado a 3', () => {
  expect(potencia(2, 3)).toBe(8)
})