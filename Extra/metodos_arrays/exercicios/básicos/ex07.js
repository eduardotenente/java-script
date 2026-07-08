/* 
Crie um vetor contendo alguns produtos.

Verifique se um determinado produto existe utilizando includes().

Mostre uma mensagem adequada para cada caso.*/

const produtos = ['Creatina', 'Whey Protein', 'Pré-treino']
console.log(`Produtos: ${produtos}`)
console.log('- Produto requisitado: Camisa')

if(produtos.includes('Camisa')) {
    console.log('~ Este produto está em estoque!')
} else {
    console.log('~ Este produto não existe!')
}