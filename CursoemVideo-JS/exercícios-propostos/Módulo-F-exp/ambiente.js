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
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        
    } else {
        alert('Valor Inválido ou já encontrado na lista!')
    }
}