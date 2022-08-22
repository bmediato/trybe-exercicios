const arrayCorreto = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const arrayResposta = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const fun = (arrayCorreto, arrayResposta, callback) => {
  let cont = 0;
  for (let index = 0; index < arrayCorreto.length; index += 1) {
    const retorno = callback(arrayCorreto[index], arrayResposta[index])
    cont += retorno;
  }
  return `Resultado final: ${cont} pontos`
}

const contadora = (arrayCorreto, arrayResposta) => {
  if (arrayCorreto === arrayResposta) {
    return 1;
  }
  else if (arrayResposta === 'N.A') {
    return 0;
  }
  return -0.5;
}

console.log(fun(arrayCorreto, arrayResposta, contadora));