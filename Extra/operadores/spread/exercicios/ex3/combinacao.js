/*Crie dois objetos:

pessoa:

nome
idade

contato:

email
telefone

Crie um terceiro objeto chamado cadastro utilizando o Spread Operator para juntar as propriedades dos dois objetos. */

const pessoa = {
    nome: "Eduardo",
    idade: 19
};

const contato = {
    email: "eduardo123@gmail.com",
    telefone: "32-2438-0289"
};

const cadastro = {
    ...pessoa,
    ...contato
};

console.log(cadastro);