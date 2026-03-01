var res = document.querySelector('div#res')

function yes() {
    var sim = document.querySelector('button#sim')
    var data = new Date()
    var agora = data.getFullYear()

    if (agora % 4 == 0 && agora % 400 == 0) {
        res.innerHTML = `${agora} é um ano bissexto!`
    } else {
        res.innerHTML = `${agora} não é um ano bissexto.`
    }
}

function not() {
    var não = document.querySelector('button#nao')
    res.innerHTML = 'Então rala do meu site paizão...'
}