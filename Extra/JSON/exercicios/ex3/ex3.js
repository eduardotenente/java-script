/*
Crie uma string JSON que represente uma lista com pelo menos cinco produtos. Cada produto deverá possuir id, nome, preco e categoria.

Requisitos:
- Converta a string JSON em um array de objetos JavaScript.
- Percorra o array e exiba os dados de cada produto.
- Conte quantos produtos existem na lista.
- Calcule o preço médio dos produtos cadastrados. */

const json = '{"lista":[{"id":"primeiro","nome":"arroz","preco":20,"categoria":"alimento"},{"id":"segundo","nome":"feijão","preco":15,"categoria":"alimento"}]}';

const arrayJson = JSON.parse(json);

let contador = 0

try {
    for (let pos in arrayJson) {
        console.log(arrayJson[pos]);
        contador++
        console.log(contador);
    };
} catch (error) {
    console.error("O JSON é inválido!")
};

const precoMedio = (arrayJson[0].preco + arrayJson[1].preco) / 2
console.log(precoMedio);