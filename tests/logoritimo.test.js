const logaritmo = require('../src/logaritmo')

test('A função logaritmo deve retornar 2 ao calcular o logaritmo de 100', () => {
  expect(logaritmo(100)).toBe(2)
})