/*2- Crie um novo documento HTML em que o usuário digite o valor da cotação do dolar, e o valor em reais e converta para dolar. */

function converter(){
    var vr, c, r
    vr = document.getElementById("valor_reais").value 
    c = document.getElementById("cotação").value
    r = parseFloat(vr) / c
    r = r.toFixed(2)
    document.getElementById("resultado").innerHTML=`O resultado da conversão é ${r}`
}