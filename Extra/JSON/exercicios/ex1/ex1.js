/*Crie um objeto JavaScript que represente um usuário com as propriedades nome, idade, email e cidade.

Requisitos:
- Preencha as propriedades com dados fictícios.
- Converta o objeto JavaScript para uma string JSON utilizando o método apropriado.
- Exiba o resultado no console.
- Identifique a diferença entre o objeto original e a string gerada. */

const usuario = {
    nome: "dudu",
    idade: 20,
    email: "dudu123@gmail.com",
    cidade: "Rio de Janeiro"
};

const usuarioJson = JSON.stringify(usuario);
console.log(usuarioJson);

/*
    Diferença: as chaves possuem aspas duplas entre elas.
*/