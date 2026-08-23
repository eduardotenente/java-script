/*Considere o objeto:

const jogador = {
    nome: "Lucas",
    nivel: 15
};

Utilize object destructuring para extrair:

nome
nivel
pontuacao

A propriedade pontuacao não existe no objeto.

Defina um valor padrão de 0 para pontuacao caso ela não exista.

Depois, exiba as três informações no console. */

const jogador = {
    nome: "Lucas",
    nivel: 15
};

const {nome, nivel, pontuacao = 0} = jogador;

console.log(`Nome: ${nome}`);
console.log(`Nivel: ${nivel}`);
console.log(`Pontuação: ${pontuacao}`);