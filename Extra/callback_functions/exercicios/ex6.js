/*Crie uma função que receba uma frase e uma callback. A callback deverá transformar a frase em letras maiúsculas. */

function exibirEmMaiusculas(fraseMaiuscula){
    console.log("----------------------------------")
    console.log(`Em letras maiúsculas: "${fraseMaiuscula.toUpperCase()}"`)
};

function fraseGuardada(frase, cb){
    const fr = frase;
    console.log(`Frase: "${frase}"`)
    cb(fr)
};

fraseGuardada("Alguém já passou por aqui.", exibirEmMaiusculas);