/*Calcule a média dos números utilizando reduce() */

const numeros = [10, 20, 40, 100, 23, 89]
let contador = 0
const média = numeros.reduce((total, numero, contador) => {
    contador++
    return total + numero
})
console.log(média)
let media = média / contador
console.log(media)