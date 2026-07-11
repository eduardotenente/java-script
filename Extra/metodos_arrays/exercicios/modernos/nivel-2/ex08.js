/*
Crie um vetor contendo preços.

Utilize map() para aplicar um aumento de 10%.*/

const preços = [12, 15, 24, 99]
let valorFinal = 0
let aumento = 0
const preçosAumentados = preços.map(preço => {
    aumento = (preço / 100) * 10
    valorFinal = preço + aumento 
    return valorFinal
}) 
console.log(preçosAumentados)