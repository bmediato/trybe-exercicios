const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pares = numbers.filter((elemento) => elemento%2 === 0);

const soma = pares.reduce((acc, curr) => acc + curr);

console.log(pares);
console.log(soma);