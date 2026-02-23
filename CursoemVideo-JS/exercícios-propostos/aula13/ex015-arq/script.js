function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.querySelector('input#ano')
    var res = document.querySelector('div#desc')
    
    if (Number(nasc.value) > ano || nasc.value.length == 0) {
        alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('option')
        var idade = ano - Number(nasc.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[1].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src','criança-m.jfif')
            } else if (idade >= 14 && idade < 20) {
                img.setAttribute('src','jovem-m.GIF')
            } else if (idade >= 20 && idade < 40) {
                img.setAttribute('src','adulto-m.jfif')
            } else if (idade >= 40 && idade < 60) {
                img.setAttribute('src','altaidade-m.jfif')
            } else if (idade >= 60) {
                img.setAttribute('src','idoso-m.jfif')
            }
        } else if (fsex[0].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src','criança-f.jfif')
            } else if (idade >= 14 && idade < 20) {
                img.setAttribute('src','jovem-f.jfif')
            } else if (idade >= 20 && idade < 40) {
                img.setAttribute('src','adulto-f.jfif')
            } else if (idade >= 40 && idade < 60) {
                img.setAttribute('src','altaidade-f.jfif')
            } else if (idade >= 60) {
                img.setAttribute('src','idosa-f.jfif')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}