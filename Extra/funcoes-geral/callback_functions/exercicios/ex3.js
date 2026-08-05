/*Crie uma função que receba um número e uma callback. A função deve calcular o dobro do número e enviar esse valor para a callback. */

const valor = 14

function exibir(res){
    console.log(`Dobro de |${valor}| é: ${res}`)
};

function dobro(num, cb) {
    let numEmDobro = num * 2;
    cb(numEmDobro);
};

dobro(valor, exibir);