/*Crie um objeto livro com:

titulo
autor
editora

Remova a propriedade editora e exiba o resultado. */

var livro = {
    titulo: "A Virada de Página",
    autor: "Shiiiryu",
    editora: "Nana's Books"
}
delete(livro.editora)

console.log(livro)