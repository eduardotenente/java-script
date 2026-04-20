/* Crie um vetor com 5 números e substitua valores negativos por 0. */

var num = [91, -100, 23, -4, 2]
console.log('--------------------')
for(let pos in num) {
    if (num[pos] < 0) {
        num[pos] = 0
        console.log(num[pos], '- Negativo substituído por ZERO')
    } else {
        console.log(num[pos])
    }
}
console.log('--------------------')