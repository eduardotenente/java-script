/*
Crie um vetor de números.

Utilize forEach() para descobrir o maior valor.*/

const numeros = [3, 9, 0, 10, 23, 1000]
let maior = 0

numeros.forEach(numero => {
    if(numero > maior) {
        maior = numero
    }
})
console.log(`Maior valor: ${maior}`)