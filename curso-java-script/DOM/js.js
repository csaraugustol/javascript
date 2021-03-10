function distribuiCaractere(){
    //Recebe valor
    var carac = document.getElementById('entrada').value;
    //Limpa campo
    document.getElementById('entrada').value = '';
    
    //Remove caracteres nas eztremidades
    carac.trim();


    if (carac == '0' || carac == '1' || carac == '2' || carac == '3' || carac == '4' || carac == '5' || carac == '6' || carac == '7' || carac == '8' || carac == '9'){
        document.getElementById('num').value = carac;
    }else{
        document.getElementById('letras').value = carac;
    }
}

function modificaEstilo(corDeFundo){
document.getElementById('divEstilo').style.background = corDeFundo;
}

function modificarClasse(){
document.getElementById('mensagem').className = 'estilo2'
}