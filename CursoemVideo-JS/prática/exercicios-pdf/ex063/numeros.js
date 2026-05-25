/*
    Crie um programa usando a estrutura “faça enquanto” que leia vários números. 
    A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na 
    tela: 
    a) O somatório entre todos os valores 
    b) Qual foi o menor valor digitado 
    c) A média entre todos os valores 
    d) Quantos valores são pares
*/
var resposta = 1
var soma = 0
var menor = Infinity
var maior = 0 // Exercício EXTRA
var Par = 0
var Impar = 0 // Exercício EXTRA
let c = 1

do {
    let num = Math.floor(Math.random() * 100 )
    console.log('---------------------------')
    console.log(`${c}º número: ${num}`)
    var soma = soma + num
    if(num < menor) {
        var menor = num
    }
    if(num > maior) {
        var maior = num
    }
    if(num % 2 == 0) {
        Par++
    } else {
        Impar++
    }
    resposta++
    c++
} while(resposta < 10)
let média = soma / c

console.log('---------------------------')
console.log('EXIBINDO RESULTADOS...')   
console.log()
console.log(`Somatório dos números: ${soma}`)
console.log(`Maior número: ${maior}`) // EXTRA
console.log(`Menor número: ${menor}`)
console.log(`Média dos números: ${média}`)
console.log(`Quantidade de números pares: ${Par}`)
console.log(`Quantidade de números impares: ${Impar}`) // EXTRA