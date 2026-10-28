/*Desenvolva um programa que receba diferentes strings e verifique se elas representam JSON válido.

Requisitos:
- Teste strings com objetos, arrays, números e textos JSON válidos.
- Teste strings inválidas, como objetos com aspas incorretas ou vírgulas sobrando.
- Utilize tratamento de erros com try...catch.
- Exiba uma mensagem informando se cada conteúdo é válido ou inválido.
- Evite que uma string inválida interrompa a execução do programa. */

const objetoJson = '{"perfil":{"nome":"dudu","rede social":"Instagram"}}';
const arrayJson = '{"listaDeTarefas":["limpar","lavar","estudar","comer"]}';
const numeroJson = '{"idade":20}';
const textoJson = '{texto":"Bem-vindo ao programa! Aqui você terá acesso a muitas coisas, entre elas está [...]"}';

try {
    const objetoJS = JSON.parse(objetoJson);
    console.log(objetoJS);
    console.log("O objetoJson é válido!");
} catch (error) {
    console.error("O objetoJson é inválido!")
};
console.log();

try {
    const arrayJS = JSON.parse(arrayJson);
    console.log(arrayJS);
    console.log("O array é válido!")
} catch (error) {
    console.error("O array é inválido!")
};
console.log();

try {
    const numeroJS = JSON.parse(numeroJson);
    console.log(numeroJS);
    console.log("O número é válido!");
} catch (error) {
    console.error("O númeroJson é inválido!");
}
console.log();

try {
    const textoJS = JSON.parse(textoJson);
    console.log(textoJS);
    console.log("O texto é válido!")
} catch (error) {
    console.error("O texto é inválido!")
};