/*Encontre o primeiro número negativo do vetor.*/

const numeros = [23, 0, 24, 12, 9000, -1, -123]
const numeroNegativo = numeros.find(numero => numero < 0)
console.log(numeroNegativo)