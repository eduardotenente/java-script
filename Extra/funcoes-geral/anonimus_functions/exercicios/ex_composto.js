/*Crie uma função anônima que receba uma nota e informe se o aluno foi aprovado ou reprovado. */

const situacaoAluno = (N1, N2) => {
    const media = (N1 + N2) / 2
    if(media >= 7 ){
        console.log(`Nota: ${media}, Situação: [APROVADO]`)
    } else if(media >= 5 && media < 7) {
        console.log(`Nota: ${media}, Situação: [RECUPERAÇÃO]`)
    } else {
        console.log(`Nota: ${media}, Situação: [REPROVADO]`)
    };
};

situacaoAluno(8.5, 5.9);