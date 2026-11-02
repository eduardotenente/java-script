/*
    Lista de Tarefas Persistente

Desenvolva uma lista de tarefas na qual as informações continuem disponíveis mesmo depois que o navegador for fechado e aberto novamente.

Requisitos:
1. Crie um campo para cadastrar uma nova tarefa.
2. Adicione um botão para cadastrar a tarefa.
3. Exiba todas as tarefas cadastradas em uma lista.
4. Permita marcar uma tarefa como concluída.
5. Permita excluir uma tarefa individualmente.
6. Armazene as tarefas no localStorage.
7. Ao atualizar a página, todas as tarefas devem ser recuperadas com seus respectivos estados. 
*/

const formAdicionarTarefa = document.querySelector('#form-adicionar-tarefa');
const tarefa = document.querySelector('#tarefa');

const listaDeTarefas = document.querySelector('#lista-tarefas');

const formLimparTarefas = document.querySelector('#form-limpar-tarefas');
const limparTarefas = document.querySelector('#limpar-tarefas');

const tarefaValor = '';

function adicionarTarefa(tarefaValor) {
    listaDeTarefas.innerHTML += `<li><input type="checkbox">${tarefaValor}</li>`;
}

formAdicionarTarefa.addEventListener('submit', (e) => {
    e.preventDefault();
    const tarefaValor = tarefa.value;

    if (tarefaValor === '') {
        alert("Digite uma tarefa!");
    } else {
        adicionarTarefa(tarefaValor);
    };
});

formLimparTarefas.addEventListener('submit', (e) => {
    e.preventDefault();
    listaDeTarefas.innerHTML = '';
});

function salvarTarefas() {

};

function carregarTarefas() {
    
};