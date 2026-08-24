/*Considere o seguinte objeto:

const cliente = {
    nome: "Ana",
    idade: 28,
    contato: {
        email: "ana@email.com",
        telefone: "99999-9999"
    },
    endereco: {
        cidade: "Niterói",
        estado: "RJ"
    }
};

Utilizando object destructuring, faça o seguinte:

Extraia nome e idade.
Extraia email e telefone de contato.
Extraia cidade e estado de endereco.
Renomeie nome para nomeCliente.
Crie um valor padrão para uma propriedade chamada pais, utilizando "Brasil" caso ela não exista.
Exiba todas as informações organizadamente no console.

Regra do desafio: tente resolver tudo utilizando destructuring, evitando acessar diretamente as propriedades com cliente.nome, cliente.contato.email, etc. */

function CadastrarCliente() {
    return cliente = {
        nome: "Ana de Souza Carvalho",
        idade: 28,
        contato: {
            email: "ana@email.com",
            telefone: "99999-9999"
        },
        endereco: {
            cidade: "Niterói",
            estado: "RJ"
        }
    };
}

CadastrarCliente();
const {nome: nomeCliente, idade, pais = "Brasil"} = cliente;
const {email: emailCliente, telefone} = cliente.contato;
const {cidade, estado} = cliente.endereco;

console.log("--- Informações Básicas ---")
console.log(`Nome do Cliente: ${nomeCliente}`);
console.log(`Idade do Cliente: ${idade}`);
console.log(`Nacionalidade: ${pais}`);
console.log("--- Contato ---")
console.log(`E-mail do cliente: ${emailCliente}`);
console.log(`Telefone para contato: ${telefone}`);
console.log("--- Endereço ---")
console.log(`Estado: ${estado}`);
console.log(`Cidade: ${cidade}`);
console.log("----------------")