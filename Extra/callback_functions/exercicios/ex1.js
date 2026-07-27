/*Crie uma função cumprimentar(nome, callback) que receba um nome e execute uma função callback responsável por exibir uma mensagem de boas-vindas. */
const nome = "Eduardo";

function callback(nomeCallback) {
    console.log(`Bem-vindo, ${nomeCallback} !`)
}

function cumprimentar(nomePessoa, cb){
    cb(nomePessoa)
};

cumprimentar(nome, callback);