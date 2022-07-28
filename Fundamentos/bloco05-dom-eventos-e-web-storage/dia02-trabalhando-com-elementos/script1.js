// 1.Crie um irmão para elementoOndeVoceEsta
let pai = document.getElementById('pai');
let irmao = document.createElement('section');
irmao.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmao); 

// 2.Crie um filho para elementoOndeVoceEsta
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filho = document.createElement('section');
filho.id = 'filho';
elementoOndeVoceEsta.appendChild(filho);

//3.Crie um filho para primeiroFilhoDoFilho
//4.A partir desse filho criado, acesse terceiro filho