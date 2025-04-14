const arredondar = require('../src/arredondar')

test('A função arredondar de./arredondarar 5.6', () => {
  expect(arredondar(5.6)).toBe(6)
})