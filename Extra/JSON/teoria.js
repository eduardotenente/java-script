const usuario = {
    nome: "Eduardo",
    idade: 19,
    habilidades: ["JavaScript", "HTML", "CSS", "Git", "GitHub", "Algoritmo"]
};

// Converter para String JSON
const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);

console.log();


// Converter para OBJETO JS
/* 
bloco try...catch -> evitar que o código trave caso o
                     JSON estiver mal formatado.
*/
try {
    const usuarioObjeto = JSON.parse(usuarioJSON);
    console.log(usuarioObjeto);
    console.log();
    console.log(usuarioObjeto.nome);
    console.log(usuarioObjeto.idade);
} catch (erro) {
    console.error("A string fornecida não é um JSON válido!")
};