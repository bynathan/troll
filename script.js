const botão = document.getElementById('button');
const texto = document.getElementById('text');

const pergunta = window.prompt('Qual a pergunta?')

texto.innerHTML = `${pergunta}?`

const mudarPosição = function(){
    botão.classList.toggle('action')
}

botão.addEventListener('click', mudarPosição)
botão.addEventListener('mouseover', mudarPosição)