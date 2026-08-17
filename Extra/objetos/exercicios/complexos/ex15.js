/*Crie um objeto estoque contendo:

nome do produto
quantidade atual
quantidade mínima

Adicione métodos para:

adicionar produtos
remover produtos
verificar se o estoque está abaixo da quantidade mínima

Exiba uma mensagem apropriada de acordo com a situação do estoque. */

let estoque = {
    nomeDoProduto: ["Arroz"],
    quantidadeAtual: Math.floor(Math.random() * 1000 + 1),
    quantidadeMinima: Math.floor(Math.random() * 500 + 1),
    adicionarProduto: function() {
        this.nomeDoProduto.push("Feijão");
        this.nomeDoProduto.push("Macarrão");
    },
    removerProduto: function() {
        this.nomeDoProduto.pop();
    },
    verificarEstoque: function() {
        if(this.quantidadeAtual < this.quantidadeMinima) {
            console.log("O Estoque está abaixo da quantidade mínima!");
        } else {
            console.log("O Estoque está abastecido acima da quantidade mínima!");
        };
    }
};

console.log("----------------------------------------")
console.log("   Estoque")
console.log(`Nome do Produto: ${estoque.nomeDoProduto}`);
console.log(`Quantidade Atual do produto: ${estoque.quantidadeAtual}`);
console.log(`Quantidade Mínima do produto: ${estoque.quantidadeMinima}`);
console.log()
console.log("   Situação do Estoque")
estoque.verificarEstoque();

console.log("----------------------------------------")
console.log("   Adicionar Produtos")
estoque.adicionarProduto();
console.log(`Produtos adicionados: ${estoque.nomeDoProduto[1]} e ${estoque.nomeDoProduto[2]}`);
console.log(`Por decisão do CEO, removeremos o produto ${estoque.nomeDoProduto[2]}`);
estoque.removerProduto();
console.log(`Produtos atuais: ${estoque.nomeDoProduto}`);
console.log("----------------------------------------")