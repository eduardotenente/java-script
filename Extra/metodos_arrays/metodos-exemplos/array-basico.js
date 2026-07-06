let numeros = [1, 2, 3]
let frutas = ["Maçã", "Banana", "Uva"]
let nomes = ["Ana", "Eduardo", "Gabriel"]

console.log('---------- Frutas ----------')
frutas.pop()
console.log(frutas)
frutas.push("Morango")
console.log(frutas)
frutas.shift()
console.log(frutas)
frutas.unshift("Laranja")
console.log(frutas)
console.log(frutas.length)
console.log(frutas.indexOf("Banana"))

console.log('---------- Nomes ----------')
console.log(nomes.includes("Eduardo"))
console.log(nomes)
console.log(nomes.reverse())

console.log('---------- Números ----------')
console.log(numeros)
numeros.unshift(0)
numeros.push(4)
console.log(numeros)
console.log(numeros.reverse())
console.log(numeros.indexOf(3))