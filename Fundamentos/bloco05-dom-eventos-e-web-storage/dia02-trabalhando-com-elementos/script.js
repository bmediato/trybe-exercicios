const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "Olá";