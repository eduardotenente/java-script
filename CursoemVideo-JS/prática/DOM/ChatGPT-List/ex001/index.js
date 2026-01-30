var r = document.querySelector('input#res')
r.addEventListener('click', somar)

function somar() {
    var tn1 = document.querySelector('input#num1')
    var tn2 = document.querySelector('input#num2')
    var RE = document.querySelector('p#resul')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var S = n1 + n2
    RE.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${S}`
}