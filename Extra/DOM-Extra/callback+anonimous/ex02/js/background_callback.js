/* Crie uma página contendo um botão e uma <div>.

Ao clicar no botão, execute uma função que receba uma callback.
Utilize uma função anônima como callback para alterar a cor de fundo da <div>.
A função principal não deve alterar a cor diretamente; apenas executar a callback recebida. */

const button = document.querySelector("#btn");
const resultElement = document.querySelector("#resultElement");

function mudarBackground(callback) {
    callback();
}

button.addEventListener('click', function(){
    mudarBackground(function (){
        resultElement.style.background = "pink"
    }); 
});