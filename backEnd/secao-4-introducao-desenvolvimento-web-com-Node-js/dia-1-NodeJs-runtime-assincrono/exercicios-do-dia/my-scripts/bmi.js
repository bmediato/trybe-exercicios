const weight = 50;
const height = 1.60;

const calculaBMI = (weight, height) => {
 console.log(`Weight: ${weight}, Height: ${height}`);

 const heightSquared = height ** 2;
  const bmi = weight / heightSquared;
  return bmi

}

function main(){
  const bmi = calculaBMI(weight, height);

  console.log(`BMI: ${bmi.toFixed(2)}`)
}

main()