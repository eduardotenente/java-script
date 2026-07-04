let idade = 10

function dobrarIdade(idadeParaDobrar) {
    return idadeParaDobrar * 2
};
console.log(`Dobro da idade: ${dobrarIdade(idade)}`);
console.log('--------------------')

const triplicarIdadeArrow = idadeParaTriplicarArrow => idade * 3
// 1 parâmetro: não precisa dos "( )"
// Retorna uma expressão, logo não precisa de "{ }" e "return"

console.log('Idade triplicada: ' + triplicarIdadeArrow(idade))
console.log('--------------------')

const soma = (a, b) => a + b
console.log(`Soma: ${soma(5, 3)}`)
console.log('--------------------')

let somaDosTermos = 20
let numeroDeTermos = 4
const media = (somatorio, termos) => somatorio / termos
console.log(`Média: ${media(somaDosTermos, numeroDeTermos)}`)