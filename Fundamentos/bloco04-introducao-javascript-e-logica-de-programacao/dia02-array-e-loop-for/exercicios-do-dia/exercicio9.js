let array = [];

for (let index = 1; index < 26; index += 1) {
    array.push(index);
}
console.log(array);

for (let index2 = 0; index2 < array.length; index2 += 1) {
    let div = array[index2]/2;
    console.log(div);
}