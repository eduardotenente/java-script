/* Crie um vetor com 8 números e exiba os elementos na ordem inversa. */

var num = [3, 1, 53, 23, 5, 2, 12, 9]
var pos = 7
var c = 1
for(var pos in num) {
    console.log(num[pos])
    var pos = pos - c
}