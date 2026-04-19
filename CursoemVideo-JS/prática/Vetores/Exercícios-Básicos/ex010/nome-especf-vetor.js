/* Crie um vetor com 5 nomes e verifique se um nome específico existe no vetor. */

var nome = ['Eduardo', 'Beatriz', 'Nicolly', 'Emilly', 'Ana Clara']
for(let pos in nome) {
    console.log(nome[pos])
    if (nome[pos] == 'Eduardo') {
        console.log('Nome Encontrado no Sistema!')
    }
}