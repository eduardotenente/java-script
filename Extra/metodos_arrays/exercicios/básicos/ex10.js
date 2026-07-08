/*
Crie uma fila de pessoas.

Realize as seguintes operações:

adicionar uma pessoa no final;
adicionar outra no início;
remover a primeira;
remover a última.

Mostre a fila após cada operação.*/

let fila = ['Eduardo', 'Luka', 'Heloíza']
console.log(fila)
fila.push('Nini')
console.log(fila)
fila.unshift('Cleo')
console.log(fila)
fila.shift()
console.log(fila)
fila.pop()
console.log(fila)