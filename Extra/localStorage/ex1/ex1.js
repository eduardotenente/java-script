/*Crie uma página que permita ao usuário informar seu nome e salvá-lo no localStorage.

Requisitos:
1. Crie um campo de texto para informar o nome.
2. Adicione um botão para salvar o nome.
3. Ao clicar no botão, armazene o nome utilizando localStorage.
4. Exiba uma mensagem confirmando que o nome foi salvo.
5. Quando a página for recarregada, recupere o nome armazenado e exiba uma mensagem de boas-vindas.
6. Caso não exista nenhum nome salvo, exiba uma mensagem solicitando que o usuário informe seu nome. */

const nome = document.querySelector('#nome');
const botaoSalvar = document.querySelector('#salvar-botao');
const containerSalvo = document.querySelector('#container-salvo');
let nomeSalvo = null;

if(botaoSalvar) {
    botaoSalvar.addEventListener('click', () => {
        nomeSalvo = localStorage.setItem('nomeSalvado', JSON.stringify(nome.value));
        exibirMensagem()
    });
} else {
    console.error("O evento não pôde ser disparado!");
};

window.addEventListener(DOMContentLoaded, () => {
    containerSalvo.innerHTML += `<p>Bem-vindo, ${nomeSalvo}</p>`;
});

function exibirMensagem() {
    if(nomeSalvo) {
        containerSalvo.innerHTML = `<p>Nome salvo com sucesso!</p>`;
    } else {
        containerSalvo.innerHTML = `<p>Nenhum nome salvo! informe o seu nome.</p>`;
    }
};