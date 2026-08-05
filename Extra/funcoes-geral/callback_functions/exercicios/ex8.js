/*Crie uma função que receba nome, sobrenome e uma callback. A callback deverá unir os dois nomes e exibir o resultado. */

const nome = "José";
const sobrenome = "Oliveira";

function nomeCompleto(primeiroNome, segundoNome){
    console.log(`Nome completo: ${primeiroNome} ${segundoNome}.`)
};

function nomeJuncao(n, sn, cb) {
    cb(n, sn);
};

nomeJuncao(nome, sobrenome, nomeCompleto);