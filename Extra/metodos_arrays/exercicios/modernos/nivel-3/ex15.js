/*Filtre apenas números múltiplos de três.*/

const numeros = [12, 23, 10, 2, 15, 50, 30, 3, 91]
const multiplosDeTres = numeros.filter(numero => {
    return numero % 3 == 0
})
console.log(multiplosDeTres)