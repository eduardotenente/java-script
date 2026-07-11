/*
Crie um vetor de números.

Utilize map() para gerar um novo vetor contendo os quadrados.*/

const numeros = [2, 4, 10, 25, 5]
const quadrados = numeros.map(numero => numero * numero)
console.log(quadrados)