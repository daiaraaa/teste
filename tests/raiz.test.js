const raiz = require('../src/raiz')

test('A função raizQuadrada deve retornar 3 ao calcular a raiz quadrada de 9', () => {
  expect(raiz(9)).toBe(3)
})