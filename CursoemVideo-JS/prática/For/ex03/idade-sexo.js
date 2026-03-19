function verificar () {
    var sexo = document.querySelector('input#sx')
    var H = 0
    var Mulh = 0
    var Mulh20 = 0
    var idade = document.querySelector('input#idade')
    var Soma_idade = 0
    var Soma_idade_Homem = 0
    var Média = 0
    var Média_Homem = 0
    var res = document.querySelector('div#res')
    
    for (var c = 1; c <= 5; c++) {
        var SI = Soma_idade + Number(idade.value)

        if (sexo == 'F') {
            Mulh++
        } else if (sexo == 'M') {
            H++
            var SIH = Soma_idade_Homem + Number(idade.value)
        }

        if (sexo == 'F' && idade > 20) {
            Mulh20++
        }
    }
    var Média = Soma_idade / c
    var Média_Homem = Soma_idade_Homem / c
    
    res.innerHTML = `Homens Cadastrados: ${H}`
    res.innerHTML += `Mulheres Cadastradas: ${Mulh}`
    res.innerHTML += `Média da Idade do Grupo: ${Média} anos`
    res.innerHTML += `Média da Idade dos Homens: ${Média_Homem} anos`
    res.innerHTML += `Mulheres com mais de 20 anos: ${Mulh20}`
}