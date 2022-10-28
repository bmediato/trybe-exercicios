const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) =>  array.find((elemento) =>  elemento.length === 5)


console.log(findNameWithFiveLetters(names));