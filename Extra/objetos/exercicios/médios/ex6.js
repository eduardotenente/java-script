/* Crie um objeto vendas contendo:

janeiro
fevereiro
março

Calcule e exiba a soma total das vendas. */

var vendas = {
    janeiro: 15391.12,
    fevereiro: 16120.56,
    março: 16201.91
};

let totalVendas = 0;

console.log(`Vendas de Janeiro: R$${vendas.janeiro}`);
console.log(`Vendas de Fevereiro: R$${vendas.fevereiro}`);
console.log(`Vendas de Março: R$${vendas.março}`);

totalVendas = vendas.janeiro + vendas.fevereiro + vendas. março;
console.log("------------------------------");
console.log(`Total de Vendas: R$${totalVendas}`);
console.log("------------------------------");