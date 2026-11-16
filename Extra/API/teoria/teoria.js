const usuarioDigitado = "shiiiryu";

async function buscarUsuario() {
    try {
        const requisicao = await fetch('https://api-exemplo.com');
        const resposta = await requisicao.json();
        console.log(resposta);
    } catch (error) {
        console.error('Erro na busca', error);
    }
};

buscarUsuario();