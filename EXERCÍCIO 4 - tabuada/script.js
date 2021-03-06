function ir(){

    var int = document.getElementById('entrada')
    var tabi = document.getElementById('opcoes')
    var entrada = Number(int.value)
    var tab = 1
    tabi.innerHTML= ''
    while(tab<=10){

        let item = document.createElement('option')
        item.text = `${entrada} x ${tab} = ${entrada*tab}`
        tabi.appendChild(item)
        tab++
    }
}