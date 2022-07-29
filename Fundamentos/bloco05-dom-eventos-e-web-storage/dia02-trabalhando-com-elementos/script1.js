// 1.Crie um irmão para elementoOndeVoceEsta
let pai = document.getElementById('pai');
let irmao = document.createElement('section');
irmao.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmao); 

// 2.Crie um filho para elementoOndeVoceEsta
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filho = document.createElement('section'); // cria um novo elemeno
filho.id = 'filho';
elementoOndeVoceEsta.appendChild(filho);

//3.Crie um filho para primeiroFilhoDoFilho
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDoPrimeiroFilho = document.createElement('section');
filhoDoPrimeiroFilho.id = 'FilhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilho);

//4.A partir desse filho criado, acesse terceiro filho
let filhoDoPrimeiro = document.getElementById('FilhoDoPrimeiroFilhoDoFilho');
filhoDoPrimeiro.parentElement.parentElement.previousElementSibling;

let paiDopai = document.getElementById('paiDoPai');
for (let index = pai.childNodes.length - 1; index >=0; index -=1) {
    const currentChildren = pai.childNodes[index];
    if (filhoAtual.id !== 'elementoOndeVoceEsta') { // Verifica se o id do filho atual é diferente de 'elementoOndeVoceEsta'
        filhoAtual.remove(); // Remove o filhoAtual
      }
}
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); // Recupera o elemento com o id segundoEUltimoFilhoDoFilho
segundoEUltimoFilhoDoFilho.remove(); // Remove o segundo filho do filho