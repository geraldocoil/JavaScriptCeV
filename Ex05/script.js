let txtnumero = document.getElementById('txtnum');
//let numero = Number(txtnumero.value); //Converte o número capturado -> para int

let tabela = document.querySelector('select#tabela');

let msg = document.getElementById('resultado');

let valores = []; //Vetor que guarda os valores digitados

let numTotal = 0;
let maior = 0;
let menor = 0;
let total = 0;  
let media = 0;


//Valida se o número é entre 1--100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}
//Valida se o número já esta na lista
function inLista(n,l){
    if (l.indexOf(Number(n)) != -1) {
        //Numero não está na lista
        return true;
    }else{
        //Número já está na lista
        return false;
    }
}



function adicionar(){
    //Validar Número:
    if (isNumero(txtnumero.value) && !inLista(txtnumero.value, valores)){
        let numero = Number(txtnumero.value); //Converter o valor do input -> para Int
        //Adicionar o número no array
        valores.push(numero);//Adiciona o numero na ultima posição do array
        //ou valores.push(Number(txtnumero.value));


        //Adicionar um <option> com o número adicionado
        var item = document.createElement('option');
        item.text =  `${numero}`;
        tabela.appendChild(item);

        //Contagem do total de números adicionados
        numTotal++;//Sempre q um número for adicionado, incrementa +1 a variavel numTotal

        //Soma de todos os números adicionados
        total += numero;//Sempre q um número for adicionado, ele será somado dentro do total

        msg.innerHTML = '';

    }else{
        window.alert('Valor digitado é inválido ou já está está na tabela!!!');
    }
    txtnumero.value = '';//Apaga o número adicionado do input
    txtnumero.focus();//deixa o input selecionado


}


function finalizar(){
    media = parseFloat(media);
    media = (total/numTotal);//Calcular media

    //Validar qual é o MAIOR e o MENOR número digitado
    for (let cont in valores){
        if (cont == 0){
            maior = valores[cont]
            menor = valores[cont]
        }else{
            if (valores[cont] > maior){//Se o valor do indice for > que MAIOR, ele se torna o maior
                maior = valores[cont]
            }else if(valores[cont] < menor){ //Se o valor do incice for < que MENOR, ele se torna o menor
                menor = valores[cont]
            }

        }
    }

    msg.innerHTML = '';

    msg.innerHTML += `<p> No total foram adicionados ${numTotal} números a tabela </p>`;
    msg.innerHTML += `<p> O maior valor digitado foi ${maior} </p>`;
    msg.innerHTML += `<p> O menor valor digitado foi ${menor} </p>`;
    msg.innerHTML += `<p> A soma total de todos os números digitados, é igual a ${total} </p>`;
    msg.innerHTML += `<p> A média entre todos os números digitados é igual a ${media} </p>`;


}