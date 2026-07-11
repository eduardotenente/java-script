/* Filtre apenas os números pares.*/

const numeros = [243, 1, 0, 9234, 10, 22, 5, 7, 21]
const numerosPares = numeros.filter(numero => numero % 2 == 0)
console.log(numerosPares)