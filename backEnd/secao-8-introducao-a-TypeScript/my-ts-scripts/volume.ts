import readline from 'readline';

const units4 = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(valor: number, unidadeBase: string, unidadeConversao: string): number {
  const fromIndex = units4.indexOf(unidadeBase);
  const toIndex = units4.indexOf(unidadeConversao);
  const expoente = toIndex - fromIndex;

  return valor * Math.pow(1000, expoente);
}
