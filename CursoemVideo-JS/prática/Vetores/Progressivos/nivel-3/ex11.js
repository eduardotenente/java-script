/* Crie um vetor com 5 números e conte quantos são maiores que a média. */

var vetor = [43, 70, 24, 91, 15]
var c = 1
var soma = 0

console.log('--------------------')
for(let pos in vetor) {
    var soma = soma + vetor[pos]
    c++
    console.log(vetor[pos])
}
var M = soma / c
console.log('--------------------')

console.log(`Média: ${M}`)
for(let pos in vetor) {
    if (vetor[pos] > M) {
        console.log(`O valor ${vetor[pos]} é maior que a Média ${M} !!!`)
    }
}