// ./length.ts

const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(valor: number, unidadeBase: string, unidadeConversao: string): number {
  const fromIndex = units.indexOf(unidadeBase);
  const toIndex = units.indexOf(unidadeConversao);
  const expoente = toIndex - fromIndex;

  return valor * Math.pow(10, expoente);
}