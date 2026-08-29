/*Crie um objeto chamado produto contendo:

nome
preco

Utilize o Spread Operator para criar um novo objeto chamado produtoCompleto, adicionando também a propriedade categoria.

O objeto original não deve ser alterado. */

const produto = {
    nome: "Arroz 1kg",
    preco: 6.99
};

const produtoCompleto = {
    ...produto,
    categoria: "Alimento"
};

console.log(produto);
console.log();
console.log(produtoCompleto);