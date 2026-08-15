/*Crie um objeto com pelo menos cinco propriedades diferentes.

Exiba a quantidade total de propriedades existentes. */

const usuario = {
    nome: "Pedro Carvalho de Souza",
    CPF: "023.874.291-00",
    email: "pedrinCvlSouza@gmail.com",
    senha: "PeCaSo874",
    maioridade: true
};

console.log(Object.keys(usuario).length); 
// Conta a quantidade de propriedades

/* Outras propriedades:

    Object.values(obj).length: Conta a quantidade de valores do objeto.
    
    Object.entries(obj).length: Conta a quantidade de pares chave/valor.
*/