// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'pitaya'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'suco de laranja', 'aveia'];

const fruitSalad = (fruit, additional) => {
  const salada = [...fruit, ...additional];
  return salada;
};

console.log(fruitSalad(specialFruit, additionalItens));