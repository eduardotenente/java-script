// Crie uma arrow function que receba a largura e a altura de um retângulo e retorne sua área.

const largura = Math.floor(Math.random() * 50 + 1)
const altura = Math.floor(Math.random() * 50 + 1)

const areaDoRetangulo = (width, height) => width * height

console.log(`Largura do retângulo: ${largura}cm`)
console.log(`Altura do retângulo: ${altura}cm`)
console.log(`Área do retângulo: ${areaDoRetangulo(largura, altura)}cm²`)