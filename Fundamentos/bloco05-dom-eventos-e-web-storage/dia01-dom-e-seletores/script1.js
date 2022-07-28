/*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie e execute uma função que mude a cor do quadrado vermelho para branco.
Crie e execute uma função que corrija o texto da tag <h1>.
Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */

function mudaTexto() {
    let texto = document.getElementsByTagName('p')[1];
    texto.innerHTML = 'Me vejo trabalhando e mudando o rumo da minha vida profissional';
}
mudaTexto();

function changeColor() {
    let mainColor = document.getElementsByClassName('main-content')[0];
    mainColor.style.backgroundColor = 'rgb(76, 164, 109)';
}
changeColor();

function quadradoDoMeio() {
    let col = document.getElementsByTagName('section');
    for (let index = 0; index < col.length; index += 1) {
        col[index].style.backgroundColor = 'white';
    }
}
quadradoDoMeio();

function corrigindoTexto() {
    let cabecalho = document.getElementsByTagName('h1')[0];
    cabecalho.innerHTML = 'Exercício 5.1 - JavaScript';
}
corrigindoTexto();

function maiusculo() {
    let grande = document.getElementsByTagName('p')[0];
    grande.innerHTML = grande.innerHTML.toUpperCase();
}
maiusculo();

function exiba() {
    let paragrafo = document.getElementsByTagName('p');
    for (let index = 0; index < paragrafo.length; index += 1) {
        console.log(paragrafo[index].innerHTML);
    }
}
exiba();