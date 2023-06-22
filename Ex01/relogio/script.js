
function carregar() {
    let mensagem = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');

    var data = new Date();// cria um objeto date, com a data atual
    var hora = data.getHours();//pega somente as horas

    mensagem.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'fotomanha.jpg';
        document.body.style.background = '#e9e91a8a';
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE, VAI UM CHIMAS
        img.src = 'fototarde.jpg';
        document.body.style.background = '#805504b6';
    }else{
        //BOA NOITE GURI
        img.src = 'fotonoite.jpg';
        document.body.style.background = '#530b53';
    }

}
