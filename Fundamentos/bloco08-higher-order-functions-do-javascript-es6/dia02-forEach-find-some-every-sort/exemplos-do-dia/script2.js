const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => array.find((elemento) => elemento % 3 === 0 && elemento % 5 === 0 )


console.log(findDivisibleBy3And5(numbers))