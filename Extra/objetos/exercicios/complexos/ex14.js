/*Crie um objeto turma contendo:

nome da turma
professor
lista de alunos (vetor)

Exiba todos os alunos cadastrados utilizando uma estrutura de repetição. */

const turma = {
    nomeDaTurma: "Turma 3C",
    professor: "Paulo Oliveira",
    alunos: ["João", "Pedro", "Ana", "Bruna", "Carlos", "Diego", "Esmeralda", "Yago"]
};

console.log(`Nome da Turma: ${turma.nomeDaTurma}`);
console.log(`Professor: ${turma.professor}`);

console.log("-------------------")
console.log("Nome dos Alunos: ")
for(let pos in turma.alunos){
    console.log(turma.alunos[pos]);
}
console.log("-------------------")