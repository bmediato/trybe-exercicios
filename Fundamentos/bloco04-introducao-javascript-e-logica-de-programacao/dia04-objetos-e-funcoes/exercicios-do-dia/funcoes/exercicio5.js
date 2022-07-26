function maisRepete(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;

    for (let index in numeros) { //iterando por cada número no array de números
        let vereficaNumero = numeros[index]; //armazenando esse número em uma variável auxiliar
        for (let index2 in numeros) { //iterando novamente por todos os números
            if (vereficaNumero === numeros[index2]) { // se encontrou o número do loop de fora
                contNumero +=1;  // incrementa o numero de vezes que esse número aparece;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero =0;
    }
    return numeros[indexNumeroRepetido];
}

console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]))
