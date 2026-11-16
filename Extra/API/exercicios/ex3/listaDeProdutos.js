async function buscarProdutos() {
  try {
    const resposta = await fetch('https://fakestoreapi.com/products');

    if(!resposta.ok) {
        throw new Error('O servidor se encontra indisponível no momento', resposta.status);
    };

    const produtos = await resposta.json();
    const lista = {
        titulo: [],
        preco: []
    };

    const pegarInformacoes = produtos.forEach(produtos => {
        if(produtos.title) {
            lista.titulo.push(produtos.title);
        };

        if(produtos.price) {
            lista.preco.push(produtos.price);
        };
    });

    console.log(lista);
    return lista;

  } catch (error) {
    console.error('[Erro na busca pelos produtos]:', error.message);
  }  
};

buscarProdutos();