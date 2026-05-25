// Crie uma função inverterString que receba uma string e retorne ela invertida.

let string = 'Bem-vindo ao Sistema!'

function inverterString(stringInvertida) {
    let resultado = ""
    for(let i = stringInvertida.length - 1; i >= 0; i--) {
        resultado += stringInvertida[i]
    }
    return resultado
}

console.log(inverterString(string))
/* 
    Explicação para Fixação:
    Cria uma variável indice que recebe a string;
    lê a string e subtrai seu tamanho;
    Faz a subtração enquanto o indice for maior ou igual a zero, ou seja, enquanto houver valores para ler;
    Subtrai o indíce para avançar na leitura;
    "resultado" recebe e soma com a string com o indíce, assim guardando todas as letras invertidas em si mesmo;
*/