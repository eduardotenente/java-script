/*
    Escreva um programa que leia um número qualquer e mostre a tabuada desse 
    número, usando a estrutura “para”. 
    Ex: Digite um valor: 5 
    5 x 1 = 5 
    5 x 2 = 10 
    5 x 3 = 15 ...
*/

let num = Math.floor(Math.random() * 99 + 1)
console.log(`Valor digitado: ${num}`)
console.log('Tabuada:')
for(let c = 1; c <= 10; c++) {
    let multiplicação = num * c
    console.log(`${num} x ${c} = ${multiplicação}`)
}