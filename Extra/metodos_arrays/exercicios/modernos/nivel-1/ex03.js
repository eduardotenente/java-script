/*
Crie um vetor contendo números.

Utilize forEach() para calcular a soma de todos eles.*/

let numeros = [43, 23, 84, 0, 1]
let somatorio = 0
let somaTotal = 0
numeros.forEach(numero => {
    somatorio = somatorio + numero
    somaTotal = somatorio
    return somaTotal
})
console.log(somaTotal)