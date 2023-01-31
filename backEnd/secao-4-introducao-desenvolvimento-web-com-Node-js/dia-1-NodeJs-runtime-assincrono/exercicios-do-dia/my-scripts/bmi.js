const readline = require('readline-sync');

function CalculaBMI() {
  const height = readline.questionFloat('What is your height?');
  const weight = readline.questionFloat('What is your weight?');

 console.log(`Weight: ${weight}, Height: ${height}`);
 
 const heightSquad = height ** 2;
 const bmi = weight / heightSquad;
 return bmi;
}

function main(){
  const bmi = CalculaBMI();
  console.log(`BMI: ${bmi.toFixed(2)}`)

  if(bmi < 18.5) {
    console.log('abaixo do peso');
    return;
  } if(bmi >= 18.5 && bmi <= 24.9) {
    console.log('peso normal');
    return;
  } if(bmi >=25 && bmi <=29.9) {
    console.log('acima do peso');
    return;
  } if(bmi >= 30 && bmi <=34.9) {
    console.log('Obesidade grau I');
    return;
  } if(bmi >= 35 && bmi<= 39.9) {
    console.log('Obesidade grau II');
    return;
  } if(bmi > 40) {
    console.log('Obesidade grau III e IV');
    return;
  }
}

main();