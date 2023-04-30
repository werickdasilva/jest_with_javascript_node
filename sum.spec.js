const sum = require('./sum')

test('soma entre 1 + 5 é igual a 6', () => {
    expect(sum(1, 5)).toBe(6)
})