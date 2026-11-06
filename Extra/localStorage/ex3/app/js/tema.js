const alternarTema = document.querySelector('#trocar-tema');
const cabecalho = document.querySelector('#cabecalho');

let tema = [
    fundoCabecalho = cabecalho.style.background = 'var(--cabeçalho-claro)',
    textoCabecalho = cabecalho.style.color = 'var(--texto-claro)',
    textoCabecalho = cabecalho.style.color = 'var(--texto-claro)',
    fundoBody = document.body.style.background = 'var(--fundo-claro)',
    textoBody = document.body.style.color = 'var(--texto-claro)'
];

alternarTema.addEventListener('click', () => {
    tema.fundoCabecalho = cabecalho.style.background = 'var(--cabeçalho-escuro)';
    tema.textoCabecalho = cabecalho.style.color = 'var(--texto-escuro)';
    tema.fundoBody = document.body.style.background = 'var(--fundo-escuro)';
    tema.textoBody = document.body.style.color = 'var(--texto-escuro)';

    // salvarTema();
});

/* function salvarTema() {
    localStorage.setItem(JSON.stringify('temaAtivo', tema));
}*/