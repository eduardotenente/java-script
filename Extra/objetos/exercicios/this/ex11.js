/*Crie um objeto usuario contendo:

nome
idade

Adicione um método que exiba uma mensagem de saudação utilizando os dados do objeto. */

let usuario = {
    nome: "Eduardo",
    idade: 20,
    saudacao: function(){ 
        console.log(`Sr. ${this.nome}`);
    }
}

usuario.saudacao();