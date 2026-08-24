/*Considere o seguinte objeto:

const empresa = {
    nome: "Tech Solutions",
    endereco: {
        cidade: "Rio de Janeiro",
        estado: "RJ"
    }
};

Utilize object destructuring para obter:
o nome da empresa;
a cidade;
o estado.

O desafio é acessar as propriedades de endereco utilizando destructuring, sem fazer acessos como:
empresa.endereco.cidade */

const empresa = {
    nome: "Tech Solutions",
    endereco: {
        cidade: "Rio de Janeiro",
        estado: "RJ"
    }
};

const {nome} = empresa;
const {cidade, estado} = empresa.endereco;

console.log(`Nome da empresa: ${nome}`);
console.log(`Estado da empresa: ${estado}`);
console.log(`Cidade da empresa: ${cidade}`);