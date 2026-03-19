var soma_par = 0
var soma_impar = 0

for (var c = 1; c <= 10; c++) {
    if (c % 2 == 0) {
        console.log(`${c} é PAR!`)
        soma_par++
    } else {
        console.log(`${c} é IMPAR!`)
        soma_impar++
    }
}

console.log(`Números Pares: ${soma_par}`)
console.log("-------------------------------")
console.log(`Números Impares: ${soma_impar}`)