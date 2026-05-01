/*
Crie uma função calcularIMC que receba peso e altura e retorne o IMC. 
Crie uma função classificarIMC que receba o IMC e retorne a classificação (baixo peso, normal, sobrepeso, etc.) 
-------------------------------------------------------
Abaixo do peso: IMC menor que 18,5
Peso Saudável/Normal: IMC entre 18,5 e 24,9
Sobrepeso: IMC entre 25,0 e 29,9
Obesidade Grau I: IMC entre 30,0 e 34,9
Obesidade Grau II: IMC entre 35,0 e 39,9
Obesidade Grau III (Mórbida): IMC 40,0 ou superior
-------------------------------------------------------
*/

var Kg = 10
var metros = 1.67
function calcularIMC(peso, altura) {
    return peso / (altura^2)
}
if (Kg < 0 || metros < 0) {
    ErrorEvent(`Coloque valores válidos e tente novamente! Kg e metros devem ser valores maior que 0 .`)
} else {
    console.log(`O IMC de ${Kg}kg e ${metros}m é: ${calcularIMC(Kg, metros)}`)
    var IMC = calcularIMC(Kg, metros)
}

function classificarIMC(IndMasCorp) {
    if (IndMasCorp < 18.5) {
        return 'Abaixo do peso'
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        return 'Peso Saudável'
    } else if (IMC >= 25 && IMC <= 29.9) {
        return 'Sobrepeso'
    } else if (IMC >= 30 && IMC <= 34.9) {
        return 'Obesidade Grau I'
    } else if (IMC >= 35 && IMC <= 39.9) {
        return 'Obesidade Grau II'
    } else if (IMC >= 40) {
        return 'Obesidade Grau III (Mórbida)'
    }
}
console.log(`Você está classificado como: ${classificarIMC(IMC)}`)