/* Crie um vetor com 5 números e conte quantos são pares. */

var num = [1, 2, 148, 5, 0]
var par = 0
for(let pos in num) {
    console.log(num[pos])
    if (num[pos] % 2 == 0) {
        var par = par + 1
    }
}
console.log(`Números Pares: ${par}`)