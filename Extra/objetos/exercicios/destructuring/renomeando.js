/*const usuario = {
    nome: "Mariana",
    email: "mariana@email.com",
    idade: 22
};

Utilize object destructuring para extrair a propriedade nome, mas armazene o valor em uma variável chamada nomeUsuario.

Depois, exiba nomeUsuario no console.

Objetivo: praticar a sintaxe de renomeação de propriedades durante o destructuring. */

const usuario = {
    nome: "Mariana",
    email: "marianagrande@gmail.com",
    idade: 25
};

const {nome: nomeUsuario} = usuario;

console.log(`Nome de usuário: ${nomeUsuario}`)