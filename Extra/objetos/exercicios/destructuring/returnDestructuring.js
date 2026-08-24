/*Crie uma função chamada criarUsuario() que retorne um objeto contendo:

nome
idade
email
ativo

Depois, chame a função e utilize object destructuring para extrair apenas nome, email e ativo.
Por fim, exiba essas informações no console.
Desafio adicional: tente fazer o destructuring diretamente no resultado da chamada da função. */

function criarUsuario(){
    return usuario = {
        nome: "dudu",
        idade: 21,
        email: "duduzin21@gmail.com",
        ativo: true
    };
};

function exibirUsuario({nome, email, ativo}) {
    console.log(`Nome de usuário: ${nome}`);
    console.log(`E-mail de usuário: ${email}`);
    console.log(`Ativo: ${ativo}`);
};

criarUsuario();
exibirUsuario(usuario);