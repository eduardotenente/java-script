const formAdicionarTarefa = document.querySelector('#form-adicionar-tarefa');
const formLimparTarefas = document.querySelector('#form-limpar-tarefas');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const removerTarefa = document.querySelector('#remover-tarefa');
const concluirTarefa = document.querySelector('#concluir-tarefa');
const tarefaInput = document.querySelector('#tarefa');
let tarefas = [];

function carregarTarefas() {
    try {
        const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas'));
        tarefas = Array.isArray(tarefasSalvas) ? tarefasSalvas : [];

    } catch (erro) {
        console.error('Erro ao recuperar tarefas:', erro);
        tarefas = [];
    }
    renderizarTarefas();
};

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
};

function renderizarTarefas() {
    listaDeTarefas.innerHTML = '';

    tarefas.forEach((tarefa) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');

        checkbox.type = 'checkbox';
        checkbox.dataset.id = tarefa.id;

        const texto = document.createElement('span');
        texto.textContent = tarefa.descricao;

        if (tarefa.concluida) {
            texto.classList.add('concluida');
        };

        const botaoRemover = document.createElement('button');
        botaoRemover.type = 'button';
        botaoRemover.textContent = 'Excluir';
        botaoRemover.classList.add('botao-remover');

        botaoRemover.addEventListener('click', () => {
            removerTarefas([tarefa.id]);
        });

        li.append(checkbox, texto, botaoRemover);
        listaDeTarefas.appendChild(li);
    });
};

function adicionarTarefa(valor) {
    const novaTarefa = {
        id: Date.now() + Math.random(),
        descricao: valor,
        concluida: false
    };

    tarefas.push(novaTarefa);

    salvarTarefas();
    renderizarTarefas();
};

function concluirTarefas() {
    const checkboxes = document.querySelectorAll(
        '#lista-tarefas input[type="checkbox"]:checked'
    );

    const idsSelecionados = Array.from(checkboxes).map((checkbox) => {
        return Number(checkbox.dataset.id);
    });

    tarefas = tarefas.map((tarefa) => {
        if (idsSelecionados.includes(tarefa.id)) {
            return { ...tarefa, concluida: true };

        };

        return tarefa;
    });

    salvarTarefas();
    renderizarTarefas();
};

function removerTarefas(ids) {
    tarefas = tarefas.filter((tarefa) => {
        return !ids.includes(tarefa.id);
    });

    salvarTarefas();
    renderizarTarefas();
};

function limparTarefas() {
    tarefas = [];

    salvarTarefas();
    renderizarTarefas();
};

formAdicionarTarefa.addEventListener('submit', (e) => {
    e.preventDefault();
    const valor = tarefaInput.value.trim();

    if (valor === '') {
        alert('Digite uma tarefa!');
        return;
    }

    adicionarTarefa(valor);
    tarefaInput.value = '';
});

concluirTarefa.addEventListener('click', concluirTarefas);

removerTarefa.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll(
        '#lista-tarefas input[type="checkbox"]:checked'
    );

    const idsSelecionados = Array.from(checkboxes).map((checkbox) => {
        return Number(checkbox.dataset.id);
    });

    removerTarefas(idsSelecionados);
});

formLimparTarefas.addEventListener('submit', (e) => {
    e.preventDefault();
    limparTarefas();
});

carregarTarefas();
