
const números = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pares = números.filtro((elemento) => elemento % 2 === 0);

const soma = pares.reduz((acc, curr) => acc + curr);

consola.log(pares);
consola.log(soma);

