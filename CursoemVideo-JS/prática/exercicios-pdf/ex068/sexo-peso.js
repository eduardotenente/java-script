/*
    Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura 
    “para”. No final, mostre na tela: 
    a) Quantas mulheres foram cadastradas 
    b) Quantos homens pesam mais de 100Kg 
    c) A média de peso entre as mulheres  
    d) O maior peso entre os homens
*/
var mulheres = 0
var HomensPesados = 0
var soma = 0

for(var c = 1; c <= 8; c++) {
    console.log(`Cadastro ${c}:`)
    let peso = Math.floor(Math.random() * 120 + 1) 
    if (c % 2 == 0) {
        var sexo = 'F'
    } else {
        var sexo = 'M'
    }
    if(sexo == 'F') {
        console.log('Sexo: Feminino')
    } else {
        console.log('Sexo: Masculino')
    }
    console.log(`Peso Corporal: ${peso}Kg`)

    if(sexo == 'F') {
        mulheres++
    }
    if(sexo == 'M' && peso > 100) {
        HomensPesados++
    }
    if(sexo == 'M') {
        let maior = peso
    }
    var soma = soma + peso
    console.log("---------------------------------")
}

let média = soma / c
console.log(`Mulheres cadastradas: ${mulheres}`)
console.log(`Homens com mais de 100Kg: ${HomensPesados}`)
console.log(`Média do peso entre os homens: ${média}Kg`)
console.log(`Soma do peso: ${soma}Kg`)