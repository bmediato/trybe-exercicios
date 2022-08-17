const sum = require('./sum');

describe ('testando a função soma', () => {
  test('Testando resultado da soma', () => {
    expect(sum(4,5)).toBe(9);
    expect(sum(0,0)).toBe(0);
  })
  test('Testando se lança um erro', () => {
    expect(() => sum(4,'5')).toThrowError();
    expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
  })
})