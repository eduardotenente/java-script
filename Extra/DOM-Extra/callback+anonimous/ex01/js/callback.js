/* Crie uma página com um botão e um parágrafo.

Ao clicar no botão, execute uma função que receba uma callback.
A callback deve ser uma função anônima responsável por alterar o texto do parágrafo para "Texto atualizado com sucesso!".
A função principal deve chamar a callback após o clique do usuário. */

const button = document.querySelector("#btn");
const resultMessage = document.querySelector("#resultMessage");

function mudarTexto(callback) {
    callback();
};

button.addEventListener('click', function(){
    mudarTexto(function(){
        resultMessage.textContent = "Texto atualizado com sucesso!"
        resultMessage.style.color = "red"
    });
});