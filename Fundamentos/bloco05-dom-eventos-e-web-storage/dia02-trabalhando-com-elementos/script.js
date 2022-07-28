// Acessando o elemento elementoOndeVoceEsta
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta'); 

// Acesse pai a partir do elementoOndeVoceEsta e adicione uma cor nele
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerHTML = "Olá";

//Acesse o primeiro filho a partir de pai
const papai = document.getElementById('pai');
const primeiroFilho = papai.firstElementChild;

//Acesse o primeiroFilho a partir de elementoOndeVoceEsta
const acessoPrimeiroFilho = elementoOndeVoceEsta.previousElementSibling;

//Acesse o texto atenção a partir de elementoOndeVoceEsta
const texto = elementoOndeVoceEsta.nextSibling; 

//Acesse o terceiroFilho a partir do elementoOndeVoceEsta
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

//Acesse o terceiroFilho a partir de pai
const terFilho = papai.lastElementChild.previousElementSibling;
