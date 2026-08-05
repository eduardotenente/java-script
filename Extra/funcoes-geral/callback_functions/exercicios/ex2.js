/*Crie uma função somar(a, b, callback) que some dois números e envie o resultado para uma callback que o exiba no console. */

function exibirCallback(resultado){
    console.log(`Resultado da soma: ${resultado}`);
};

function soma(a, b, callback){
    var operacao = a + b;
    callback(operacao);
};

soma(2, 10, exibirCallback)