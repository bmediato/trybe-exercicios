function soma(numero) {
    let som = 0;

    for ( let index = 1; index <= numero; index +=1) {
      som += index;
    }
    return som;
}

console.log(soma(5));