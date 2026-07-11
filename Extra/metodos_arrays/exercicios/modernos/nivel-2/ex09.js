/*Crie um vetor de palavras.

Crie outro vetor contendo apenas a quantidade de letras de cada palavra.*/

const palavras = ['Caderno', 'Lápis', 'Laranja', 'Saiba', 'Olá']
const quantidadeDeLetras = palavras.map(palavra => {
    let letras = palavra.length
    return letras
})
console.log(quantidadeDeLetras)