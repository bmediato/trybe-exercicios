const numAleatorio = (numApostado, callback) => {
  let x = Math.floor((Math.random() * 5) +1);
  return callback(numApostado, x) ? 'Lucky day, you won!' : 'Try again!';
}

const verifica = (numApostado, x) => numApostado === x;

console.log(numAleatorio(4, verifica));