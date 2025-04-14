const mult = require('../src/mult')

test('A função mult deve retornar 4 ao multiplicar 2 e 2', () => {
    expect(mult(2, 2)).toBe(4)
})