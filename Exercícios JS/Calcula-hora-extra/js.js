function inicio() {
        var qtdhora = document.getElementById("inputQtdHora").value
        var valorhora = document.getElementById("inputValorHora").value

        var repQtdhora = qtdhora.replace(",", ".");
        var repnovaValorhora = valorhora.replace(",", ".");

        calculaHoras(repQtdhora, repnovaValorhora)
}
function calculaHoras(repQtdhora, repnovaValorhora) {

    var resultado = repQtdhora * repnovaValorhora;
    console.log(resultado);
    alert(resultado);
}