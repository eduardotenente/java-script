/*Crie um objeto chamado aluno contendo as propriedades nome, idade e curso.

Depois, crie um segundo objeto chamado novoAluno utilizando o Spread Operator para copiar todas as propriedades de aluno. */

const aluno = {
    nome: "Eduardo",
    idade: 19,
    curso: "Desenvolvimento Web"
};

const novoAluno = {
    ...aluno
};

console.log(novoAluno);