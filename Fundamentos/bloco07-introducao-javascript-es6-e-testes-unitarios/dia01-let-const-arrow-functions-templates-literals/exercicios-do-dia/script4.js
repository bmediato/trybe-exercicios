let clickCount = 0;
const texto = document.getElementById('text');
const botao = document.getElementById('btn');

botao.addEventListener('click', () => texto.innerHTML = clickCount += 1);
