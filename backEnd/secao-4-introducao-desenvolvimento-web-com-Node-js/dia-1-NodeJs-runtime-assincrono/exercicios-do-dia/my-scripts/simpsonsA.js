const fs = require('fs').promises;

async function handleSimpson() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpson = JSON.parse(fileContent);
  const string = simpson.map(({id, name}) => `${id} - ${name}`);
  string.forEach(string => {
    console.log(string);
  });
}

async function main() {
  const simpson = await handleSimpson()
  return simpson;
}

main();