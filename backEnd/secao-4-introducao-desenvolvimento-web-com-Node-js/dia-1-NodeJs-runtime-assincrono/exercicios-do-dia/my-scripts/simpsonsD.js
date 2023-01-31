const fs = require('fs').promises;

async function createFamily(){
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const familyIds =[1, 2, 3, 4];
  const simpsonsFamily = simpsons.filter((simp) => familyIds.includes(Number(simp.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function main(){
  createFamily()
}

main();