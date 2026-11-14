console.log('Bem-vindo ao programa!');
console.log('Segue a lista de usuários listados na API');
buscarUsuarios();

async function buscarUsuarios() {
    try {
        const busca = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await busca.json();

        console.log(usuarios);
    } catch (error) {
        console.error('Erro na busca!', error);
    }
};