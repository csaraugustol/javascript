
function calcular(){
    
    var peso = document.getElementById("inputPeso").value
    var altura = document.getElementById("inputAltura").value
    verificaNulo(peso,altura)

    var pesoReplace = peso.replace(",",".");
    var novoPeso = parseFloat(pesoReplace)
 
    var pesoAltura = altura.replace(",",".");
    var novaAltura = parseFloat(pesoAltura)
    
    verificacao(novoPeso,novaAltura)
    alert("O seu IMC é: " + novoPeso/Math.pow(novaAltura,2));
}

function verificacao(peso,altura){
    if(peso<0 || altura < 0){
        alert("Dados inválidos.");
        Form.reset();  
    }
}

function verificaNulo(peso,altura){
    if(peso=="" || altura==""){
        alert("Campo nulo informado.");
        Form.reset();   
    }
}

/*function calcular()
{
    
    var recebePeso = document.getElementById("inputPeso").value
    var recebeAltura = document.getElementById("inputAltura").value
    campoNulo(recebePeso,recebeAltura)

    var replaPeso = parseFloat(recebePeso.replace(",","."))
    var replaAlt = parseFloat(recebeAltura.replace(",","."))
    
    verificacao(replaPeso,replaAlt)
    alert("O seu IMC é: " + replaPeso/replaAlt*replaAlt);
}

function verificacao(peso,altura)
{
    if(peso<0 || altura < 0)
    {
        alert("Dados inválidos.");
        Form.reset();  
    }
}

function verificaNulo(p,a)
{
    if(p=="" || a=="")
    {
        alert("Preencha todos os campos para realizar o cálculo.");
        Form.reset();   
    }
}*/