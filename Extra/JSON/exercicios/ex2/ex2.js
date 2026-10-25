/*Considere uma string JSON que contenha informações sobre um produto: nome, preço, marca e quantidade em estoque.

Requisitos:
- Crie a string JSON respeitando a sintaxe correta.
- Converta a string em um objeto JavaScript.
- Exiba cada propriedade separadamente no console.
- Calcule e exiba o valor total do estoque, considerando o preço unitário e a quantidade disponível. */

const stringJson = '{"nome":"Short","preço":20,"marca":"Nike","quantidadeEstoque":100}';

const objetoJson = JSON.parse(stringJson);

console.log(`Nome do produto: ${objetoJson.nome}`);
console.log(`Preço: R$${objetoJson.preço}`);
console.log(`Marca: ${objetoJson.marca}`);
console.log(`Estoque: ${objetoJson.quantidadeEstoque}`);

let valorTotal = objetoJson.quantidadeEstoque * objetoJson.preço;
console.log(`Valor total do estoque: R$${valorTotal}`);