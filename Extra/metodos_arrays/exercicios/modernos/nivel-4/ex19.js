/*Localize um produto pelo código.*/

const produtos = ['guarda-chuvas', 'Maçã', 'Lápis']
const produtoLocalizaçao = produtos.find(produto => produto == 'Lápis')
console.log(produtoLocalizaçao)