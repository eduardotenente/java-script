/*
Crie um vetor de idades.

Utilize forEach() para contar quantas pessoas possuem 18 anos ou mais.*/

const idades = [20, 15, 19, 18, 72, 56, 31, 5, 11]
let maioridade = 0
console.log(idades)

idades.forEach(idade => {
    if(idade >= 18) {
        maioridade++
    }
})
console.log(`Pessoas maiores de 18: ${maioridade}`)