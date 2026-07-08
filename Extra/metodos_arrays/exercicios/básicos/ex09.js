/*
Crie um vetor vazio.

Adicione cinco filmes utilizando push().

Depois remova o último utilizando pop().

Mostre o vetor antes e depois da remoção.*/

let filmes = []
filmes.push('FNAF 1')
filmes.push('FNAF 2')
filmes.push('Gurren Laggan')
filmes.push('O Pacto')
filmes.push('Scott Pilgrim Contra o Mundo')
console.log(`Filmes: ${filmes}`)
console.log('Retirando um filme')
filmes.pop()
console.log(`Lista atual: ${filmes}`)