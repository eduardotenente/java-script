const formularioCEP = document.querySelector('#formularioCEP');
const cep = document.querySelector('#cep');

const estado = document.querySelector('#estado');
const cidade = document.querySelector('#cidade');
const bairro = document.querySelector('#bairro');
const endereco = document.querySelector('#endereço');
const situacao = document.querySelector('#situação');

formularioCEP.addEventListener('submit', (evento) => {
    evento.preventDefault();
});

async function buscarCEP() {
    try {
        
    } catch (error) {
        situacao.textContent = 'Não foi possível realizar a busca pelo CEP informado.', error.message;
    }
}