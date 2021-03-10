function verificaInput(cor1, cor2){
    var carac = document.getElementById('campoInput').value;
    var c = carac.length

    if(c < 3){
        document.getElementById('campoInput').style.background = cor1;
    }else{
        document.getElementById('campoInput').style.background = cor2;
    }

    console.log(c);
}