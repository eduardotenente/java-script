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
const botaoEnviar = document.querySelector('#enviar-botao');
const containerSalvo = document.querySelector('#container-salvo');
const mensagem = document.querySelector('#mensagem');
const saudacaoElemento = document.querySelector('#saudacao');
let nomeSalvo = null;

function exibirMensagem() {
    if(localStorage.getItem('nomeSalvado')) {
        mensagem.textContent = "Nome salvo com sucesso!";
    } else {
        mensagem.textContent = "Nenhum nome salvo! informe o seu nome.";
    }
};

function saudacao() {
    saudacaoElemento.classList.remove('escondido');
    saudacaoElemento.textContent = `Bem-vindo(a), ${JSON.parse(localStorage.getItem('nomeSalvado'))}!`;
};

if(botaoSalvar) {
    botaoSalvar.addEventListener('click', (event) => {
        event.preventDefault();
        saudacaoElemento.classList.add('escondido');
        nomeSalvo = localStorage.setItem('nomeSalvado', JSON.stringify(nome.value));
        exibirMensagem();
    });
} else {
    console.error("O evento não pôde ser disparado!");
};

window.addEventListener('DOMContentLoaded', () => {
    saudacao();
});