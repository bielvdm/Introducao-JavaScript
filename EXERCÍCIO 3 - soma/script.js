function contar(){

    var entrada = document.getElementById('entrada')
    var saida = document.getElementById('saida')
    var inter = document.getElementById('intervalo')
    var cres = Number(inter.value)
    var int = Number(entrada.value)
    var fim = Number(saida.value)
    var msg = document.getElementById('msg')
    var msg1 = document.getElementById('msg1')
    var msg2 = document.getElementById('msg2')

    msg.innerHTML = ''
    if(fim<int){
        alert('é somar imbecil')
    }
    if(cres<=0){
        alert('n vai tbm né, tem q ser igual ou maior q 1 o intervalo')
    }
    for(let i = int ; i <= fim ; i += cres){

        msg1.innerHTML += `👉🏻${i}`
    }
    msg2.innerHTML = `👉🏻${fim}🏁`
    

}
