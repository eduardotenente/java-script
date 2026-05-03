/* Crie uma função tabuada que receba um número e exiba sua tabuada de 1 a 10. */

function tabuada(n) {
    for(let c = 1; c <= 10; c++) {
        let multiplicação = n * c
        console.log(`${n} x ${c} = ${multiplicação}`) 
    }
}

console.log(tabuada(6))