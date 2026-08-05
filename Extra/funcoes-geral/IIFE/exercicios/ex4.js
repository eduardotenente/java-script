// Crie uma IIFE que declare uma variável interna e exiba seu valor. Depois, tente acessar essa variável fora da função para observar o comportamento.

;(function(){ 
    const valor = 1000
    console.log(valor)
})()

console.log(`Declaração externa: ${valor}`)
// Variavel com escopo local dentro da função.