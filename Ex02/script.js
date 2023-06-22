function verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();//pega ano com 4 digitos

    let anoNascimento = document.getElementById('txtano');
    var msg = document.getElementById('res');

    if (anoNascimento.value > anoAtual || anoNascimento.value.length == 0){
        window.alert("Ano inválido");
    }else{
        var sexo = document.getElementsByName('radsex');
        var idade = ano - Number(anoNascimento.value);
        var genero = '';

        var foto = document.createElement('img');
        foto.setAttribute('id','foto');

        if (sexo[0].checked){
            genero = 'Homem';

            if (idade >= 1 && idade <= 10){
                //Criança
                foto.setAttribute('src','criancaH.jpg')
            }
            else if (idade > 10 && idade <= 20){
                //Jovem
                foto.setAttribute('src','jovemH.jpg')
            }
            else if (idade > 20 && idade <= 50){
                //Adulto
                foto.setAttribute('src','adultoH.jpg')
            }
            else if (idade > 50){
                //Idoso
                foto.setAttribute('src','idosoH.jpg')
            }
        }else if (sexo[1].checked){ 
            genero = 'Mulher';

            if (idade >= 1 && idade <= 10){
                //Criança
                foto.setAttribute('src','criancaM.jpg')
            }
            else if (idade > 10 && idade <= 20){
                //Jovem
                foto.setAttribute('src','jovemM.jpg')
            }
            else if (idade > 20 && idade <= 50){
                //Adulto
                foto.setAttribute('src','adultoM.jpg')
            }
            else if (idade > 50){
                //Idoso
                foto.setAttribute('src','idosoM.jpg')
            }
        }


        msg.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        msg.style.textAlign = 'center';
        msg.appendChild(foto);

    }

}