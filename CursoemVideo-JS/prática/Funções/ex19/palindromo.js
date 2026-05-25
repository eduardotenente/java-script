// Crie uma função palindromo que receba uma palavra e retorne true
//  se ela for um palíndromo ou false caso contrário.

let string = 'reviver'

function inverterString(stringInvertida) {
    let resultado = ""
    for(let i = stringInvertida.length - 1; i >= 0; i--) {
        resultado += stringInvertida[i]
    }
    if(resultado == string) {
        return (true + ' -> ' + resultado)
    } else {
        return false + ' -> ' + resultado
    }
}

console.log(inverterString(string))