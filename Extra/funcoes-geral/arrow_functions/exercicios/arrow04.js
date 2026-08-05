// Crie uma arrow function que receba uma temperatura em graus Celsius e retorne seu valor convertido para Fahrenheit.
// Formula: F = (C x 1,8) + 32

const converterTemperatura = Celsius => (Celsius * 1.8) + 32
console.log(
    `Fahrenheit: ${converterTemperatura(
            Math.floor(Math.random()) * 100 + 1
    )}`
)