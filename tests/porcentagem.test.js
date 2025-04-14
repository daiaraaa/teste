const porcentagem = require('../src/porcentagem')

test('A função porcentagem deve retornar 10 ao calcular 10% de 100', () => {
  expect(porcentagem(100, 10)).toBe(10)
})