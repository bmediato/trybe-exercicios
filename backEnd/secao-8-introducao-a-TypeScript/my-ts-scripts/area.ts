const units3 = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(valor: number, unidadeBase: string, unidadeConversao: string): number {
  const fromIndex = units3.indexOf(unidadeBase);
  const toIndex = units3.indexOf(unidadeConversao);
  const expoente = toIndex - fromIndex;

  return valor * Math.pow(100, expoente);
}