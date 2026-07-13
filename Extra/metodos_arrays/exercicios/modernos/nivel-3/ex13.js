/*Crie um vetor de preços.

Filtre apenas valores acima de R$100.*/

const preços = [100, 200, 12, 5, 101]
const preçosAcimaDeCem = preços.filter(preço => {
    return preço > 100
})
console.log(preçosAcimaDeCem)