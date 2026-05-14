/*
Uma empresa precisa reajustar o salário dos seus funcionários, dando um 
aumento de acordo com alguns fatores. Faça um programa que leia o salário atual, 
o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa. 
No final, mostre o seu novo salário, baseado na tabela a seguir:

 - Mulheres - menos de 15 anos de empresa: +5% 
 - de 15 até 20 anos de empresa: +12% 
 - mais de 20 anos de empresa: +23% 
 - Homens - menos de 20 anos de empresa: +3% 
 - de 20 até 30 anos de empresa: +13% 
 - mais de 30 anos: 25%
*/

let salarioAtual = 2000
let genero = 'masculino'
let AnosDeTrabalho = 13
console.log(`gênero: ${genero}`)
console.log(`Salário Atual: R$${salarioAtual}`)
console.log(`Anos de Trabalho: ${AnosDeTrabalho}`)

function AumentoSalario() {
    if(genero == 'feminino' && AnosDeTrabalho > 15) {
        var aumento = 5 / 100 * salarioAtual
        var novoSalario = salarioAtual + aumento
        return novoSalario
    } else if(genero == 'feminino' && AnosDeTrabalho >= 15 && AnosDeTrabalho <= 20) {
        var aumento = 12/100 * salarioAtual
        var novoSalario = salarioAtual + aumento
        return novoSalario
    } else if(genero == 'feminino' && AnosDeTrabalho > 20) {
        var aumento = 23 / 100 * salarioAtual
        var novoSalario = salarioAtual + aumento
        return novoSalario
    } else if(genero == 'masculino' && AnosDeTrabalho < 20) {
        var aumento = 3 / 100 * salarioAtual
        var novoSalario = salarioAtual + aumento
        return novoSalario
    } else if(genero == 'masculino' && AnosDeTrabalho >= 20 && AnosDeTrabalho <=30) {
        var aumento = 13 / 100 * salarioAtual
        var novoSalario = salarioAtual + aumento
        return novoSalario
    } else if(genero == 'masculino' && AnosDeTrabalho > 30) {
        var aumento = 25 / 100 * salarioAtual
        var novoSalario = salarioAtual + aumento
        return novoSalario
    }
}

console.log(`Novo salário: R$${AumentoSalario()}`)