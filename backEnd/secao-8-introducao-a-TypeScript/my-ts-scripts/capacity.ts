const units2 = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convert(valor: number, unidadeBase: string, unidadeConversao: string): number {
  const fromIndex = units2.indexOf(unidadeBase);
  const toIndex = units2.indexOf(unidadeConversao);
  const expoente = toIndex - fromIndex;

  return valor * Math.pow(10, expoente);
}

