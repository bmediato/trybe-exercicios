const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const respostasCorretas = (rigthAnswers, studentAnswers, callback) => {
  let cont = 0;
  for(let index = 0; index < rigthAnswers.length; index +=1) {
    const callbackReturn = callback(rigthAnswers[index], studentAnswers[index]);
    cont += callbackReturn;
  }
  return `Resultado final: ${cont} pontos`;
}

const comparar = (rigthAnswers, studentAnswers) => {
      if(rigthAnswers === studentAnswers) {
        return 1;
      }
      if(studentAnswers === 'N.A') {
        return 0;
      }
      return -0.5;
}

console.log(respostasCorretas(RIGHT_ANSWERS, STUDENT_ANSWERS, comparar));