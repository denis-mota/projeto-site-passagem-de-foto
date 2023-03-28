
// passo 1 - pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagen');

// passo 2 - identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // passo 3 - desmarcar o botao selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // passo 4 - marcar o botao clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // passo 5 - esconder a imagem ativa de fundo anterior
        const imagenAtiva = document.querySelector('.ativa');
        imagenAtiva.classList.remove('ativa');

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado
        imagens[indice].classList.add('ativa');
    })
})