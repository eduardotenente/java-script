var obj = {
    nome: "Eduardo",
    idade: 19,
    profissão: "Desenvolvedor Web",
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissão);

console.log(`O meu nome é ${obj.nome}`);

obj.nome = "Pedro";
console.log(obj.nome);

obj.graduacao = true;
console.log(obj.graduacao);