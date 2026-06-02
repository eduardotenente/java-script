var num = document.getElementById('fnum')
var lista = document.getElementById('resvalor')
let res = document.querySelector('div#res')
let valores = [num]

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
    var c = 0
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        c++
    } else {
        alert('Valor Inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function Finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        res.innerHTML = ''
        res.innerHTML = `<p> Ao todo, temos ${tot} números cadastrados </p>`
    }
}