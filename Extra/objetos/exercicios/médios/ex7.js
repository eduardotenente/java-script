/*Crie um objeto usuario contendo:

nome
email

Verifique se a propriedade senha existe no objeto. */

const usuario = {
    nome: "Geraldo Almeida da Silva",
    email: "geraldo127@gmail.com"
};

console.log(usuario);
if(usuario.senha == true) {
    console.log("Senha Existe!")
} else {
    console.log("Senha não definida!")
};