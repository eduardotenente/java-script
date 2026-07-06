/* 
    Use forEach() para mostrar todos os números.
    Use map() para criar um novo array com o triplo de cada número.
    Use filter() para obter apenas os números maiores que 7.
    Use find() para encontrar o primeiro número maior que 9.
    Use some() para verificar se existe algum número par.
    Use every() para verificar se todos os números são maiores que 1.
    Use reduce() para calcular a soma de todos os números.
*/
const numeros = [2, 5, 8, 10, 15]

const mostrarVetor = numeros.forEach(numero => console.log(numero))
const triplicarVetor = numeros.map(numero => numero * 3)
console.log(triplicarVetor)
const maioresQueSete = numeros.filter(numero => numero > 7)
console.log(maioresQueSete)
const maiorQueNove = numeros.find(numero => numero > 9)
console.log(maiorQueNove)
const NumeroPar = numeros.some(numero => numero % 2 == 0)
console.log(NumeroPar)
const maiorQueUm = numeros.every(numero => numero > 1)
console.log(maiorQueUm)
const soma = numeros.reduce((total, numero) => {
    return total + numero
})
console.log(soma)