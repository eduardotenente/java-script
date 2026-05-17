/*
    Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando 
    no final: 
    a) Qual foi a média de altura do grupo 
    b) Quantas pessoas pesam mais de 90Kg 
    c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m 
    d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.
*/
var c = 1
var somaAltura = 0
var maisDe90Kg = 0
var BaixoLeve = 0
var AltoPesado = 0

while(c <= 7) {
    console.log(`${c}º Pessoa:`)
    let peso = Math.floor(Math.random() * 120 + 1)
    let altura = Math.random() * 3
    console.log(`Peso: ${peso}Kg`)
    console.log(`Altura: ${altura}m`)
    console.log('-------------------------')
    var somaAltura = Number(somaAltura) + altura
    if (peso > 90) {
        maisDe90Kg++
    }
    if (peso < 50 && altura < 1.60) {
        BaixoLeve++
    }
    if (peso > 100 && altura > 1.90) {
        AltoPesado++
    }
    c++
}
let media = Number(somaAltura) / c
console.log(`Média da altura: ${media} metros`)
console.log(`Pessoas com mais de 90Kg: ${maisDe90Kg}`)
console.log(`Pessoas com menos de 50Kg e 1.60m: ${BaixoLeve}`)
console.log(`Pessoas com mais de 100Kg e 1.90m: ${AltoPesado}`)