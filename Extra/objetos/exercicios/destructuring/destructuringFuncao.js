/*Crie um objeto chamado funcionario contendo:

nome
cargo
salario

Depois, crie uma função chamada mostrarFuncionario() que receba esse objeto como parâmetro.

Utilize object destructuring diretamente no parâmetro da função para obter nome, cargo e salario.

A função deverá exibir uma frase semelhante a:

Nome: ...
Cargo: ...
Salário: ... */

const funcionario = {
    nome: "Geraldo",
    cargo: "Administrador de Loja",
    salario: 4155.53
};

function mostrarFuncionario({nome, cargo, salario}) {
    console.log(`Nome do funcionario: ${nome}`);
    console.log(`Cargo: ${cargo}`);
    console.log(`Salário: R$${salario}`);
};

mostrarFuncionario(funcionario);