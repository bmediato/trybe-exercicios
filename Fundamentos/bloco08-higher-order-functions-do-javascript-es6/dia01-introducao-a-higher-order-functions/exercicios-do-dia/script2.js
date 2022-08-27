const sorteio = (numapost, callback) => {
  const num = Math.floor(Math.random() * 5) + 1;
  return callback(numapost, num);
}

const comparar = (numapost, num) => numapost === num ? `Parabéns você ganhou!` : `Tente novamente!`;

console.log(sorteio(2,comparar));