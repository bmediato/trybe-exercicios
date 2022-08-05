window.onload = function () {
    const botao = document.getElementById('botao');
    botao.addEventListener('click', parouBotao);
    const limpaBotao = document.getElementById('limpa');
    limpaBotao.addEventListener('click', limpaTudo)
}

function parouBotao (event) {
    event.preventDefault();
}

function limpaTudo() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index +=1) {
        const userInput = formElement[index];
        userInput.value= '';
        userInput.checked = false;
    }
    textArea.value = '';
}