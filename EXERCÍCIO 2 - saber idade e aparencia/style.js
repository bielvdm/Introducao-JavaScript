function validar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var fem = document.getElementById('fem')
    var mas = document.getElementById('mas')
    var res = document.getElementById('res')
    var ano = new Date()
    var idade = ano.getFullYear()
    var anoo = document.getElementById('idade')
    var ida = idade - Number(anoo.value)

    if(anoo.value.length == 0){
        alert('escreve alguma coisa idiota')
    } else {
        msg.innerHTML = `Você tem ${ida} anos amg e se parece com isso`
        var genero = ''
        if(mas.checked){
            genero = 'Homem'

            if(ida <=10 ){

                img.src = 'bebemenino.png'

            }else if (ida <= 30){

                img.src = 'jovemhomem.png'

            } else if (ida <=70){

                img.src = 'adultohomem.png'

            }else {

                img.src = 'veio.png'

            }
        } else if (fem.checked){
            genero = 'Mulher'
            if(ida <=10 ){

                img.src = 'bebemenina.png'

            }else if (ida <= 30){

                img.src = 'jovemmulher.png'

            } else if (ida <=70){

                img.src = 'adultamulher.png'

            }else {

                img.src = 'veia.png'
                
            }
        } 
        res.innerHTML = `E seu gênero é ${genero}`
    }
}