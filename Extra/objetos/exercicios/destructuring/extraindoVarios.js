/*Crie um objeto produto com as propriedades:

nome
preco
categoria

Utilize object destructuring para extrair as três propriedades e depois exiba cada uma delas no console. */

const produto = {
    nome: "Arroz",
    preco: 100,
    categoria: "Alimento"
};

const {nome: nomeDoProduto, preco, categoria} = produto;

console.log(`Nome: ${nomeDoProduto}`);
console.log(`Preço: ${preco}`);
console.log(`Categoria do produto: ${categoria}`);