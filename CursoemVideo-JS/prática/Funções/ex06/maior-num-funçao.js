/* Crie uma função maiorNumero que receba dois números e retorne o maior deles. */

function maiorNumero(n1, n2) {
    if (n1 > n2) {
        return console.log(`${n1} é maior que ${n2}!`)
    } else if (n2 > n1) {
        return console.log(`${n2} é maior que ${n1}!`)
    }
}

console.log(
    maiorNumero(321, 20)
)