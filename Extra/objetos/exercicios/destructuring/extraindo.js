/*Crie um objeto chamado aluno contendo as propriedades nome, idade e curso.

Depois, utilize object destructuring para extrair apenas a propriedade nome e exibi-la no console. */

const aluno = {
    nome: "Eduardo",
    idade: 19,
    curso: "Front-End"
};

const {nome} = aluno;
console.log(nome)