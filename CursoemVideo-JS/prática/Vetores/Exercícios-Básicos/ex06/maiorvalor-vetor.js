/* Crie um vetor com 5 números e exiba o maior valor. */
var num = [645, 123, 724, -2, 4]
var maior = 0
for(let pos in num) {
    console.log(num[pos])
    if (num[pos] > maior) {
        var maior = num[pos]
    }
}
console.log(`Maior valor: ${maior}`)