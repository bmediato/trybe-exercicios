const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const separa = frase.split('');

  for(let index =0; index < separa.length; index +=1) {
    if(separa[index] === 'x') {
      separa[index] = nome;
    }
  }
  return separa.join('');
}

console.log(substituaX('Beatriz'));

const minhasSkills = (func) => {
  const skills = ['html', 'css', 'javascript'];
  let retorno = `${func} Minhas três principais habilidades são: `;

  for(let index= 0; index < skills.length; index +=1) {
    retorno = `${retorno}\n - ${skills[index]}`;
  }
  return retorno;
}

console.log(minhasSkills(substituaX('Beatriz')));