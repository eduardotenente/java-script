/* Crie um vetor com 7 números e calcule a média dos valores. */

var vet = [24, 242, 23, 94, 12, 7, 10]
vet.sort()
var soma = 0
var c = 1

console.log(vet)
for (let pos in vet) {
    var soma = soma + vet[pos]
    c++
}
var média = soma / c
console.log(`Média do Vetor: ${média}`)