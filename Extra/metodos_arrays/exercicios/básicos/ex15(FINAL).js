/*
Crie um vetor vazio.
Realize as seguintes ações:

adicionar três elementos;
remover o primeiro;
adicionar outro no início;
remover o último;
mostrar:
vetor final;
quantidade de elementos;
se determinado elemento existe utilizando includes().*/

let array = []
array.push(-35)
array.push(54)
array.push(645)
console.log(array)
array.shift()
console.log(array)
array.unshift(0)
console.log(array)
array.pop()
console.log(array)

console.log('-----------------------')
console.log(`Vetor Final: ${array}`)
console.log(`Quantidade de elementos: ${array.length}`)
console.log(`Inclui o número 54? ${array.includes(54)}`)