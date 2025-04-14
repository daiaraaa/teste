const dividisao = require('../src/divisao')

test('A função dividir deve retornar 5 ao dividir 10 e 2', () => {
  expect(dividisao(10, 2)).toBe(5)
})
