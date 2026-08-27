/* 
    O spread operator (operador de espalhamento),
representado por três pontos (...),
é um recurso do JavaScript que permite expandir elementos
de objetos iteráveis (como arrays, strings ou objetos)
em locais que esperam múltiplos elementos ou propriedades 
*/

let numbers = [1, 2, 3, 4, 5];
let minimum = Math.min(...numbers);
let maximum = Math.max(...numbers);
console.log(minimum);
console.log(maximum);


let fruits = ["maçã", "banana", "laranja"];
let vegetables = ["cenoura", "batata", "alface"];
let food = [...fruits, ...vegetables];
console.log(food);


let usuario = {
    nome: "Eduardo",
    idade: 19,
    profissao: "Programador"
};
let caracteristicas = {
    qualidade: "esforçado",
    defeitos: "Precipitado"
};
const pessoa = {
    ...usuario,
    ...caracteristicas
};
console.log(pessoa)