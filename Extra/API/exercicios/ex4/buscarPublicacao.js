const identificador = Math.floor(Math.random() * 10 + 1);

async function buscarPublicacao(id) {
    try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if(!resposta.ok) {
            throw new Error('AVISO: O servidor não está disponível no momento.', resposta.status);
        };

        const publicacoes = await resposta.json();
        const infoPublicacoes = {
            numeroDaPublicacao: publicacoes.id,
            tituloPublicacao: publicacoes.title,
            conteudoPublicacao: publicacoes.body
        };

        if (infoPublicacoes) {
            console.log(infoPublicacoes);
            return infoPublicacoes;
        } else {
            console.error('O objeto não foi reconhecido ou lido!');
            return null;
        };

    } catch (error) {
        console.error('[Erro na busca pela publicação]:', error.message)
    }
}

buscarPublicacao(identificador);