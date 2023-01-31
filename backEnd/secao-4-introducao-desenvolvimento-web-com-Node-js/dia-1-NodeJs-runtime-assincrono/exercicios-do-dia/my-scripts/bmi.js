const readline = require('readline-sync');

const calculaBMI = (weight, height) => {
 console.log(`Weight: ${weight}, Height: ${height}`);

 const heightSquared = height ** 2;
  const bmi = weight / heightSquared;
  return bmi

}

function main(){
  const weight = readline.questionFloat('What is your weight?');
  const height = readline.questionFloat('What is your height?');
  const bmi = calculaBMI(weight, height);

  console.log(`BMI: ${bmi.toFixed(2)}`)

  if(bmi < 18.5) {
    console.log('Abaixo do peso(magreza)');
    return ;
  } if ( bmi >= 18.5 && bmi <= 24.9) {
    console.log('Peso normal');
    return;
  } if(bmi >= 25 && bmi <= 29.9) {
    console.log('Acima do peso(sobrepeso)');
    return;
  } if(bmi >= 30 && bmi <= 34.9) {
    console.log('Obesidade grau 1');
    return;
  } if(bmi >= 35 && bmi <= 39.9) {
    console.log('Obesidade grau 2');
    return;
  } if(bmi >= 40) {
    console.log('Obesidade graus 3 e 4') 
    return;
  }
}

main()