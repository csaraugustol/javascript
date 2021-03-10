//TRABALHO FEITO EM DUPLA
//PEDRO > BACK (pouco de front)
//CESAR > FRONT (pouco de back)

function inicio(){
    var div = document.createElement('div');
    document.body.appendChild(div);
    telaUm(div);
    
}

function telaUm(remove){
    remove.parentNode.removeChild(remove);
    //Criação 
    
    //Criação Section
    document.body.setAttribute('id','body1');
    var sectionElement = document.createElement('section');
    sectionElement.setAttribute('id','sectionTela1');
    document.body.appendChild(sectionElement);

    //Imagem Logo
    var imgElement = document.createElement('img');
    imgElement.setAttribute('src','img/logo.png');
    imgElement.setAttribute('id','logo');
    document.getElementById('sectionTela1').appendChild(imgElement);

    //Inserir Mensagem
    var textoElement = document.createElement('p');
    textoElement.innerHTML = 'Vamos calcular o valor do saque-aniversário do seu FGTS?';
    document.getElementById('sectionTela1').appendChild(textoElement);

    //Botão
    var comElement = document.createElement('input');
    comElement.setAttribute('type', 'submit');
    comElement.setAttribute('value', 'Começar!');
    comElement.setAttribute('id','botaoComecar');
    comElement.setAttribute('onclick','telaDois(getElementById(\'sectionTela1\'))');
    document.getElementById('sectionTela1').appendChild(comElement);



    //CESAR
}
function telaDois(remove){
    
    document.body.setAttribute('id','body2');
    remove.parentNode.removeChild(remove);
    //criacao da section
    var element = document.createElement('section');
    element.setAttribute('id','sectionTelaDois');
    document.body.appendChild(element);

    //img de fechar
    var element = document.createElement('img');
    element.setAttribute('id','imgFechar');
    element.setAttribute('src', 'img/fechar.png');
    element.setAttribute('onClick', 'telaUm(getElementById(\'sectionTelaDois\'))');
    document.getElementById('sectionTelaDois').appendChild(element);

    //h2
    var element = document.createElement('h2');
    element.setAttribute('id','cabInputSaldo');
    element.innerHTML = 'DIGITE O SALDO TOTAL DO SEU FGTS';
    document.getElementById('sectionTelaDois').appendChild(element);

    //cricao da section input
    var element = document.createElement('section');
    element.setAttribute('id','sectionInputSaldo');
    document.getElementById('sectionTelaDois').appendChild(element);

    //input number
    var element = document.createElement('input');
    element.setAttribute('id','inputNumberSaldo');
    element.setAttribute('type','number')
    document.getElementById('sectionInputSaldo').appendChild(element);

    //input button
    var element = document.createElement('input');
    element.setAttribute('id','inputButtonSaldo');
    element.setAttribute('type','button');
    element.setAttribute('value', 'Calcular');
    element.setAttribute('onClick', 'telaFinal(getElementById(\'sectionTelaDois\'), resultadoCalculo(getElementById(\'inputNumberSaldo\').value  ))');
    document.getElementById('sectionInputSaldo').appendChild(element);



}
function telaFinal(remove, valorCalculado){

    remove.parentNode.removeChild(remove);
    //PEDRO JS CESAR CSS

    document.body.setAttribute('id','body3');
    //section
    var element = document.createElement('section');
    element.setAttribute('id','sectionTelaFinal');
    document.body.appendChild(element);
    //img fechar
    var element = document.createElement('img');
    element.setAttribute('id','imgFechar');
    element.setAttribute('src', 'img/fechar.png');
    element.setAttribute('onClick', 'telaUm(getElementById(\'sectionTelaFinal\'))');
    document.getElementById('sectionTelaFinal').appendChild(element);
    //h2
    var element = document.createElement('h2');
    element.setAttribute('id','cabResultado');
    element.innerHTML = "Resultado";
    document.getElementById('sectionTelaFinal').appendChild(element);
    //primeiro p
    var element = document.createElement('p');
    element.setAttribute('id', 'pResultado');
    element.innerHTML = "O valor do seu saque aniversário é: R$"+ valorCalculado;
    document.getElementById('sectionTelaFinal').appendChild(element);
    //segundo p
    var element = document.createElement('p');
    element.setAttribute('id', 'pResultado2');
    element.innerHTML = "O valor foi calculado de acordo com a tabela mostrada abaixo";
    document.getElementById('sectionTelaFinal').appendChild(element);
    //tabela
    var element = document.createElement('img');
    element.setAttribute('id','imgResultado');
    element.setAttribute('src','img/tabela.jpeg');
    document.getElementById('sectionTelaFinal').appendChild(element);




}

function resultadoCalculo(valor){
    if( (valor <= 500) ){
        return (50.0/100.0) * valor;
    }else if( (valor > 500) && (valor <= 1000) ){
        return ((40.0/100.0) * valor) + 50.0;
    }else if( (valor > 1000) && (valor <= 5000) ){
        return ((30.0/100.0) * valor) + 150.0;
    }else if( (valor > 5000) && (valor <= 10000) ){
        return ((20.0/100.0) * valor)+ 650.0;
    }else if( (valor > 10000) && (valor <= 15000) ){
        return ((15.0/100.0) * valor)+ 1150.0;
    }else if( (valor > 15000) && (valor <= 20000) ){
        return ((10.0/100.0) * valor) + 1900.0;
    }else if( (valor > 20000) ){
        return ((5.0/100.0) * valor)+ 2900.0;
    }else{
        return 0;
    }
}



