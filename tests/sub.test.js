const sub = require('../src/sub')

test('A função subtração deve retornar -2 ao subtrair -1 e 1', () => {
    expect(sub(-1, 1)).toBe(-2)
})