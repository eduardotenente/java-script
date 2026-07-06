/*
Crie um vetor representando uma fila de atendimento.

Remova o primeiro cliente utilizando shift() e mostre quem saiu da fila.
*/

let fila = ["Augusto", "Olivia", "Bruna", "João"]
for(let pos in fila) {
    console.log(fila[pos])
}
console.log(`Cliente removido: ${fila.shift()}`)
console.log(fila)