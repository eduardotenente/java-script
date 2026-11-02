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