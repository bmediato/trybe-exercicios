const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return names.some((array) => array === name);
}

console.log(hasName(names, 'Ana'))