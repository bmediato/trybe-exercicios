const fs = require('fs').promises;

async function recebeID(id){
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpson = JSON.parse(fileContent);
  const findS =simpson.find((el) => Number(el.id) === id);

  if(!findS) {
    throw new Error('id não encontrado');
  }

  return findS;
}

async function main() {
  const simpson = await recebeID(1);
  console.log(simpson);
}

main();