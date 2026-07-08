/*
Crie um vetor contendo animais.

Depois de adicionar mais dois utilizando push(), mostre:

o vetor;
a quantidade total utilizando length.*/

let animais = ['Gato', 'Cachorro', 'Pato', 'Leão']
animais.push('Elefante')
animais.push('Macaco')

for(let pos in animais) {
    console.log(animais[pos])
}
console.log("-------------------------------")
console.log(`Quantidade total de animais: ${animais.length}`)