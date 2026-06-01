/*
    Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em 
    um vetor. No final, mostre:  
    a) Qual é a média da turma 
    b) Quantos alunos estão acima da média da turma 
    c) Qual foi a maior nota digitada 
    d) Em que posições a maior nota aparece
*/

let notas = [0, 0, 0, 0, 0, 0, 0, 0]
let c = 1
var soma = 0
var AcimadaMédia = 0
var maior = 0
var posição = 0

console.log('---------- Notas -----------')
for(let pos in notas) {
    notas[pos] = Math.floor(Math.random() * 10)
    console.log(`  Aluno ${c}:   ${notas[pos]}`)
    soma = soma + notas[pos]
    if(notas[pos] > maior) {
        maior = notas[pos]
        posição = c
    }
    c++
}
console.log('---------- Notas -----------')

let média = soma / c
for(let pos in notas) {
    if(notas[pos] > média) {
        AcimadaMédia++
    }
}

console.log()
console.log('---------- Resultados ----------')
console.log(`A média da turma é: ${média}`)
console.log(`Alunos acima da média da turma: ${AcimadaMédia}`)
console.log(`Maior nota: ${maior}`)
console.log(`Posição da maior nota: ${posição}`)
console.log('--------------------------------')