/*Crie um objeto calculadora contendo dois números e um método que retorne a soma desses valores. */

let calculadora = {
    primeiroNumero: Math.floor(Math.random() * 99 + 1),
    SegundoNumero: Math.floor(Math.random() * 99 + 1),
    soma: function() {
        let total = this.primeiroNumero + this.SegundoNumero;
        console.log(`A soma entre ${this.primeiroNumero} e ${this.SegundoNumero} é igual a ${total}`);
    }
};

calculadora.soma();