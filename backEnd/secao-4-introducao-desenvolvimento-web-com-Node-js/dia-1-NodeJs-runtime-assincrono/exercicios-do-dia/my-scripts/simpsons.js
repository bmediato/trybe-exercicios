const fs = require('fs').promises;

async function readAll() {
 const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
 console.log (fileContent);
 const simpsons = JSON.parse(fileContent);
 console.log(fileContent);
 const string = simpsons.map(({id, name}) => `${id} - ${name}`);
 console.log(string);
 string.forEach((string) => console.log(string));
}

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
async function main() {
  await readAll();
}

main();