/*Crie uma função que receba um número e uma callback que informe se ele é positivo, negativo ou igual a zero. */

const numberSort = Math.floor(Math.random() * 100 -30);

function verifyNumber(numVerify){
    if(numVerify > 0) {
        console.log("Positive!")
    } else if(numVerify < 0) {
        console.log("Negative!")
    } else {
        console.log("Zero!")
    };
};

function number(num, cb){ 
    console.log(`number select: ${num}`)
    cb(num);
};

number(numberSort, verifyNumber);