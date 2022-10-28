const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((elemento) =>  elemento === name)

console.log(hasName(names, 'Ana'))