let num = document.getElementById('fnum')
let lista = document.getElementById('resvalor')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    var soma = 0
    let c = 0
    let maior = 0
    let menor = Infinity
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        c++
        if(maior > num.value) {
            let maior = num.value
        }
        if(menor < num.value) {
            let menor = num.value
        }
        var soma = soma.value + num.value
        lista.innerHTML += `valor ${num} adicionado`
    } else {
        alert('Valor Inválido ou já encontrado na lista!')
    }
    var media = soma / c
}

function Finalizar() {
    if(Adicionar()) {

    } else {
        res.innerHTML = `Ao todo, temos ${c} números cadastrados.`
        res.innerHTML += `O maior valor informado foi ${maior}.`
        res.innerHTML += `O menor valor informado foi ${menor}.`
        res.innerHTML += `Somando todos os valores, temos ${soma}.`
        res.innerHTML += `A média dos valores digitados é ${media}.`
    }
}