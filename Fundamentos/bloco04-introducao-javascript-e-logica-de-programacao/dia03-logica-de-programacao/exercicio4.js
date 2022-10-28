let maiorNumeroPrimo = 0;

for (let index = 2; index <=50; index +=1){
    let isPrime = true;
    for (let secondIndex = 2; secondIndex < index; secondIndex +=1) {
        if (index % secondIndex === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        maiorNumeroPrimo = index;
    }
}
console.log(maiorNumeroPrimo);