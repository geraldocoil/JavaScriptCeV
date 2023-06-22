

function tabuada() {
    var tab = document.getElementById('seltab');
    var txtn = document.getElementById('txtnumber');

    if (txtn.value.length == 0){
        window.alert('Digite um número primeiro')
    }else{
        var numero = Number(txtn.value);//converte o valor interno do elemento id='txtnumber' para int
        let cont = 1;
        tab.innerHTML = '';

        while (cont <= 10){
            let item = document.createElement('option'); //cria um elemento <option>
            item.text += `${numero} X ${cont} = ${numero*cont}`;
            tab.appendChild(item); //Adiciona um elemento como filho
            cont++;

        }
    }
    





}

