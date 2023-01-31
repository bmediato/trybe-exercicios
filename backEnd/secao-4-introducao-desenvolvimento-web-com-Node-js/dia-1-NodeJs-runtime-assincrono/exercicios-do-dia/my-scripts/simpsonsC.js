const fs = require('fs').promises;

async function retiraId(){
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpson = JSON.parse(fileContent);
  const newArray = simpson.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function main() {
  retiraId();
}

main()