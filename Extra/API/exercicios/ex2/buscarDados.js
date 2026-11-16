const identificador = Math.floor(Math.random() * 10 + 1);
console.log(`Número sorteado: ${identificador}`)

async function buscarUsuario(id) {
    try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!resposta.ok) {
            throw new Error('[O servidor está indisponível no momento.]', resposta.status);
        }

        const dados = await resposta.json();

        const usuario = {
            nome: dados.name,
            email: dados.email,
            telefone: dados.phone
        };

        console.log('Dados do usuário:', usuario);
        return usuario;
                
    } catch (error) {
        console.error('Erro na busca pelo usuário', error.message);
        return null;
    }
};

buscarUsuario(identificador);