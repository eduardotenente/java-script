/* Crie um vetor com 6 números e exiba a soma de todos os elementos. */

var num = [4, 3, 6, 2, 7, 5]
var soma = 0
for(let pos in num) {
    var soma = soma + num[Number(pos)]
}
console.log(`Soma dos Valores: ${soma}`)