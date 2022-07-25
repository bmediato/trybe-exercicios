function maiorNome (nomes) {
    let maiorCaracteres = nomes[0];
    for (let index in nomes) {
        if (maiorCaracteres.length < nomes[index].length) {
            maiorCaracteres = nomes[index];
        }
    }
    return maiorCaracteres;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));