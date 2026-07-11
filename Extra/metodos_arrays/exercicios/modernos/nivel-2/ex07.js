/*
Crie um vetor de nomes.

Retorne um novo vetor contendo todos os nomes em letras maiúsculas.*/

const nomes = ['Eduardo', 'Leonardo', 'Luka', 'Ricardo']
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase())
console.log(nomesMaiusculos)