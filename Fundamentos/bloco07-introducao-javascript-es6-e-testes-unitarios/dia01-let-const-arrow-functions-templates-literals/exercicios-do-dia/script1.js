const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {

for(let index = 1; index < array.length; index +=1) {
  for (let index2 = 0; index2 < index; index2+=1) {
    if (array[index] < array[index2]) {
      let position = array[index];
      array[index] = array[index2];
      array[index2] = position;
    }
  }
}
return array
};

console.log(sortOddsAndEvens(oddsAndEvens));
