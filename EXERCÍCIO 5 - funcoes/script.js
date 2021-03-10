
    let adi = document.getElementById('entrada')
    let opti = document.getElementById('opcoes')
    let res = document.querySelector('div#res')
    var array = []

    function inNum(n){
        if(Number(n) >=1 && Number(n) <= 100){
            return true
        } else {
            return false
        }
    }

    function inList (n, l){
        if(l.indexOf(Number(n)) != -1){
            return true
        } else {
            return false
        }
    }

    function adicionar (){
        if(inNum (adi.value) && !inList (adi.value, array)){
            array.push(Number(adi.value))
            let item = document.createElement('option')
            item.text = `Valor ${adi.value} adicionado`
            opti.appendChild(item)
        }else{
            window.alert('Número inválido ou já adicionado')
        }

        adi.value = ''
        adi.focus()
    }

    function finalizar (){

        let tot = array.length

        if(array.length == 0){
            alert('adicione um valor')
        }else{
            maior = array[0]
            manor = array[0]
            soma  = array[0]
            for(var pos in array){
                if(array[pos] > maior){
                    maior = array[pos]
                } if (array[pos] < manor){
                    manor = array[0]
                }
                soma += array[pos]
            }
            res.innerHTML = ''
            res.innerHTML += `<p> Ao todo, temos ${tot} valores</p>`
            res.innerHTML += `<p> Esses valores são ${array}</p>`
            res.innerHTML += `<p> A soma é ${soma}</p>`
            res.innerHTML += `<p> O maior é ${maior}</p>`
            res.innerHTML += `<p> O menor é ${manor}</p>`
        }
    }

    