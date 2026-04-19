/* Crie um vetor com 9 números e exiba o menor valor. */

var num = [5, 32, 13, 324, 123, 92, 12, 0, -234]
var menor = Infinity /* Valor Infinito */
for (let pos in num) {
    console.log(num[pos])
    if (num[pos] < menor) {
        var menor = num[pos]
    }
}
console.log(`Menor valor: ${menor}`)