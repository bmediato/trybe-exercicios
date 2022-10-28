//1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.
let soma = 0;

for (let index = 1; index <= 50; index += 1) {
    soma += index;
}
console.log('A soma de 1 a 50 é:', soma);


//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let cont = 0;

for (let index = 2; index < 151; index += 1) {
    if (index % 3 === 0) {
        cont += 1;
    }
}
if (cont === 50) {
    console.log('Bingo!!')
}

//3. Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ e imprime quem é a mais nova no formato: "Pessoa" é a mais nova.

let pessoaX = 42;
let pessoaY = 23;
let pessoaZ = 64;

if (pessoaX < pessoaY && pessoaX < pessoaZ) {
    console.log('A pessoa que tem', pessoaX, 'anos é a mais nova');
}
else if (pessoaY < pessoaX && pessoaY < pessoaZ) {
    console.log('A pessoa que tem', pessoaY, 'anos é a mais nova');
}
else {
    console.log('A pessoa que tem', pessoaZ, 'anos é a mais nova');
}