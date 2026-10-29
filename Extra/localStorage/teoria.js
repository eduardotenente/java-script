const usuario = {
    nome: 'Lucas',
    tema: 'escuro',
    nivel: 2
};

// 1. Salvar: Transforma em string.
localStorage.setItem('perfil', JSON.stringify(usuario));

// 2. Ler: Transforma de volta em objeto.
const perfilSalvo = JSON.parse(localStorage.getItem('perfil'));

console.log(perfilSalvo.nome); // Saída no Console DevTools: Lucas
console.log(perfilSalvo.tema); // Saída no Console DevTools: escuro
console.log(perfilSalvo.nivel); // Saída no Console DevTools: 2