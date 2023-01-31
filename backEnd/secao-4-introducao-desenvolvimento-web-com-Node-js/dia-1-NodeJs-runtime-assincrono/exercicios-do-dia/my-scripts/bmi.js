const readline = require('readline-sync');

const calculaBMI = (weight, height) => {
 console.log(`Weight: ${weight}, Height: ${height}`);

 const heightSquared = height ** 2;
  const bmi = weight / heightSquared;
  return bmi

}

function main(){
  const weight = readline.questionInt('What is your weight?');
  const height = readline.questionFloat('What is your height?');
  const bmi = calculaBMI(weight, height);

  console.log(`BMI: ${bmi.toFixed(2)}`)
}

main()