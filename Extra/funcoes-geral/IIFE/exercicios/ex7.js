// Crie uma IIFE que declare uma idade e informe se a pessoa é maior ou menor de idade.

;(function() {
    const idade = Math.floor(Math.random() * 80 + 1);
    console.log(`Idade: ${idade}`);
    if(idade >= 18) {
        console.log("Maior de idade!")
    } else {
        console.log("Menor de idade!")
    };
})()