function carregar (){
    var bomdia = window.document.getElementById('bomdia')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `O horário atual é <strong>${hora}h${min}min<strong>`
    if(hora >= 0 && hora < 12){

        bomdia.innerHTML = 'Bom dia 😊'
        document.body.style.backgroundImage= 'linear-gradient(to bottom right,rgb(104, 163, 252), rgb(173, 204, 250))'
        img.src = 'manha.png'
    }
    else if (hora >= 12 && hora <=18){

        bomdia.innerHTML = 'Boa tarde 😁'
        document.body.style.background = 'linear-gradient(to bottom right,rgb(252, 158, 104), rgb(248, 212, 178))'
        img.src = 'tarde.png'

    }else{
        
        bomdia.innerHTML = 'Boa noite 😴'
        document.body.style.background = 'linear-gradient(to bottom right,rgb(19, 41, 141), rgb(158, 159, 255))'
        img.src = 'noite.png'

    }
}

