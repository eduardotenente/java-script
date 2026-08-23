/*Considere o objeto:

const pessoa = {
    nome: "Carlos",
    idade: 25,
    cidade: "Rio de Janeiro",
    profissao: "Programador"
};

Utilize object destructuring para extrair somente nome e profissao.

Depois, exiba as duas informações no console. */

const pessoa = {
    nome: "Eduardo",
    idade: 19, 
    cidade: "RJ",
    profissao: "Programador"
};

const {nome, profissao} = pessoa;

console.log(`Nome da pessoa: ${nome}`);
console.log(`Profissão: ${profissao}`);