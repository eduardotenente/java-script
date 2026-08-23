/*Renomeação + valor padrão

Considere:

const filme = {
    titulo: "Interestelar",
    diretor: "Christopher Nolan"
};

Faça um destructuring que:

extraia titulo;
extraia diretor, mas armazene-o em uma variável chamada responsavel;
extraia ano, definindo 2026 como valor padrão caso a propriedade não exista.

Depois, exiba todas as informações. */

const filme = {
    titulo: "Interestelar",
    diretor: "Christopher Nolan"
};

const {titulo, diretor: responsavel, ano = 2026} = filme;

console.log(titulo);
console.log(responsavel);
console.log(ano);