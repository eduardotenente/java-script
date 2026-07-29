/* Contador de Cliques

Crie um botão e um elemento para exibir um contador.

Cada clique no botão deve executar uma função que recebe uma callback.
A callback, criada como função anônima, deve atualizar o valor exibido no contador.
O contador deve aumentar em 1 a cada clique. */

const button = document.querySelector("#btn");
const resultCalc = document.querySelector("#resultCalc");
let cont = 1;

function clicarBotao(callback) {
    callback();
};

button.addEventListener('click', function(){
    // Chamando a função principal e passando a função anônima como callback
    clicarBotao(function() {
        resultCalc.textContent = `Contador: ${cont}`;
        cont++;
    });
});