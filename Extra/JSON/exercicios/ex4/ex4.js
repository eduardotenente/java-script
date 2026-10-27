/*Você recebeu uma string JSON com os dados de um funcionário: nome, cargo, salário e departamento.

Requisitos:
- Converta a string em um objeto JavaScript.
- Atualize o cargo e o salário do funcionário.
- Adicione uma propriedade chamada ativo, indicando se ele continua trabalhando na empresa.
- Converta o objeto atualizado novamente para JSON.
- Exiba o resultado final. */

const dadosJson = '{"funcionário":{"nome":"dudu","cargo":"Programador Júnior","salário":3500,"departamento":"Front-End"}}';

try {
    const dadosObjeto = JSON.parse(dadosJson);

    dadosObjeto.cargo = "Desenvolvedor Pleno";
    dadosObjeto.salário = 6200;
    dadosObjeto.ativo = true;

    const dadosAtualizados = JSON.stringify(dadosObjeto);
    console.log(dadosAtualizados);

} catch (error) {
    console.error("O JSON é inválido!")
};