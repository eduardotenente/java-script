/*
    Crie um mini sistema com menu que permita ao usuário:
    1. calcular média ✅
    2. verificar número par ✅
    3. gerar tabuada ✅
    4. calcular IMC
    5. inverter palavras ✅

    Use funções separadas para cada funcionalidade.
*/
let nota1 = Math.floor(Math.random() * 10)
let nota2 = Math.floor(Math.random() * 10)
let nota3 = Math.floor(Math.random() * 10)
let aluno = 'Geraldo Marcelo'
function GerarMedia(atividade, teste, prova) {  
    let média = (atividade + teste + prova) / 3
    if(média >= 7) {
        return média + '  [APROVADO!]'
    } else if(média >= 5 && média <= 6.9) {
        return média + '  [RECUPERAÇÃO!]'
    } else if(média < 5) { 
        return média + '  [REPROVADO!]'
    }
}

function verificarPar() {
    for(let c = 1; c <= 10; c++) {
        let num = Math.floor(Math.random() * 100) 
        if(num % 2 == 0) {
            console.log(`${c}º Número: ${num} | É Par!`)
        } else {
            console.log(`${c}º Número: ${num} | É Impar!`)
        }
    }
}

let num = Math.floor(Math.random() * 50)
let numMultiplicar = Math.floor(Math.random() * 50 + 1)
function tabuada(valor, multiplicação) {
    for(let c = 1; c <= multiplicação; c++) {
        let resultado = valor * c
        console.log(`${valor} x ${c} = ${resultado}`)
    }
    return 'Confira a tabuada'
}

let str = 'Sistema'
function inverterString(string) {
    let resultado = ''
    for(let i = str.length - 1; i >= 0; i--) {
        resultado += str[i]
    }
    return resultado
}

console.log(`Média do ${aluno}: ${GerarMedia(nota1, nota2, nota3)}`)
verificarPar()
console.log(`Multiplicar ${num} até ${numMultiplicar}`)
console.log(`Tabuada de ${num} até ${numMultiplicar}: ${tabuada(num, numMultiplicar)}`)
console.log(`Palavra "${str}" invertido -> ${inverterString(str)}`)