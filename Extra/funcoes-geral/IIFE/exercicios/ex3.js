// Crie uma IIFE que some dois números definidos dentro da própria função e exiba o resultado.

;(function() {
    const n1 = Math.floor(Math.random() * 99 + 1);
    const n2 = Math.floor(Math.random() * 99 + 1);
    const soma = n1 + n2;
    console.log(`A soma entre ${n1} e ${n2} é igual a ${soma}`)
})()