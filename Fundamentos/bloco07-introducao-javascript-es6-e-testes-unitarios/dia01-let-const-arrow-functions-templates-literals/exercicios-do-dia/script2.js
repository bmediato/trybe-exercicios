const fatorial = (num) => {
  let fat = 1;
  for (let index = num; index > 0; index -=1) {
    fat = fat * index;
  }
  console.log(`Esse é o fatorial ${fat}`);
}

fatorial(3);