/*Filtre palavras com mais de cinco letras.*/

const palavras = ['Salsicha', 'Gato', 'Arroz', 'Árvore', 'Pato']
const palavrasFiltradas = palavras.filter(palavra => {
    return palavra.length > 5
})
console.log(palavrasFiltradas)