function inicio() {

    calculaResult();
}
function calculaResult() {
    var dadoGrauEsfOlhoEsq = document.getElementById("grauEsfOlhoEsq").value;
    var dadoGrauEsfOlhoDir = document.getElementById("grauEsfOlhoDir").value;
    var dadoGrauCilOlhoEsq = document.getElementById("grauCilOlhoEsq").value;
    var dadoGrauCilOlhoDir = document.getElementById("grauCilOlhoDir").value;

    var pfDadoGrauEsfOlhoEsq = parseFloat(dadoGrauEsfOlhoEsq);
    var pfDadoGrauEsfOlhoDir = parseFloat(dadoGrauEsfOlhoDir);
    var pfDadoGrauCilOlhoEsq = parseFloat(dadoGrauCilOlhoEsq);
    var pfDadoGrauCilOlhoDir = parseFloat(dadoGrauCilOlhoDir);

    if (pfDadoGrauEsfOlhoEsq >= -12 && pfDadoGrauEsfOlhoEsq <= -3 && pfDadoGrauCilOlhoEsq >= -2 && pfDadoGrauCilOlhoDir >= -2 ||
        pfDadoGrauEsfOlhoDir >= -12 && pfDadoGrauEsfOlhoDir <= -3) {


        if (pfDadoGrauCilOlhoEsq < -2 || pfDadoGrauCilOlhoDir < -2) {
            if (pfDadoGrauEsfOlhoEsq >= -10 && pfDadoGrauEsfOlhoEsq <= -3 && pfDadoGrauCilOlhoEsq >= -2 && pfDadoGrauCilOlhoDir >= -2 ||
                pfDadoGrauEsfOlhoDir >= -10 && pfDadoGrauEsfOlhoDir <= -3 && pfDadoGrauCilOlhoEsq >= -2 && pfDadoGrauCilOlhoDir >= -2) {
                alert("Lente ideal:  Lente Prime");
            }
        }
        else {
            alert("Lente ideal:  Lente Prime");
        }

    }
    else if (pfDadoGrauEsfOlhoEsq >= -15 && pfDadoGrauEsfOlhoEsq <= 0 && pfDadoGrauCilOlhoEsq >= -5 && pfDadoGrauCilOlhoDir >= -5 ||
        pfDadoGrauEsfOlhoDir >= -15 && pfDadoGrauEsfOlhoDir <= 0 && pfDadoGrauCilOlhoEsq >= -5 && pfDadoGrauCilOlhoDir >= -5) {
        alert("Lente ideal:  Lente Vision");

    }
    console.log(result);
}