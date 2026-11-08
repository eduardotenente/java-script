const alternarTema = document.querySelector('#trocar-tema');
const cabecalho = document.querySelector('#cabecalho');
let temaAtual = '';

function aplicarTema() {
    document.body.classList.add('dark-mode');
    cabecalho.classList.add('header-dark-mode');
    temaAtual = 'escuro'
    alternarTema.checked = true;
};

function temaPadrao() {
    document.body.classList.remove('dark-mode');
    cabecalho.classList.remove('header-dark-mode');
    temaAtual = 'claro'
    alternarTema.checked = false;
};

function carregarTema (temaCarregado) {
    if (temaCarregado === 'escuro') {
        aplicarTema();
    } else {
        temaPadrao();
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const temaRecuperado = localStorage.getItem('temaAtivo');

    if (temaRecuperado) {
        carregarTema(temaRecuperado);
    } else {
        temaPadrao();
    }
});

alternarTema.addEventListener('change', () => {
    if(alternarTema.checked) {
        aplicarTema();
    } else {
        temaPadrao();
    }

    salvarTema();
});

function salvarTema() {
    if (temaAtual == 'escuro') {
        localStorage.setItem('temaAtivo', 'escuro');
    } else if (temaAtual == 'claro') {
        localStorage.setItem('temaAtivo', 'claro');
    };
};