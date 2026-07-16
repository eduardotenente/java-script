/*Utilize reduce() para somar todos os números. */

const numeros = [1, 83, 0, 12, 100]
const soma = numeros.reduce((total, numero) => total + numero)
console.log(soma)