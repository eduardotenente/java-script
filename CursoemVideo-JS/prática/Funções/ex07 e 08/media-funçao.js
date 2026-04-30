/* Crie uma função media que receba três notas e retorne a média. */

function Média(nota1, nota2, nota3) {
    if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
        console.log('Valores Inválidos!!!')
    } else {
        let media = (nota1 + nota2 + nota3) / 3
        if (media >= 7) {
            return console.log(`APROVADO, MÉDIA: ${media}`)
        } else if (media >=5 && media < 7) {
            return console.log(`RECUPERAÇÃO, MÉDIA: ${media}`)
        } else if (media < 5) {
            return console.log(`REPROVADO, MÉDIA: ${media}`)
        }
    }
}

console.log(
    Média(
        9.1, 10, 4.7
    )
)