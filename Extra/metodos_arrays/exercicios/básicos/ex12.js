/*
Crie um vetor contendo números inteiros.

Peça outro número e utilize includes() para verificar se ele existe.*/

const numeros = [1, 43, 24, 22, 8, 2100]
console.log(numeros)

console.log('Adicionando mais números')
numeros.push(67)
console.log(numeros)

console.log('Existe o número 53?')
if(numeros.includes(53)) {
    console.log('Está incluído!')
} else {
    console.log('Este número não existe!')
}