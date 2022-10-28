const maiorPalavra = (frase) => {
  const palavra = frase.split(' ');
  let maiorPalavra = 0;
  let result = '';
  for (const index of palavra) {
    if (index.length > maiorPalavra) {
      maiorPalavra = index.length;
      result = index;
    }
  }
  return result;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));
