function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var horario = document.querySelector('div#horario')
    var img = document.querySelector('div#imagem')
    horario.innerText = `Agora são ${hora} horas.`
    
    if (hora >= 6 && hora < 12) {
        img.innerHTML = '<img src="imagens/manha.jpg" alt="Imagem de Dia"</img>';
        document.body.style.backgroundColor = 'darkgoldenrod'
    
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = '<img src="imagens/tarde.jpg" alt="Imagem de Dia"</img>'
        document.body.style.backgroundColor = 'brown'
    
    } else {
        img.innerHTML = '<img src="imagens/noite.jpg" alt="Imagem de Dia"</img>'
        document.body.style.backgroundColor = 'gray'
    }
}