function Adicionar() {
    var num = [document.getElementById('numtxt')]
    var resvalor = document.getElementById('resvalor')
    var c = 1
    var maior = 0
    var menor = Infinity()
    var media = 0
    var soma = 0

    if (num.length == 0) {
        alert('Campo Vazio!')
    } else {
        resvalor.innerHTML += `Valor ${num} adicionado`
        c++
    }
}

function Finalizar() {
    var res = document.querySelector('div#res')
    res.innerHTML = `Ao todo, temos ${c} números cadastrados.`
    res.innerHTML += `O maior valor informado foi ${maior}.`
    res.innerHTML += `O menor valor informado foi ${menor}.`
    res.innerHTML += `Somando todos os valores, temos ${soma}.`
    res.innerHTML += `A média dos valores digitados é ${media}.`
}