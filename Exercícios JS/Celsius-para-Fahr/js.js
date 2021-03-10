function inicio(){
    var headerElement = document.createElement('header');
    document.body.appendChild(headerElement);

    var imgElement = document.createElement('img');
    imgElement.setAttribute('src','img/logo.png');
    imgElement.setAttribute('id','logo');
    document.querySelector('header').appendChild(imgElement);

    var sectionElement = document.createElement('section');
    sectionElement.setAttribute('id','sectionContainer');
    document.body.appendChild(sectionElement);

    var inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text')
    inputElement.setAttribute('placeholder', 'Celsius em fahrenheit')
    inputElement.setAttribute('id', 'telaDados')
    inputElement.setAttribute('onload','calculaResult()');
    document.querySelector('section').appendChild(inputElement);

    var calElement = document.createElement('input');
    calElement.setAttribute('type', 'submit')
    calElement.setAttribute('value', 'Calcular')
    calElement.setAttribute('id','botaoCalcular')
    calElement.setAttribute('onclick','calculaResult()')
    document.querySelector('section').appendChild(calElement);

    var sectiorDoisElement = document.createElement('div');
    sectiorDoisElement.setAttribute('id','sesaoResultado');
    document.body.appendChild(sectiorDoisElement);

    var pElement = document.createElement('p');
    pElement.setAttribute('id','paragrafo');
    document.querySelector('div').appendChild(pElement);

    var pElement = document.createElement('class');
    pElement.setAttribute('class','btn btn-primary');
    document.querySelector('class').appendChild(pElement);
    
}

function calculaResult(){
    var recebeDados = document.getElementById('telaDados').value;
    var result = (parseFloat(recebeDados) * 1.8) + 32
    document.getElementById('paragrafo').innerHTML = recebeDados+ "ºC = " + result + " ºF";
    console.log(result);
}