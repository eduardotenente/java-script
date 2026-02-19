function clicar() {
    var nasc = document.querySelector('input#ano')
    var num = Number(nasc.value)
    var F = document.querySelector('input#fem')
    var M = document.querySelector('input#masc')
    var res = document.querySelector('div#desc')
    var img = document.querySelector('div#imagem')
    var idade = 2026 - num

    if (F == null || M == null || idade > 90 || idade == null) {
        alert('[ERRO] Verifique os dados novamente!')
    }

    if (idade < 14 && F) {
        res.innerText = `Detectamos mulher, você possui ${idade} anos.`
        img.innerHTML = '<img src="imagens/criança-f.jfif" alt="Imagem"></img>'
    }
        if (idade < 14 && M) {
        res.innerTextd = `Detectamos homem, você possui ${idade} ansos.`
        img.innerHTML = '<img src="imagens/criança-m.jfif" alt="Imagem"></img>'
    }
        if (idade >= 14 && idade < 20 && F) {
        res.innerText = `Detectamos mulher, você possui ${idade} anos.`
        img.innerHTML = '<img src="imagens/14-20-f.jfif" alt="Imagem"></img>'
    } 
        if (idade >= 14 && idade < 20 && M) {
        res.innerText = `Detectamos homem, você possui ${idade} anos.`
        img.innerHTML = '<img src="imagens/14-20-m.gif" alt="Imagem"></img>'
    } 
        if (idade >= 20 && idade < 40 && F) {
        res.innerText = `Detectamos mulher, você possui ${idade} anos.`
        img.innerHTML = '<img src="imagens/20-40-f.jfif" alt="Imagem"></img>'
    } 
        if (idade >= 20 && idade < 40 && M) {
        res.innerText = `Detectamos homem, você possui ${idade} anos.`
        img.innerHTML = '<img src="imagens/20-40-m.jfif" alt="Imagem"></img>'
    }
        if (idade >= 40 && idade < 60 && F) {
        res.innerText = `Detectamos mulher, você possui ${idade} anos.`
        img.innerHTML = '<img src="imagens/50-60-f.jfif" alt="Imagem"></img>'
    }
        if (idade >= 40 && idade < 60 && M) {
        res.innerText = `Detectamos homem, você possui ${idade} anos.`
        img.innerHTML = '<img src="imagens/50-60-m.jfif" alt="Imagem"></img>'
    }
        if (idade >= 60 && idade < 90 && F) {
        res.innerText = `Detectamos mulher, você possui ${idade} anos.`
        img.innerHTML = '<img src="imagens/61+---f.jfif" alt="Imagem"></img>'
    }
        if (idade >= 60 && idade < 90 && M) {
        res.innerText = `Detectamos homem, você possui ${idade} anos.`
        img.innerHTML = '<img src="imagens/61-masc.jfif" alt="Imagem"></img>'
    }
}