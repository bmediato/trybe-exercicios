let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;

for (let number of numbers) {
    if (number%2 !== 0) {
        cont +=1;
    }
}
if (cont > 0) {
    console.log(cont);
}
else {
    console.log('nenhum valor ímpar encontrado');

}