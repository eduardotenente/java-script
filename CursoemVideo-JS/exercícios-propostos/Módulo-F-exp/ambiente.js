var num = document.getElementById('fnum')
var lista = document.getElementById('resvalor')
let res = document.querySelector('div#res')
let valores = [num]
let maior = 0
let menor = Infinity
var soma = 0
var c = 0

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
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        c++
        if(num.value > maior) {
            maior = num.value
        }
        if(num.value < menor) {
            menor = num.value
        }
        soma = soma + num.value
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
        res.innerHTML = `<p> Ao todo, temos ${tot- 1} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${Number(soma.value)}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${média.value} .</p>`
    }
}