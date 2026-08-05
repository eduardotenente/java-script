/*Crie uma função verificarIdade(idade, callback) que envie para a callback se a pessoa é maior ou menor de idade. */
const idade = Math.floor(Math.random() * 80 + 1);

function exibir(maioridade) {
    if(maioridade == true) {
        console.log(`Maior de idade!`);
        console.log(`Idade verificada: ${idade}`);
    } else {
        console.log(`Menor de idade!`);
        console.log(`Idade verificada: ${idade}`);
    }
};

function verificarIdade(i, cb) {
    if(i >= 18) {
        return cb(true);
    } else {
        return cb(false);  
    };
};

verificarIdade(idade, exibir);