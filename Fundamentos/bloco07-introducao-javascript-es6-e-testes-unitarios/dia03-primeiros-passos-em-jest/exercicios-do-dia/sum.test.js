const sum = require('./sum');

describe ('testando a função soma', () => {
  test('Testando se o retorno 4,5 é 9', () => {
    expect(sum(4,5)).toBe(9);
  })
})