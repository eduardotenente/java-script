const mensagemBoasVindas = () => {
    try {
        console.log('- Bem-vindo(a) ao sistema!');
        console.log('- Este programa mostra uma lista de produtos fictícios.');
        console.log('   Deseja prosseguir?');
    } catch (error) {
        return console.error('A mensagem não pôde ser exibida!');
    }
};

const sortearEscolha = () => {
    try {
        const opcoes = ['sim', 'não'];
        const escolha = opcoes[Math.floor(Math.random() * opcoes.length)];

        console.log(`Resposta: [${escolha}]`);
        return escolha;
    } catch (error) {
        console.error('Ocorreu um erro ao executar a função "sorteio()"!');
    }
};

;(function () {
    try {
        return mensagemBoasVindas();
    } catch (error) {
        console.error('Ocorreu um erro ao exibir o texto inicial');
    }
})()

console.log()

function sortearID() {
    const identificador = Math.floor(Math.random() * 20 + 1);
    return identificador;
}

function mensagemDespedida() {
    console.log('---------------------------------------')
    console.log('- Obrigado por utilizar meu programa!');
    console.log('- Volte sempre!');
    console.log('---------------------------------------')
};

if(sortearEscolha() == 'sim') {
    async function buscarDados(identficacao) {
        try {
            const resposta = await fetch('https://fakestoreapi.com/products');

            if(!resposta.ok) {
                throw new Error('[O servidor não se encontra disponível no momento!]', resposta.status);
            };

            const dados = await resposta.json();
            sortearID(); 

            const produtos = {
                identidade: [],
                titulos: [],
                precos: [] 
            };

            const pegarDados = dados.forEach((produto) => {
                if(produto.id == identficacao) {
                    produtos.identidade.push(produto.id);
                    produtos.titulos.push(produto.title);
                    produtos.precos.push(produto.price);
                }
            });
            
            console.log();
            console.log(`Identificador do Produto: ${produtos.identidade}`);
            console.log(`Título do Produto: ${produtos.titulos}`);
            console.log(`Preço do Produto: ${produtos.precos}`);
            mensagemDespedida();

            return produtos;

        } catch (error) {
            console.error('[Ocorreu um erro ao realizar a busca!]', error.message);
        }
    };

    buscarDados(sortearID());

} else {
    throw new Error('O programa foi encerrado.')
};