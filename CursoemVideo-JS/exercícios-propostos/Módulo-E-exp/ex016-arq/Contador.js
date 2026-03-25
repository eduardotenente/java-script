function Contagem() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0) {
        alert('Campos vazios! Tente Novamente.')
    } else if (passo.length.value == 0) {
        while (Number(inicio.value) <= Number(fim.value)) {
            var soma = Number(inicio.value) + 1
            res.innerText += `--> ${soma}`
        }
    } else {
            while (Number(inicio.value) <= Number(fim.value)) {
                var soma = Number(inicio.value) + Number(passo.value)
                res.innerText += `--> ${soma}`
        }
    }
}