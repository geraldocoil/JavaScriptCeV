
function contar() {
    var msg = document.getElementById('resultado');
    msg.innerHTML = '';

    var ini = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var pass = document.getElementById('passo');

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('[ERRO] Faltam dados');
        msg.innerHTML = '';
    }else{
        var nInicio = Number(ini.value);
        var nFim = Number(fim.value);
        var nPasso = Number(pass.value);
        if (nPasso <= 0){
            nPasso = 1
        }

        if (nInicio < nFim){
            //Contagem crescente
            for(var cont = nInicio ; cont <= nFim ; cont += nPasso){
                msg.innerHTML += `${cont} > `;
            }
        }else{
            //Contagem regressiva
            for (var cont = nInicio; cont >= nFim ; cont -= nPasso){
                msg.innerHTML += `${cont} < `;
            }
        }
        msg.innerHTML += `\u{1F3C1}`;
    }


   


}
