const formAdicionarTarefa = document.querySelector('#form-adicionar-tarefa');
const formLimparTarefas = document.querySelector('#form-limpar-tarefas');
const listaDeTarefas = document.querySelector('#lista-tarefas');

const limparTarefas = document.querySelector('#limpar-tarefas');
const removerTarefa = document.querySelector('#remover-tarefa');
const concluirTarefa = document.querySelector('#concluir-tarefa');
const tarefa = document.querySelector('#tarefa');

let tarefas = [];
let tarefasConcluidas = [];
let tarefasRemovidas = [];

function adicionarTarefa(tarefaValor) {
    listaDeTarefas.innerHTML += `<li><label><input type="checkbox">${tarefaValor}</label></li>`;
    console.log(tarefas)
};

window.addEventListener('DOMContentLoaded', () => {
    let tarefasSalvas = JSON.parse(localStorage.getItem('tarefas'));
    let tarefasConcluidasSalvas = JSON.parse(localStorage.getItem('tarefasConcluidas'));
    let tarefasRemovidasSalvas = JSON.parse(localStorage.getItem('tarefasRemovidas'));

    if (tarefasSalvas) {
        tarefas = tarefasSalvas;
    } else {
        tarefas = [];
    };

    if (tarefasConcluidasSalvas) {
        tarefasConcluidas = tarefasConcluidasSalvas;
    } else {
        tarefasConcluidas = [];
    };

    if (tarefasRemovidasSalvas) {
        tarefasRemovidas = tarefasRemovidasSalvas;
    } else {
        tarefasRemovidas = [];
    };

    console.log(`Tarefas carregadas: ${tarefas}`);
});

formAdicionarTarefa.addEventListener('submit', (e) => {
    e.preventDefault();
    tarefas.push(tarefa.value);

    if (tarefa.value === '') {
        alert("Digite uma tarefa!");
    } else {
        adicionarTarefa(tarefa.value);
    };
});

formLimparTarefas.addEventListener('submit', (e) => {
    e.preventDefault();
    listaDeTarefas.innerHTML = '';
    tarefas = [];
});

concluirTarefa.addEventListener('click', () => {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    tarefasConcluidas.push(checkboxes);

    for (let posTarefa in tarefas) {
        for (let posConcluida in tarefasConcluidas) {
            if (tarefas[posTarefa] == tarefasConcluidas[posConcluida][0]) {
                tarefas.remove(posTarefa);
                console.log(`Tarefa concluída: ${tarefasConcluidas[posConcluida]}`);
                console.log(tarefas);
            };
        };
    };

    checkboxes.forEach((checkbox) => {
        checkbox.parentElement.style.textDecoration = 'line-through';
        checkbox.parentElement.style.textDecorationColor = 'black';
        checkbox.parentElement.style.color = 'red';

        checkbox.parentElement.textContent = checkbox.parentElement.textContent.replace(
            checkbox.parentElement.textContent, checkbox.parentElement.textContent + ' - Concluída'
        );
    });
});

removerTarefa.addEventListener('click', () => {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    tarefasRemovidas.push(checkboxes.value);
    console.log(`Tarefas removidas: ${tarefasRemovidas.textContent}`);

    checkboxes.forEach((checkbox) => {
        checkbox.parentElement.remove();
    });
});

let salvarTarefas = () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    localStorage.setItem('tarefasConcluidas', JSON.stringify(tarefasConcluidas));
    localStorage.setItem('tarefasRemovidas', JSON.stringify(tarefasRemovidas));
};