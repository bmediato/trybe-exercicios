const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convert = (valor: number, unidadeBase: string, unidadeConversao: string): number => {
  const fromIndex = units.indexOf(unidadeBase); // pegamos o index da unidade base no array
  const toIndex = units.indexOf(unidadeConversao); // pegamos o index da unidade para a conversão
  const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index

  return valor * Math.pow(10, exponent);
}