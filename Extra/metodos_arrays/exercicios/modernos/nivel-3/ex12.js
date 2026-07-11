/*Filtre apenas pessoas com idade maior ou igual a 18 anos.*/

const idades = [10, 23, 6, 13, 15, 20, 19, 20, 53, 42, 9, 4, 17, 16, 18]
const maiorDeIdade = idades.filter(idade => idade >= 18)
console.log(maiorDeIdade)