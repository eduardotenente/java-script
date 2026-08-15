/*Crie um objeto contaBancaria com:

titular
saldo

Adicione métodos para:

depositar valores
sacar valores
consultar saldo */

let contaBancaria = {
    titular: "José da Silva",
    saldo: 3205,
    depositarValores: function() {
        console.log(`Valor depositado: R$ 1000`);
        this.saldo += 1000;
    },
    sacarValores: function() {
        console.log(`Valor retirado: R$ 3500`);
        this.saldo -= 3500;
    },
    consultarSaldo: function() {
        console.log(`Saldo atual: R$ ${this.saldo}`);
    }
};
console.log(`Titular da conta: ${contaBancaria.titular}`);
console.log(`Saldo da conta: R$ ${contaBancaria.saldo}`);
contaBancaria.depositarValores();
contaBancaria.sacarValores();
contaBancaria.consultarSaldo();