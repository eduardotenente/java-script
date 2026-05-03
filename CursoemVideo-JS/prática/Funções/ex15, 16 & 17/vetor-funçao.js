/*
    Crie uma função somarArray que receba um array de números e retorne a soma de todos os elementos.
    Crie uma função maiorDoArray que receba um array de números e retorne o maior valor.
    Crie uma função contarPares que receba um array de números e retorne quantos são pares.
 */
var soma = 0
var maior = 0
var Par = 0
var array = [2, 3, 8, 23, 5, 90]

function Vetor(vetor) {
    for(let pos in vetor) {
        if (maior > vetor[pos]) {
            var maior = vetor[pos]
        }
        if (vetor[pos] % 2 == 0) {
            Par++
        }
        var soma = soma + vetor[pos]
    }
}

console.log(`Soma do Array: ${Vetor(array)}`)
console.log(`Maior número do Array: ${maior}`)
console.log(`Números Pares: ${Par}`)