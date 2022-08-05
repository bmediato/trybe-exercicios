const botao = document.getElementById('botao');
const limpaBotao = document.getElementById('limpa');

botao.addEventListener('click', parouBotao) 

function parouBotao (event) {
    event.preventDefault();
}

limpaBotao.addEventListener('click', limpaTudo)

function limpaTudo(event) {
    
}