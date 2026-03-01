/* Faça um programa que solicite ao usuário um número e exiba a tabuada desse número (de 1 a 10) utilizando while */

function tabuada() {
    var res = document.querySelector('div#res')
    var num = document.querySelector('input#valor')
    var c = 1

    if (num.value.length == 0) {
        alert('Verifique se o campo foi preenchido!')
    } else {
        while (c <= 10) {
            var nc = Number(num.value) * c
            res.innerHTML += '<br>'
            res.innerHTML += `${Number(num.value)} x ${c} = ${nc}`
            c++
        }
    }
}