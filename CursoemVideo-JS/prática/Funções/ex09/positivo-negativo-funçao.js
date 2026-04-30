/* Crie uma função positivoNegativo que receba um número e retorne se ele é "Positivo", "Negativo" ou "Zero". */

function positivoNegativo(n) {
    if (n > 0) {
        return console.log(`${n} é positivo`)
    } else if(n < 0) {
        return console.log(`${n} é negativo`)
    } else { 
        return console.log(`${n} é igual a ZERO`)
    }
}

console.log(positivoNegativo(-432))